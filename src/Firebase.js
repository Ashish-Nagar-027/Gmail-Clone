// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfa1IqiaqhVqG04A1ASEIVzy1Xtl6hJeA",
  authDomain: "clone-react-32ad6.firebaseapp.com",
  projectId: "clone-react-32ad6",
  storageBucket: "clone-react-32ad6.appspot.com",
  messagingSenderId: "403178087889",
  appId: "1:403178087889:web:119ca7d75f746d74e86cf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db };

//for google authentication

export const auth = getAuth(app);
