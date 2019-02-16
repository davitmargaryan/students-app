import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FireManager from "../../firebase/FireManager";
import Profile from "./Profile";
import StudentsList from "./StudentsList";
import AddStudentsForm from "./AddStudentsForm";

class Students extends Component {
  state = {
    students: [],
    addStudentError: ""
  };

  componentDidMount() {
    FireManager.getStudents().then(students => {
      this.setState({ students });
    })
  }

  render() {
    const { students, addStudentError } = this.state;
    const StudentsListHOC = () => {
      const addStudent = student => {
        if (!student.id) {
          return;
        }
        FireManager.addStudent(student)
          .then(() => {
            this.setState({
              students: [...students, student]
            });
          })
          .catch(err => {
            this.setState({ addStudentError: err && err.message });
          });
      };

      const removeStudent = student => {
        if (!student.id) {
          return;
        }
        FireManager.removeStudent(student)
          .then(() => {
            let studentsArr = this.state.students;
            const resultArr = studentsArr.filter(
              element => element.id !== student.id
            );
            this.setState({
              students: resultArr
            });
          })
          .catch(err => {
            this.setState({ addStudentError: err && err.message });
          });
      };

      const updateStudent = student => {
        if (!student.id) {
          return;
        }
        FireManager.editStudent(student)
          .then(() => {
            let studentsArr = this.state.students;
            let index = studentsArr.findIndex(elem => {
              if (elem.id === student.id) {
                return elem;
              }
            });

            studentsArr[index] = student;
            this.setState({
              students: studentsArr
            });
          })
          .catch(err => {
            this.setState({ addStudentError: err && err.message });
          });
      };

      return (
        <>
          <StudentsList
            updateStudent={updateStudent}
            students={students}
            removeStudent={removeStudent}
          />
          <AddStudentsForm
            addStudentError={addStudentError}
            addStudent={addStudent}
          />
        </>
      );
    };
    return (
      <Router>
        <>
          <Route exact path="/" component={StudentsListHOC} />
          <Route exact path="/students" component={StudentsListHOC} />
          <Route path="/students/:studentId" component={Profile} />
        </>
      </Router>
    );
  }
}

export default Students;
