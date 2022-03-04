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
  const playerId = uuidv4();
  await setDoc(
    doc(db, ROOMS_COLLECTION, room.id, PLAYERS_COLLECTION, playerId),
    {
      id: playerId,
      name: "Brita",
      avatarUri: "Tran_Hat-None_Shirt-Pink_Skin-Golden_Glasses-Brown",
      isTalking: true,
    }
  );

  const playerId2 = uuidv4();
  await setDoc(
    doc(db, ROOMS_COLLECTION, room.id, PLAYERS_COLLECTION, playerId2),
    {
      id: playerId2,
      name: "Bruno",
      avatarUri: "Jasper_Hat-Grey_Shirt-White_Skin-Light_Glasses-None",
      isTalking: true,
    }
  );
  return room;
}

await createRoom("Codenames", 4, ["Shows", "Games"]);
console.log("DONE");
