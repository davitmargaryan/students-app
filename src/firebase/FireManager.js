import { firestore } from "firebase";

export default class FireManager {

    static addStudent(student) {
        if (student.id) {
            return firestore().collection("students").doc(student.id).set(student)
                .then(() => {
                    console.log("Document successfully added!");
                    window.parent.location = window.parent.location.href
                })
                .catch(error => {
                    console.error("Error writing document: ", error);
                });
        } else {
            console.error("need to pass an object with existing id property");
        }
    }

    static getStudent(studentId) {
        if (studentId) {
            const ref = firestore().collection("students").doc(studentId);

            return ref.get().then(doc => {
                if (doc.exists) {
                    return doc.data();
                } else {
                    console.error("No such student!");
                }
            })
                .catch(function (error) {
                    console.error("Error getting student:", error);
                });
        }
    }

    static getStudents(){
        const studentsRef = firestore().collection("students");

        return studentsRef.get().then(function(querySnapshot) {
            return querySnapshot.docs.map(doc => doc.data());
        }).catch(function (error) {
            console.error("Error getting students:", error);
        });
    }

    static removeStudent(student) {
        if (student.id) {
          return firestore()
            .collection("students")
            .doc(student.id)
            .delete()
            .then(() => {
              console.log("Document successfully written!");
              window.parent.location = window.parent.location.href
            })
            .catch(error => {
              console.error("Error writing document: ", error);
            });
        } else {
          console.error("need to pass an object with existing id property");
        }
    }
    static editStudent(student) {
        if (student.id) {
          return  firestore()
          .collection("students")
          .doc(student.id).update({...student}).then(() => {
            console.log("Document successfully written!");
            window.parent.location = window.parent.location.href
          })
          .catch(error => {
            console.error("Error writing document: ", error);
          });
      } else {
        console.error("need to pass an object with existing id property");
      }
            
        }
}