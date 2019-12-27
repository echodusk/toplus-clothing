import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBNQfL6jkSAKw9AxmGda7HT1Ms13KOLLxw",
  authDomain: "toplus-clothing.firebaseapp.com",
  databaseURL: "https://toplus-clothing.firebaseio.com",
  projectId: "toplus-clothing",
  storageBucket: "toplus-clothing.appspot.com",
  messagingSenderId: "87350469728",
  appId: "1:87350469728:web:79b3fb6b003bdcecf28f05"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user: ", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;