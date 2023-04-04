// import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBzVTO6_rCsD8HZvX0RkcwbZ7hYdqknok",
  authDomain: "netflix-clone-v2-code.firebaseapp.com",
  databaseURL: "https://netflix-clone-v2-code-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-v2-code",
  storageBucket: "netflix-clone-v2-code.appspot.com",
  messagingSenderId: "1025043091502",
  appId: "1:1025043091502:web:e38cd93a96384f3f5dcfbf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {auth};
export default db;