import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs4ntH7OO9SQo-MzmwLXY2Q1OZy5o5IUk",
  authDomain: "budsies-847fb.firebaseapp.com",
  projectId: "budsies-847fb",
  storageBucket: "budsies-847fb.appspot.com",
  messagingSenderId: "510095380443",
  appId: "1:510095380443:web:516aca62276f4b106421fe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

const ROOMS_COLLECTION = "rooms";
const COMMENTS_COLLECTION = "comments";
const YT_COLLECTION = "youtube";
const PLAYERS_COLLECTION = "players";
const YT_DOC = "youtube";
const VIDEO_ROOM = "VideoRoom";

import { v4 as uuidv4 } from "uuid";

const player1 = {
  name: "Brita",
  avatarUri: "Tran_Hat-None_Shirt-Pink_Skin-Golden_Glasses-Brown",
};

const player2 = {
  name: "Bruno",
  avatarUri: "Jasper_Hat-Grey_Shirt-White_Skin-Light_Glasses-None",
};

const player3 = {
  name: "Spidey",
  avatarUri: "Tran_Hat-None_Shirt-Blue_Skin-Tan_Glasses-Brown",
};

async function addPlayer(roomId, player) {
  const playerId = uuidv4();
  await setDoc(
    doc(db, ROOMS_COLLECTION, roomId, PLAYERS_COLLECTION, playerId),
    {
      id: playerId,
      name: player.name,
      avatarUri: player.avatarUri,
      isTalking: true,
    }
  );
}

async function createRoom(name, maxBuds, interests) {
  const id = uuidv4();
  const room = {
    id: id,
    name: name,
    maxBuds: maxBuds,
    numBuds: 2,
    interests: interests,
  };
  await setDoc(doc(db, ROOMS_COLLECTION, id), room);
  await setDoc(doc(db, ROOMS_COLLECTION, id, YT_COLLECTION, YT_DOC), {
    isPlaying: false,
    currentTime: 0,
  });
  await addPlayer(room.id, player1);
  await addPlayer(room.id, player2);

  console.log("roomId: ", id);
  return room;
}

async function uploadComment(roomId, comment, player) {
  const commentId = uuidv4();
  await setDoc(
    doc(db, ROOMS_COLLECTION, roomId, COMMENTS_COLLECTION, commentId),
    {
      id: commentId,
      comment: comment,
      name: player.name,
      avatarUri: player.avatarUri,
      timestamp: Date.now(),
    }
  );
}

const run = 1;
const roomId = "c57ba05f-770f-4c35-b6a4-c58c5fc2b557";

if (run === 1) {
  const room = await createRoom("Codenames", 4, ["Shows", "Games"]);
  await uploadComment(room.id, "Hi everyone!", player1);
  await uploadComment(room.id, "I like spaghettios!!", player2);
  console.log("DONE 1");
} else if (run === 2) {
  await addPlayer(roomId, player3);
  console.log("DONE 2");
} else if (run == 3) {
  await uploadComment(roomId, "Excited to join the party!", player3);
  console.log("DONE 3");
}
