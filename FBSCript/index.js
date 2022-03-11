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
import random_name from 'node-random-name';

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

// const uris = [
//   "Tran_Hat-None_Shirt-Pink_Skin-Golden_Glasses-Brown",
//   "Jasper_Hat-Grey_Shirt-White_Skin-Light_Glasses-None",
//   "Tran_Hat-None_Shirt-Blue_Skin-Tan_Glasses-Brown",
// ];

const uris = [
  // Hat
  // Blue Shirt
  "Jasper_Hat-Grey_Shirt-Blue_Skin-Golden_Glasses-Brown",
  "Jasper_Hat-Grey_Shirt-Blue_Skin-Golden_Glasses-None",
  "Jasper_Hat-Grey_Shirt-Blue_Skin-Light_Glasses-Brown",
  "Jasper_Hat-Grey_Shirt-Blue_Skin-Light_Glasses-None",
  "Jasper_Hat-Grey_Shirt-Blue_Skin-Tan_Glasses-Brown",
  "Jasper_Hat-Grey_Shirt-Blue_Skin-Tan_Glasses-None",
  //Purple shirt
  "Jasper_Hat-Grey_Shirt-Purple_Skin-Golden_Glasses-Brown",
  "Jasper_Hat-Grey_Shirt-Purple_Skin-Golden_Glasses-None",
  "Jasper_Hat-Grey_Shirt-Purple_Skin-Light_Glasses-Brown",
  "Jasper_Hat-Grey_Shirt-Purple_Skin-Light_Glasses-None",
  "Jasper_Hat-Grey_Shirt-Purple_Skin-Tan_Glasses-Brown",
  "Jasper_Hat-Grey_Shirt-Purple_Skin-Tan_Glasses-None",
  // White shirt
  "Jasper_Hat-Grey_Shirt-White_Skin-Golden_Glasses-Brown",
  "Jasper_Hat-Grey_Shirt-White_Skin-Golden_Glasses-None",
  "Jasper_Hat-Grey_Shirt-White_Skin-Light_Glasses-Brown",
  "Jasper_Hat-Grey_Shirt-White_Skin-Light_Glasses-None",
  "Jasper_Hat-Grey_Shirt-White_Skin-Tan_Glasses-Brown",
  "Jasper_Hat-Grey_Shirt-White_Skin-Tan_Glasses-None",
  // No Hat
  // Blue Shirt
  "Jasper_Hat-None_Shirt-Blue_Skin-Golden_Glasses-Brown",
  "Jasper_Hat-None_Shirt-Blue_Skin-Golden_Glasses-None",
  "Jasper_Hat-None_Shirt-Blue_Skin-Light_Glasses-Brown",
  "Jasper_Hat-None_Shirt-Blue_Skin-Light_Glasses-None",
  "Jasper_Hat-None_Shirt-Blue_Skin-Tan_Glasses-Brown",
  "Jasper_Hat-None_Shirt-Blue_Skin-Tan_Glasses-None",
  //Purple shirt
  "Jasper_Hat-None_Shirt-Purple_Skin-Golden_Glasses-Brown",
  "Jasper_Hat-None_Shirt-Purple_Skin-Golden_Glasses-None",
  "Jasper_Hat-None_Shirt-Purple_Skin-Light_Glasses-Brown",
  "Jasper_Hat-None_Shirt-Purple_Skin-Light_Glasses-None",
  "Jasper_Hat-None_Shirt-Purple_Skin-Tan_Glasses-Brown",
  "Jasper_Hat-None_Shirt-Purple_Skin-Tan_Glasses-None",
  // White shirt
  "Jasper_Hat-None_Shirt-White_Skin-Golden_Glasses-Brown",
  "Jasper_Hat-None_Shirt-White_Skin-Golden_Glasses-None",
  "Jasper_Hat-None_Shirt-White_Skin-Light_Glasses-Brown",
  "Jasper_Hat-None_Shirt-White_Skin-Light_Glasses-None",
  "Jasper_Hat-None_Shirt-White_Skin-Tan_Glasses-Brown",
  "Jasper_Hat-None_Shirt-White_Skin-Tan_Glasses-None",
  // No Hat
  // Blue Shirt
  "Tran_Hat-None_Shirt-Blue_Skin-Golden_Glasses-Brown",
  "Tran_Hat-None_Shirt-Blue_Skin-Golden_Glasses-None",
  "Tran_Hat-None_Shirt-Blue_Skin-Light_Glasses-Brown",
  "Tran_Hat-None_Shirt-Blue_Skin-Light_Glasses-None",
  "Tran_Hat-None_Shirt-Blue_Skin-Tan_Glasses-Brown",
  "Tran_Hat-None_Shirt-Blue_Skin-Tan_Glasses-None",
  //Grey shirt
  "Tran_Hat-None_Shirt-Grey_Skin-Golden_Glasses-Brown",
  "Tran_Hat-None_Shirt-Grey_Skin-Golden_Glasses-None",
  "Tran_Hat-None_Shirt-Grey_Skin-Light_Glasses-Brown",
  "Tran_Hat-None_Shirt-Grey_Skin-Light_Glasses-None",
  "Tran_Hat-None_Shirt-Grey_Skin-Tan_Glasses-Brown",
  "Tran_Hat-None_Shirt-Grey_Skin-Tan_Glasses-None",
  // Pink shirt
  "Tran_Hat-None_Shirt-Pink_Skin-Golden_Glasses-Brown",
  "Tran_Hat-None_Shirt-Pink_Skin-Golden_Glasses-None",
  "Tran_Hat-None_Shirt-Pink_Skin-Light_Glasses-Brown",
  "Tran_Hat-None_Shirt-Pink_Skin-Light_Glasses-None",
  "Tran_Hat-None_Shirt-Pink_Skin-Tan_Glasses-Brown",
  "Tran_Hat-None_Shirt-Pink_Skin-Tan_Glasses-None",
];

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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

