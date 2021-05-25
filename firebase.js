import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA-hlO_VeRio2s736DAgEK9SodU05mAssM",
    authDomain: "fir-3e8ef.firebaseapp.com",
    projectId: "fir-3e8ef",
    storageBucket: "fir-3e8ef.appspot.com",
    messagingSenderId: "533538319039",
    appId: "1:533538319039:web:f813e67ddca5a89d6ff40a"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

const db =app.firestore();

export default db;