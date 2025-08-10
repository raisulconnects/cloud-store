// Import the functions you need from the SDKs you want to use
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiI6Tx-82fSS3LPmiSu2l-841x-vyRuOU",
  authDomain: "first-react-auth-project-48c15.firebaseapp.com",
  projectId: "first-react-auth-project-48c15",
  storageBucket: "first-react-auth-project-48c15.firebasestorage.app",
  messagingSenderId: "465356739749",
  appId: "1:465356739749:web:4ff9a26c14e66dec93e94c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Authorization er kajer jonne get Auth basically use kora hoy, also eita enable kore nite hobe
export const auth = getAuth(app);
