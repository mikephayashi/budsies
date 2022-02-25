import { db } from "./firebase";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  collection,
  onSnapshot,
  increment,
} from "firebase/firestore";
import uuid from "react-native-uuid";

const ROOMS_COLLECTION = "rooms";
const COMMENTS_COLLECTION = "comments";
const YT_COLLECTION = "youtube";
const YT_DOC = "youtube";
const VIDEO_ROOM = "VideoRoom";

export async function getRoom(findCode) {
  return await getDoc(doc(db, ROOMS_COLLECTION, findCode));
}

export async function navigateToVideoRoom(room, navigation, name) {
  await updateDoc(doc(db, ROOMS_COLLECTION, room.id), {
    players: arrayUnion(name),
    numBuds: increment(1),
  });
  navigation.navigate(VIDEO_ROOM, {
    room: room,
  });
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
  await setDoc(doc(db, ROOMS_COLLECTION, id), {
    id: id,
    name: name,
    maxBuds: maxBuds,
    numBuds: 0,
    interests: interests,
    players: [],
  });
  await setDoc(doc(db, ROOMS_COLLECTION, id, YT_COLLECTION, YT_DOC), {
    isPlaying: false,
    currentTime: 0,
  });
}

export async function uploadComment(roomId, comment, onChangeComment, name) {
  const commentId = uuid.v4();
  await setDoc(
    doc(db, ROOMS_COLLECTION, roomId, COMMENTS_COLLECTION, commentId),
    {
      id: commentId,
      comment: comment,
      name: name,
    }
  );
  onChangeComment("");
}

export async function removePlayer(toTop, roomId, navigation, name) {
  await updateDoc(doc(db, ROOMS_COLLECTION, roomId), {
    players: arrayRemove(name),
    numBuds: increment(-1),
  });
  if (toTop) {
    navigation.popToTop();
  } else {
    navigation.pop();
  }
}

export async function filterRooms(interests, setRooms){
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
      if (yt.name !== name || yt.name !== "") {
        setByOutsideCall(true);
        setPlaying(yt.isPlaying);
        seekTo(yt.currentTime);
        setTimeout(() => setByOutsideCall(false), 1000);
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
