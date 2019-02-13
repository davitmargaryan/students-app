import React, { Component } from "react";
import FireManager from "../../firebase/FireManager";
import { Link } from "react-router-dom";
import UpdateData from "./UpdateData";
import Button from "@material-ui/core/Button";

class StudentsList extends Component {
  handleRemove = student => {
    FireManager.removeStudent(student);
    this.props.removeStudent(student);
  };

  hiddenOrShowEdit = student => {
    if (document.getElementById(`${student.id}`).style.display === "none") {
      document.getElementById(`${student.id}`).style.display = "block";
      return;
    }
    if (document.getElementById(`${student.id}`).style.display === "block") {
      document.getElementById(`${student.id}`).style.display = "none";
    }
  };

  render() {
    const { students } = this.props;

    return (
      <div className="App">
        {students.map(student => {
          return (
            <div key={student.id} className="divItem">
              <Link className="linkStyle" to={`/students/${student.id}`}>
                {student.name + "  " + student.surname}
              </Link>
              <div>
                <Button
                  onClick={() => {
                    this.hiddenOrShowEdit(student);
                  }}
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "green" }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    this.handleRemove(student);
                  }}
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "red" }}
                >
                  Remove
                </Button>
              </div>
              <UpdateData
                updateStudent={this.props.updateStudent}
                student={student}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default StudentsList;
