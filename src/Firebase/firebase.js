import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC0_7PHXJYBsvceRmKTwEd-XvOpqBSaTiM",
    authDomain: "blog-a1547.firebaseapp.com",
    databaseURL: "https://blog-a1547.firebaseio.com",
    projectId: "blog-a1547",
    storageBucket: "blog-a1547.appspot.com",
    messagingSenderId: "1057020039783",
    appId: "1:1057020039783:web:3c7e3a679d8624ad1dbac2"
  };

  // Initialize Firebase
  if(!Firebase.apps.length){
    Firebase.initializeApp(firebaseConfig);
  }

  const database = Firebase.database();
  const storage = Firebase.storage()

  export {storage, database, Firebase as  default}