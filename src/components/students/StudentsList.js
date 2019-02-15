import React, { Component } from "react";
import FireManager from "../../firebase/FireManager";
import { Link } from "react-router-dom";
import UpdateData from "./UpdateData";
import Button from "@material-ui/core/Button";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import {ThemeContext} from "../contexts";
import { Card } from 'react-bootstrap/'

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
    let bool = true;
    return (
      <div className="row">
        {students.map(student => {
          return (
              <ThemeContext.Consumer>
                  {({ color, changeColor }) => {
                    let cardColor = color === 'primary' ? 'success' : 'info';

                    if( cardColor === 'success' && bool ) {
                      cardColor = "warning";
                    }
                    if( cardColor === 'info' && bool ) {
                      cardColor = "dark";
                    }
                      bool = !bool;
                    return (
                        <Card className="col-lg-4" key={student.id} bg={ cardColor } text="white" style={{ width: '18rem' }}>
                            <Card.Header>
                                { `${student.name} ${student.surname}`.toUpperCase() }
                                <Link to={`/students/${student.id}`}>
                                {student.name + "  " + student.surname}
                                </Link>
                            </Card.Header>
                            <Card.Body className="row">
                                <Button
                                    className="col-lg-6"
                                    variant="contained"
                                    color={ color }
                                    onClick={() => {
                                        this.hiddenOrShowEdit(student);
                                    }}>
                                    {" "}
                                    Edit
                                </Button>
                                <Button
                                    className="col-lg-6"
                                    variant="contained"
                                    color={ color }
                                    onClick={() => {
                                      this.handleRemove(student);
                                    }}
                                >
                                    <DeleteTwoToneIcon
                                        onClick={() => {
                                          this.handleRemove(student);
                                        }}
                                    />
                                </Button>
                                <UpdateData
                                    className="col"
                                    updateStudent={this.props.updateStudent}
                                    student={student}
                                />
                                <Card.Text>
                                    About student
                                </Card.Text>
                            </Card.Body>
                         </Card>
                  )}}
              </ThemeContext.Consumer>
          );
        })}
      </div>
    );
  }
}

export default StudentsList;
