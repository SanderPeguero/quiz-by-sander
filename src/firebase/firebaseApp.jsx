import firebase from 'firebase';

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


 export default firebase;
