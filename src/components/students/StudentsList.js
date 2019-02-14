import React, { Component } from "react";
import FireManager from "../../firebase/FireManager";
import { Link } from "react-router-dom";
import UpdateData from "./UpdateData";
import Button from "@material-ui/core/Button";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
//import SettingIcon from '@material-ui/icons/DeleteTwoTone';

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
              <Button 
                className = 'editButt'
                variant="contained"
                color="primary"
                onClick={() => {
                  this.hiddenOrShowEdit(student);
                }}  > Edit 
              </Button>

              <Link className="linkStyle" to={`/students/${student.id}`}>
                {student.name + "  " + student.surname}
              </Link>

              <Button
                id = 'delButt'
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#b00d0d" }}
                onClick={() => {
                  this.handleRemove(student);
                }} > 
                  <DeleteTwoToneIcon 
                    onClick={() => {
                      this.handleRemove(student);
                    }}
                  />
              </Button>
              
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
