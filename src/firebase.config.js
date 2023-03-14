import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDofG61ZkN9ciUAHpMCty6qN9qF583uZVU",
  authDomain: "second-mart-2fb87.firebaseapp.com",
  projectId: "second-mart-2fb87",
  storageBucket: "second-mart-2fb87.appspot.com",
  messagingSenderId: "585036565322",
  appId: "1:585036565322:web:d2968a080e524ff4ce4fb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
