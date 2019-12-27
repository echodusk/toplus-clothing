import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBNQfL6jkSAKw9AxmGda7HT1Ms13KOLLxw",
  authDomain: "toplus-clothing.firebaseapp.com",
  databaseURL: "https://toplus-clothing.firebaseio.com",
  projectId: "toplus-clothing",
  storageBucket: "toplus-clothing.appspot.com",
  messagingSenderId: "87350469728",
  appId: "1:87350469728:web:79b3fb6b003bdcecf28f05"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;