import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCNAFkQZfhmhnv_shEfZYVTrdqYaencRKc",
    authDomain: "e-ride-b1c99.firebaseapp.com",
    projectId: "e-ride-b1c99",
    storageBucket: "e-ride-b1c99.appspot.com",
    messagingSenderId: "39852268247",
    appId: "1:39852268247:web:78ffcbe4971aa1216e2e92"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
