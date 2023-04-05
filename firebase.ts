// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBApJtBU6C97-MrmGYx-aXD5BCnm3gtlQM",
    authDomain: "ecomence-5a2f8.firebaseapp.com",
    projectId: "ecomence-5a2f8",
    storageBucket: "ecomence-5a2f8.appspot.com",
    messagingSenderId: "1056021626335",
    appId: "1:1056021626335:web:edcc48d969902ed313586a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default { db, auth };
