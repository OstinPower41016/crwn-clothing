import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBM1Yt5oez7UlUvVFAik6f4FrCpGS5xXjU",
  authDomain: "crwn-db-d6030.firebaseapp.com",
  databaseURL: "https://crwn-db-d6030.firebaseio.com",
  projectId: "crwn-db-d6030",
  storageBucket: "crwn-db-d6030.appspot.com",
  messagingSenderId: "938534558429",
  appId: "1:938534558429:web:9214738450b67a11589934",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
