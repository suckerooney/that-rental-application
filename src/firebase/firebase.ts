// Firebase
import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkyu29R2LodzV-8VVobEnxoFWxIeZpvNY",
  authDomain: "that-rental-application.firebaseapp.com",
  projectId: "that-rental-application",
  storageBucket: "that-rental-application.appspot.com",
  messagingSenderId: "911191047958",
  appId: "1:911191047958:web:c8a6879bba0918c3da9a37",
  measurementId: "G-72QBH91P1E",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
