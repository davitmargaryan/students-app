import { firestore } from "firebase";

export default class FireManager {
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

  static getStudent(student) {
    debugger;
    if (student.id) {
      const ref = firestore()
        .collection("students")
        .doc(student.id);

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
  }

  static getStudents() {
    debugger;
    const studentsRef = firestore().collection("students");
    console.log(" = ",studentsRef)
    return studentsRef
      .get()
      .then(function(querySnapshot) {
        return querySnapshot.docs.map(doc => doc.data());
      })
      .catch(function(error) {
        console.error("Error getting students:", error);
      });
  }
}
