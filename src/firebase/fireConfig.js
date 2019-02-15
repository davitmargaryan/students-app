import firebase from "firebase";
import "firebase/firestore";

const config = {
  //Davit's database
  apiKey: "AIzaSyDLZQ8OTi_jVsvgXijQXWexX-bo2799Mko",
  authDomain: "students-cf2af.firebaseapp.com",
  databaseURL: "https://students-cf2af.firebaseio.com",
  projectId: "students-cf2af",
  storageBucket: "students-cf2af.appspot.com",
  messagingSenderId: "137594433557"

  // my database
  //   apiKey: "AIzaSyCiWJIHfQ8-SM2sRp3-1G00rtZ1--9hUmE",
  //   authDomain: "students-app-cdc5c.firebaseapp.com",
  //   databaseURL: "https://students-app-cdc5c.firebaseio.com",
  //   projectId: "students-app-cdc5c",
  //   storageBucket: "students-app-cdc5c.appspot.com",
  //   messagingSenderId: "574548709384"
};

export default function initFirebase() {
  // Initialize Firebase
  firebase.initializeApp(config);

  // Initialize Cloud Firestore through Firebase
  // firebase.firestore().settings({timestampsInSnapshots: true});
}
