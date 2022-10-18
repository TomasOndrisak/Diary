import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCyOF0bjQXmrAKErMt8Fd3HlVJqf0MSKn0",
  authDomain: "vue-diary-authentication.firebaseapp.com",
  projectId: "vue-diary-authentication",
  storageBucket: "vue-diary-authentication.appspot.com",
  messagingSenderId: "590271475870",
  appId: "1:590271475870:web:b183e6fe39d803f9c4cb8f",
  measurementId: "G-MJHBDKLJ6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};