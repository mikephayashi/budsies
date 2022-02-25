import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore";
import uuid from "react-native-uuid";

const ROOMS_COLLECTION = "rooms";
const COMMENTS_COLLECTION = "comments";
const YT_COLLECTION = "youtube";
const YT_DOC = "youtube";
const NAME_PLACEHOLDER = "Me";
const VIDEO_ROOM = "VideoRoom";

export async function getRoom(findCode) {
  return await getDoc(doc(db, ROOMS_COLLECTION, findCode));
}

export async function navigateToVideoRoom(room, navigation) {
  await updateDoc(doc(db, ROOMS_COLLECTION, room.id), {
    players: arrayUnion(NAME_PLACEHOLDER),
  });
  navigation.navigate(VIDEO_ROOM, {
    room: room,
  });
}

export async function togglePlay(isPlaying, currentTime, room, name) {
  await updateDoc(doc(db, ROOMS_COLLECTION, room.id, YT_COLLECTION, YT_DOC), {
    isPlaying: isPlaying,
    currentTime: currentTime,
    name: name
  });
}

export async function createRoom(name, numBuds, interests) {
  const id = uuid.v4();
  await setDoc(doc(db, ROOMS_COLLECTION, id), {
    id: id,
    name: name,
    numBuds: numBuds,
    interests: interests,
    players: [],
  });
  await setDoc(doc(db, ROOMS_COLLECTION, id, YT_COLLECTION, YT_DOC, {
    isPlaying: false,
    currentTime: 0,
  }));
}

export async function uploadComment(roomId, comment, onChangeComment) {
  const commentId = uuid.v4();
  await setDoc(
    doc(db, ROOMS_COLLECTION, roomId, COMMENTS_COLLECTION, commentId),
    {
      id: commentId,
      comment: comment,
      name: NAME_PLACEHOLDER,
    }
  );
  onChangeComment("");
}

export async function removePlayer(toTop, roomId, navigation) {
  await updateDoc(doc(db, ROOMS_COLLECTION, roomId), {
    players: arrayRemove(NAME_PLACEHOLDER),
  });
  if (toTop){
    navigation.popToTop();
  } else {
    navigation.pop();
  }
  
}

export function addYoutubeListener(roomId, setPlaying, setByOutsideCall, seekTo, name){
  const unsubscribe = onSnapshot(doc(db, "rooms", roomId, YT_COLLECTION, YT_DOC), (doc) => {
    const yt = doc.data();
    if (yt.name !== name || yt.name !== ""){
      setByOutsideCall(true);
      setPlaying(yt.isPlaying);
      seekTo(yt.currentTime);
      setTimeout(() => setByOutsideCall(false), 1000);
    }
});
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
