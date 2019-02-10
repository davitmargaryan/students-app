import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FireManager from "../../firebase/FireManager";
import Profile from "./Profile";
import StudentsList from "./StudentsList";
import AddStudentsForm from "./AddStudentsForm";

class Students extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    FireManager.getStudents().then(students => {
      this.setState({ students });
    });
  }

  render() {
    const { students } = this.state;
    const StudentsListHOC = function() {
      return (
        <>
          <StudentsList students={students} />
          <AddStudentsForm />
        </>
      );
    };
    return (
      <Router>
        <>
          <Route exact path="/students" component={StudentsListHOC} />
          <Route path="/students/:studentId" component={Profile} />
        </>
      </Router>
    );
  }
}

export default Students;
