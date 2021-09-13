import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCrmZwAZ7j3uN3T32xtagfLP6BzWdbcTcg",
    authDomain: "clone-71376.firebaseapp.com",
    projectId: "clone-71376",
    storageBucket: "clone-71376.appspot.com",
    messagingSenderId: "67537764587",
    appId: "1:67537764587:web:5d8af402bf2c61d3ee3eae"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

const db = app.firestore();

export default db;