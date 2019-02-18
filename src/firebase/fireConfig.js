import firebase from "firebase";
import "firebase/firestore";

const config = {
  //Davit's database
  // apiKey: "AIzaSyDLZQ8OTi_jVsvgXijQXWexX-bo2799Mko",
  // authDomain: "students-cf2af.firebaseapp.com",
  // databaseURL: "https://students-cf2af.firebaseio.com",
  // projectId: "students-cf2af",
  // storageBucket: "students-cf2af.appspot.com",
  // messagingSenderId: "137594433557"

  // my database
//   apiKey: "AIzaSyCiWJIHfQ8-SM2sRp3-1G00rtZ1--9hUmE",
//   authDomain: "students-app-cdc5c.firebaseapp.com",
//   databaseURL: "https://students-app-cdc5c.firebaseio.com",
//   projectId: "students-app-cdc5c",
//   storageBucket: "students-app-cdc5c.appspot.com",
//   messagingSenderId: "574548709384"
    apiKey: "AIzaSyDg0xYIafBr24irUpj2aIa-IqnYC8yDHuE",
    authDomain: "students-app-8e66c.firebaseapp.com",
    databaseURL: "https://students-app-8e66c.firebaseio.com",
    projectId: "students-app-8e66c",
    storageBucket: "students-app-8e66c.appspot.com",
    messagingSenderId: "120117667276"
};

export function initFirebase() {
  // Initialize Firebase
  firebase.initializeApp(config);

  // Initialize Cloud Firestore through Firebase
  // firebase.firestore().settings({timestampsInSnapshots: true});
}

export function createUserInfirebase( email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword( email, password)
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
    });
}
export default { initFirebase, createUserInfirebase };