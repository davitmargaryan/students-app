import { firestore } from "firebase";

export default class FireManager {

    static addStudent(student) {
        if (student.id) {
            return firestore().collection("students").doc(student.id).set(student)
                .then(() => {
                    console.log("Document successfully written!");
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
        var studentsRef = firestore().collection("students");

        return studentsRef.get().then(function(querySnapshot) {
            return querySnapshot.docs.map(doc => doc.data());
        }).catch(function (error) {
            console.error("Error getting students:", error);
        });
    }
}