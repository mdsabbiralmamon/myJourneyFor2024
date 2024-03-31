// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS0AwoSiEMsW8-XdiQHCA9-FpOmh-JwMc",
  authDomain: "authentication-f968b.firebaseapp.com",
  projectId: "authentication-f968b",
  storageBucket: "authentication-f968b.appspot.com",
  messagingSenderId: "1084384136692",
  appId: "1:1084384136692:web:726aa215d165383a9f3da1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;