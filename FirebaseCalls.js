import { db } from "./firebase";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  collection,
  onSnapshot,
  increment,
  deleteDoc,
} from "firebase/firestore";
import uuid from "react-native-uuid";

const ROOMS_COLLECTION = "rooms";
const COMMENTS_COLLECTION = "comments";
const YT_COLLECTION = "youtube";
const PLAYERS_COLLECTION = "players";
const YT_DOC = "youtube";

export async function getRoom(findCode) {
  return await getDoc(doc(db, ROOMS_COLLECTION, findCode));
}

export async function addPlayer(room, userState) {
  await updateDoc(doc(db, ROOMS_COLLECTION, room.id), {
    numBuds: increment(1),
  });
  const userId = uuid.v4();
  await setDoc(doc(db, ROOMS_COLLECTION, room.id, PLAYERS_COLLECTION, userId), {
    id: userId,
    name: userState.name,
    avatarUri: userState.avatarUri,
    isTalking: true,
  });
  return userId;
}

export async function updatePlayer(room, userState, userId) {
  await updateDoc(
    doc(db, ROOMS_COLLECTION, room.id, PLAYERS_COLLECTION, userId),
    {
      name: userState.name,
      avatarUri: userState.avatarUri,
    }
  );
  return userId;
}

export async function updateIsTalking(isTalking, roomId, docId) {
  await updateDoc(
    doc(db, ROOMS_COLLECTION, roomId, PLAYERS_COLLECTION, docId),
    {
      isTalking: isTalking,
    }
  );
}

export async function removePlayer(toTop, roomId, navigation, docId) {
  await updateDoc(doc(db, ROOMS_COLLECTION, roomId), {
    numBuds: increment(-1),
  });
  await deleteDoc(doc(db, ROOMS_COLLECTION, roomId, PLAYERS_COLLECTION, docId));
  if (toTop) {
    navigation.popToTop();
  } else {
    navigation.pop(4);
  }
}

export async function togglePlay(isPlaying, currentTime, room, name) {
  await updateDoc(doc(db, ROOMS_COLLECTION, room.id, YT_COLLECTION, YT_DOC), {
    isPlaying: isPlaying,
    currentTime: currentTime,
    name: name,
  });
}

export async function createRoom(name, maxBuds, interests) {
  const id = uuid.v4();
  const room = {
    id: id,
    name: name,
    maxBuds: maxBuds,
    numBuds: 0,
    interests: [interests],
  };
  await setDoc(doc(db, ROOMS_COLLECTION, id), room);
  await setDoc(doc(db, ROOMS_COLLECTION, id, YT_COLLECTION, YT_DOC), {
    isPlaying: false,
    currentTime: 0,
  });
  return room;
}

export async function uploadComment(
  roomId,
  comment,
  onChangeComment,
  name,
  avatarUri
) {
  const commentId = uuid.v4();
  await setDoc(
    doc(db, ROOMS_COLLECTION, roomId, COMMENTS_COLLECTION, commentId),
    {
      id: commentId,
      comment: comment,
      name: name,
      avatarUri: avatarUri,
      timestamp: Date.now(),
    }
  );
  onChangeComment("");
}

export async function filterRooms(interests, setRooms) {
  if (interests.length === 0) {
    return;
  }
  let roomsRef = collection(db, ROOMS_COLLECTION);
  const q = query(
    roomsRef,
    where("interests", "array-contains-any", interests)
  );
  const querySnapshot = await getDocs(q);
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  setRooms(docs);
}

//LISTENERS

export function addYoutubeListener(
  roomId,
  setPlaying,
  setByOutsideCall,
  seekTo,
  name
) {
  const unsubscribe = onSnapshot(
    doc(db, "rooms", roomId, YT_COLLECTION, YT_DOC),
    (doc) => {
      const yt = doc.data();
      if (yt.name !== name) {
        setByOutsideCall(true);
        setTimeout(() => {
          setPlaying(yt.isPlaying);
          seekTo(yt.currentTime);
        }, 500);
        setTimeout(() => setByOutsideCall(false), 1500);
      }
    }
  );
  return unsubscribe;
}

export function addCommentsListener(roomId, updateComments) {
  const q = query(
    collection(db, ROOMS_COLLECTION, roomId, COMMENTS_COLLECTION)
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const newComments = [];
    querySnapshot.forEach((doc) => {
      newComments.push(doc.data());
    });
    updateComments(newComments);
  });
  return unsubscribe;
}

export function addPlayersListener(roomId, updatePlayers) {
  const q = query(collection(db, ROOMS_COLLECTION, roomId, PLAYERS_COLLECTION));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const players = [];
    querySnapshot.forEach((doc) => {
      players.push(doc.data());
    });
    updatePlayers(players);
  });
  return unsubscribe;
}