async function createRoom(name, maxBuds, interests) {
  const roomId = uuidv4();
  const numBuds = maxBuds - 2;
  const room = {
    id: roomId,
    name: name,
    maxBuds: maxBuds,
    numBuds: numBuds,
    interests: interests,
  };
  await setDoc(doc(db, ROOMS_COLLECTION, roomId), room);
  await setDoc(doc(db, ROOMS_COLLECTION, roomId, YT_COLLECTION, YT_DOC), {
    isPlaying: false,
    currentTime: 0,
  });

  for (let i = 0; i < numBuds; i++){
    const player = {
      name: random_name({first:true}),
      avatarUri: uris[getRandomInt(0,uris.length)]
    }
    addPlayer(roomId, player);
  }
  // await addPlayer(room.id, player1);
  // await addPlayer(room.id, player2);

  console.log("roomId: ", roomId);
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


function loadRooms(){
  const shows = {category: ["Shows"], examples: ["Stranger Things", "Friends", "Toy Story"]};
  const games = {category: ["Games"], examples: ["Checkers", "Tic Tac Toe", "Codenames"]};
  const sports = {category: ["Sports"], examples: ["NBA", "Spikeball", "Ultimate Tag"]};
  const music = {category: ["Music"], examples: ["Lo-Fi", "Doja Cat", "Country"]};
  const news = {category: ["News"], examples: ["World", "Politics", "Tik Tok News"]};
  const food = {category: ["Food"], examples: ["Hot Pot", "Baking", "Cake Boss"]};
  const all = [shows, games, sports, music, news, food];
  all.forEach((unit) => {
    unit.examples.forEach((indiv) => {
      createRoom(indiv, getRandomInt(2, 5), unit.category);
    });
  });
  // for (let i = 0; i < 3; i++){
  //   createRoom(shows[i], getRandomInt(2, 5), ["Shows"]);
  // }
}


const run = 1;
const roomId = "c57ba05f-770f-4c35-b6a4-c58c5fc2b557";
if (run === 1){
  loadRooms();
}
else if (run === 2) {
  const room = await createRoom("Codenames", 4, ["Shows", "Games"]);
  await uploadComment(room.id, "Hi everyone!", player1);
  await uploadComment(room.id, "I like spaghettios!!", player2);
  console.log("DONE 1");
} else if (run === 3) {
  await addPlayer(roomId, player3);
  console.log("DONE 2");
} else if (run == 4) {
  await uploadComment(roomId, "Excited to join the party!", player3);
  console.log("DONE 3");
}