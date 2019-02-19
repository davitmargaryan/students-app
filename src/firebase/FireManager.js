import { firestore } from "firebase";
import firebase from 'firebase';

export default class FireManager {
  static createUserInFirebase(email, password, firstName, lastName) {
        return firebase.auth().createUserWithEmailAndPassword(email, password).then(user=>{
          const {uid} = user.user;
          firestore()
              .collection("users")
              .doc(uid)
              .set({firstName, lastName})
        }, error=> {
        });
    }

  static login(email, password) {
    debugger;
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      debugger;
    });
  }

  static signOut(){
    return firebase.auth().signOut();
  }

  static addStudent(student) {
    if (student.id) {
      return firestore()
        .collection("students")
        .doc(student.id)
        .set(student);
    }
  }

  static removeStudent(student) {
    if (student.id) {
      return firestore()
        .collection("students")
        .doc(student.id)
        .delete();
    }
  }

  static editStudent(student) {
    if (student.id) {
    return firestore()
      .collection("students")
      .doc(student.id)
      .update({ ...student });
    }
  }

  static getStudent(studentId) {
    const ref = firestore()
        .collection("students")
        .doc(studentId);

    return ref
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data();
          } else {
            console.error("No such student!");
          }
        })
        .catch(function(error) {
          console.error("Error getting student:", error);
        });
  }

  static getStudents() {
    const studentsRef = firestore().collection("students");
    return studentsRef.get();
  }
}
