import React, { useState } from "react";
import FireManager from "../../firebase/FireManager";
import { Button } from 'react-bootstrap/';
import { Form } from 'react-bootstrap/';
import { Col } from 'react-bootstrap/';
import { Row } from 'react-bootstrap/';
import { ThemeContext } from "../contexts";

export default function UpdateData(props) {
  const [name, setName] = useState(`${props.student.name}`);
  const [surname, setSurname] = useState(`${props.student.surname}`);
  const [age, setAge] = useState(`${props.student.age}`);

  const handleNameChange = function(e) {
    setName(e.target.value);
  };

  const handleSurnameChange = function(e) {
    setSurname(e.target.value);
  };

  const handleAgeChange = function(e) {
    setAge(e.target.value);
  };

  const handleUpdateData = function() {
    const student = {
      name,
      surname,
      age,
      id: props.student.id
    };

    function toFixObject(obj) {
      if (!obj.name) {
        obj.name = props.student.name;
      }
      if (!obj.surname) {
        obj.surname = props.student.surname;
      }
      if (!obj.age) {
        obj.age = props.student.age;
      }
      return obj;
    }
    toFixObject(student);

    FireManager.editStudent(student).then(() => {
      console.log("Success");
    });
    props.updateStudent(student);
  };

  return (
      <ThemeContext.Consumer>
          {({ color, changeColor }) => (
      <div>
      <Form id={props.student.id} style={{ display: "none" }}>
          <Row>
              <Col>
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder= {name} onChange={handleNameChange} />
              </Col>
              <Col>
                  <Form.Label>Surname</Form.Label>
                  <Form.Control placeholder={surname} onChange={handleSurnameChange} />
              </Col>
              <Col>
                  <Form.Label>Age</Form.Label>
                  <Form.Control placeholder={ age } onChange={handleAgeChange} >
                  </Form.Control>
              </Col>
              <Col>
                  <Button
                      className="col"
                      variant= { color }
                      style={{ marginTop: "30px" }}
                      onClick={handleUpdateData}>
                      Upd
                  </Button>
              </Col>

          </Row>
      </Form>

    </div>
            )}
              </ThemeContext.Consumer>
  );
}
