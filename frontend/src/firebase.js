import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
  // Replace with your Firebase configuration values
  apiKey: "AIzaSyAMhzGJhNjEk-Nvit8Gx9N5UZ2l5htSK2A",
  authDomain: "exam-room-96717.firebaseapp.com",
  projectId: "exam-room-96717",
  storageBucket: "exam-room-96717.appspot.com",
  messagingSenderId: "504841798739",
  appId: "1:504841798739:web:40f98e73ebd5d4ba0572a6",
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();