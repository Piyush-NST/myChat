import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCj9ELEjCxVWrBR5S77pB4I2OBBFf8sAc",
  authDomain: "chatapp-d23d8.firebaseapp.com",
  projectId: "chatapp-d23d8",
  storageBucket: "chatapp-d23d8.appspot.com",
  messagingSenderId: "583163709168",
  appId: "1:583163709168:web:7931d5430c52a0ab96a435",
  measurementId: "G-YCT05LL0ZX"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
