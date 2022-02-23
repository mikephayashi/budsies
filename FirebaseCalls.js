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

export async function createRoom(name, numBuds, interests) {
  const id = uuid.v4();
  await setDoc(doc(db, ROOMS_COLLECTION, id), {
    id: id,
    name: name,
    numBuds: numBuds,
    interests: interests,
    players: [],
  });
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

export function addCommentsListener(roomId, updateComments) {
  const q = query(
    collection(db, ROOMS_COLLECTION, roomId, COMMENTS_COLLECTION)
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const newComments = [];
    querySnapshot.forEach((doc) => {
      newComments.push(doc.data());
    });
    // updateComments([...comments, ...newComments]);
    updateComments(newComments);
  });
  return unsubscribe;
}
