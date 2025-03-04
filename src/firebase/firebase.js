// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ0Njd-DUVmibXiKP0xJr4X_DDPx42QmY",
  authDomain: "astral-innovation.firebaseapp.com",
  projectId: "astral-innovation",
  storageBucket: "astral-innovation.firebasestorage.app",
  messagingSenderId: "1005963164497",
  appId: "1:1005963164497:web:f4fc114f69bebbaf05f170",
  measurementId: "G-D5GQ09JY0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth,app};