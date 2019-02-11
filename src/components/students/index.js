import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FireManager from "../../firebase/FireManager";
import Profile from "./Profile";
import StudentsList from "./StudentsList";
import AddStudentsForm from "./AddStudentsForm";

class Students extends Component {
  state = {
      students: [],
      addStudentError: ''
  };

  componentDidMount() {
    FireManager.getStudents().then(students => {
      this.setState({ students });
    });
  }

  render() {
    const { students, addStudentError } = this.state;
    const StudentsListHOC = () => {
      const addStudent = (student) => {
          if(!student.id){return}
          FireManager.addStudent(student).then(() => {
              this.setState({
                  students: [
                      ...students,
                      student
                  ]
              })
          }).catch(err=> {
            this.setState({addStudentError: err && err.message})
          });
      };
      return (
        <>
          <StudentsList students={students} />
          <AddStudentsForm addStudentError={addStudentError} addStudent={addStudent}/>
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
