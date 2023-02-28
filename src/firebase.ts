import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBosYjMF4GIGouz0Z6fLKfnb1hpmJaWwFw",
  authDomain: "discord-clone-udemy-2359d.firebaseapp.com",
  projectId: "discord-clone-udemy-2359d",
  storageBucket: "discord-clone-udemy-2359d.appspot.com",
  messagingSenderId: "162430818535",
  appId: "1:162430818535:web:c9a9d92ab13b2bcaf12a42",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
