import 'firebase/firestore';

const firebase = require('firebase/app');

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBL2FwjPtLaupkfGFH0l-c8pYFs3CT9PSQ",
  authDomain: "sytycf-test.firebaseapp.com",
  databaseURL: "https://sytycf-test.firebaseio.com",
  projectId: "sytycf-test",
  storageBucket: "sytycf-test.appspot.com",
  messagingSenderId: "516409802980",
  appId: "1:516409802980:web:56930458c9bac2bb52ecf1",
});

const db = firebaseApp.firestore();

export { db };