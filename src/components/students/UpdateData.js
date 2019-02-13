import React, { useState } from "react";
import FireManager from "../../firebase/FireManager";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    <div
      style={{ display: "none" }}
      id={props.student.id}
      className="divInputUpdate editDiv"
    >
      <TextField
        className="textFieldEdit"
        variant="outlined"
        placeholder="Name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        className="textFieldEdit"
        variant="outlined"
        placeholder="Surname"
        type="text"
        value={surname}
        onChange={handleSurnameChange}
      />
      <TextField
        className="textFieldEdit"
        variant="outlined"
        placeholder="Age"
        type="number"
        value={age}
        onChange={handleAgeChange}
      />
      <Button
        size="small"
        variant="contained"
        color="primary"
        className="buttonEdit"
        onClick={handleUpdateData}
        style={{ marginTop: "-7px", marginLeft: "2px" }}
      >
        upd
      </Button>
    </div>
  );
}
