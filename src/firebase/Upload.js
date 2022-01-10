//import firebase from 'firebase/compat/app';

const ft = require("fs");

const fs = ft.promises;

const firebase = require("firebase");


const firebaseConfig = {
    apiKey: "AIzaSyDepCq142fQCdSwyHRXpAA7l2BCXnlCySM",
    authDomain: "quiz-by-sander.firebaseapp.com",
    projectId: "quiz-by-sander",
    storageBucket: "quiz-by-sander.appspot.com",
    messagingSenderId: "276041567816",
    appId: "1:276041567816:web:9ed7dd86c27d906689d27d",
    measurementId: "G-EGYRBETVD3"
  };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const Upload = async () => {
     const questionJson = await fs.readFile('../JSON/BANCO.json');
     const questions = JSON.parse(questionJson);
     console.log(`${questions.length} questions will be uploaded to firebase`);

     const database = firebase.database();
     const ref = database.ref('/Banco');
     questions.forEach( q => {
         ref.push(q);
     }); 
     console.log('upload complete!');
 };

Upload();

 //export default firebase;
