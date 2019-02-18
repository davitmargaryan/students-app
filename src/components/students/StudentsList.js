import React, { Component } from "react";
import FireManager from "../../firebase/FireManager";
import { Link } from "react-router-dom";
import UpdateData from "./UpdateData";
import { Button } from 'react-bootstrap/';
import {ThemeContext} from "../contexts";
import { Card } from 'react-bootstrap/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserTimes } from '@fortawesome/free-solid-svg-icons'
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    editBtn: {
        maxWidth: '120px',
        borderRadius: "100px"
    },

    removeBtn: {
        top: "5px",
        position: "absolute",
        right: "20px",
        maxWidth: '40px',
        borderRadius: "25px"
    },

    card: {
        borderRadius: "20px"
    },
});

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
      const { classes } = this.props;
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
                        <div className="col-lg-4">
                        <Card className={classes.card}  key={student.id} bg={ cardColor } text="white">
                            <Link to={`/students/${student.id}`} onlyActiveOnIndex style={{ textDecoration: 'none', color: "white"  }}> <Card.Header color='white'>
                                { `${student.name} ${student.surname}`.toUpperCase() }
                                <Button
                                    className={`col ${classes.removeBtn}`}
                                    variant={ color }
                                    onClick={() => {
                                        this.handleRemove(student);
                                    }}>
                                    <FontAwesomeIcon icon="user-times"
                                                     onClick={() => {
                                                         this.handleRemove(student);
                                                     }}
                                    />
                                </Button>
                            </Card.Header>
                            </Link>
                            <Card.Body className>
                              <div className="row">
                                <div className="col-lg-6">
                                <Button
                                    className={`col ${classes.editBtn}`}
                                    variant={ color }
                                    onClick={() => {
                                        this.hiddenOrShowEdit(student);
                                    }}>
                                    {" "}
                                    Edit
                                </Button>
                                </div>
                                <div className="col-lg-6">

                                </div>
                                </div>
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
                        </div>
                  )}}
              </ThemeContext.Consumer>
          );
        })}
      </div>
    );
  }
}



library.add(faUserTimes);
export default withStyles(styles)(StudentsList) ;
