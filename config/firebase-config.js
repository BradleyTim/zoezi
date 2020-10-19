import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDFFvwKU2uW8V9sx4qKA99l7-kM7EPTBqA",
  authDomain: "midrange-5c4ea.firebaseapp.com",
  databaseURL: "https://midrange-5c4ea.firebaseio.com",
  projectId: "midrange-5c4ea",
  storageBucket: "midrange-5c4ea.appspot.com",
  messagingSenderId: "716907071682",
  appId: "1:716907071682:web:b5a711f0aa31ea3696135b",
  measurementId: "G-S8TC1CGL6K"
};

try {
  firebase.initializeApp(firebaseConfig);
  console.log('CONNECTED')
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error', error.stack);
  }
}


const appStorage = firebase.storage();
const appDB = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
  appStorage,
  appDB,
  timestamp,
}