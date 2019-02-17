import firebase from 'firebase';
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDLZQ8OTi_jVsvgXijQXWexX-bo2799Mko",
    authDomain: "students-cf2af.firebaseapp.com",
    databaseURL: "https://students-cf2af.firebaseio.com",
    projectId: "students-cf2af",
    storageBucket: "students-cf2af.appspot.com",
    messagingSenderId: "137594433557"
};


export  function initFirebase() {
    // Initialize Firebase
    firebase.initializeApp(config);

    // Initialize Cloud Firestore through Firebase
    // firebase.firestore().settings({timestampsInSnapshots: true});
}

export function createUserInfirebase(firstName, lastName, email, password) {
    firebase.auth().createUserWithEmailAndPassword(firstName, lastName, email, password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      });
} 
export default {initFirebase, createUserInfirebase}
