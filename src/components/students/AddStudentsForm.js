import React, { useState } from "react";
import { v4 } from "uuid";
import { Form } from 'react-bootstrap/';
import { Col } from 'react-bootstrap/';
import { Row } from 'react-bootstrap/';
import { Button } from 'react-bootstrap/';
import {ThemeContext} from "../contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddStudentsForm(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);

  const handleNameChange = function(e) {
    setName(e.target.value);
  };

  const handleSurnameChange = function(e) {
    setSurname(e.target.value);
  };

  const handleAgeChange = function(e) {
    setAge(e.target.value);
  };

  const handleAddStudentClick = function() {
    const id = v4();
    const student = {
      name,
      surname,
      age,
      id
    };
    if (
      student.name.trim() !== "" &&
      student.surname.trim() !== "" &&
      student.age >= 18 &&
      student.age.trim() !== ""
    ) {
      props.addStudent(student);
      console.log(student);
    } else {
      alert("Please enter correct information");
    }
  };

  return (
    <>
      <Form className="divInputUpdate divInputAdd">
        <Row>
          <Col>
            <Form.Control
              className="textFieldUpdate"
              variant="outlined"
              type="text"
              placeholder="name"
              value={name}
              onChange={handleNameChange}
            />
          </Col>
            <Col>
            <Form.Control
              className="textFieldUpdate"
              type="text"
              variant="outlined"
              placeholder="surname"
              value={surname}
              onChange={handleSurnameChange}
            />
           </Col>
            <Col>
          <Form.Control
            className="textFieldUpdate"
            type="age"
            variant="outlined"
            placeholder="number"
            value={age}
            onChange={handleAgeChange}
          />
            </Col>
        <Col>
            <ThemeContext.Consumer>
                {({ color, changeColor }) => (
          <Button
            onClick={handleAddStudentClick}
            variant={ color }
          >
            <FontAwesomeIcon icon="user-plus"/>
          </Button>)}
            </ThemeContext.Consumer>
        </Col>
        </Row>
      </Form>
      <div className="addStudError">{props.addStudentError}</div>
    </>
  );
}

library.add(faUserPlus);