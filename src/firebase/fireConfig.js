import firebase from 'firebase';
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDLZQ8OTi_jVsvgXijQXWexX-bo2799Mko",
    projectId: "students-cf2af"
};


export default function initFirebase() {
    // Initialize Firebase
    firebase.initializeApp(config);

    // Initialize Cloud Firestore through Firebase
    firebase.firestore().settings({timestampsInSnapshots: true});
}
