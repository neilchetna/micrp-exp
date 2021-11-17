import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBZxiej2JUjlb8vJ3Cu6FreuMm_M0raLVI",
  authDomain: "micro-exp.firebaseapp.com",
  projectId: "micro-exp",
  storageBucket: "micro-exp.appspot.com",
  messagingSenderId: "822594946633",
  appId: "1:822594946633:web:f8677476119f110e2be198",
  measurementId: "G-WKXKWCDQ72",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
