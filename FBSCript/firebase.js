import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAs4ntH7OO9SQo-MzmwLXY2Q1OZy5o5IUk",
    authDomain: "budsies-847fb.firebaseapp.com",
    projectId: "budsies-847fb",
    storageBucket: "budsies-847fb.appspot.com",
    messagingSenderId: "510095380443",
    appId: "1:510095380443:web:516aca62276f4b106421fe"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };