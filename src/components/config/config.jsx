import firebase from "firebase/app";
import "firebase/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyATJ1je0jYcLrAw6L7vNJ191f5eqTpAGj8",
  authDomain: "greenshop-e041c.firebaseapp.com",
  projectId: "greenshop-e041c",
  storageBucket: "greenshop-e041c.appspot.com",
  messagingSenderId: "374007139140",
  appId: "1:374007139140:web:d65426274699892e1de511",
  measurementId: "G-9RWY8X8GNY",
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;
