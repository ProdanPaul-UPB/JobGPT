// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxHtlow2cUtbWg5KZosKxOEnX2Yhe_Gbo",
  authDomain: "eco-plating-401216.firebaseapp.com",
  projectId: "eco-plating-401216",
  storageBucket: "eco-plating-401216.appspot.com",
  messagingSenderId: "842680206241",
  appId: "1:842680206241:web:cc8b7808f7411b688841e0",
  measurementId: "G-LFJ2FG6M6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
