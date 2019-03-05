import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var config = {
    apiKey: "AIzaSyCX5s1rXxnTBQMskf1wumAzhZiuaH2FgjI",
    authDomain: "react-slack-clone-c2eed.firebaseapp.com",
    databaseURL: "https://react-slack-clone-c2eed.firebaseio.com",
    projectId: "react-slack-clone-c2eed",
    storageBucket: "react-slack-clone-c2eed.appspot.com",
    messagingSenderId: "923754099357"
  };
  firebase.initializeApp(config);

export default firebase;