import firebase from "firebase/app";
import "firebase/database";
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDf_yXM_jsa5ltCHbpvdMlxspRtFmrX_K4",
    authDomain: "myntra-hackerramp.firebaseapp.com",
    databaseURL: "https://myntra-hackerramp.firebaseio.com",
    projectId: "myntra-hackerramp",
    storageBucket: "myntra-hackerramp.appspot.com",
    messagingSenderId: "870421887965",
    appId: "1:870421887965:web:8ea662e54fbf6f5d6c1434"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db=firebase.firestore();
// var storage = firebase.storage();

export {firebase, db};