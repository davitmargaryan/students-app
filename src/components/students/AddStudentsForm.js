import React, { useState } from "react";
import { v4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
      <div className="divInputUpdate divInputAdd">
        <TextField
          className="textFieldUpdate"
          variant="outlined"
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          className="textFieldUpdate"
          type="text"
          variant="outlined"
          placeholder="surname"
          value={surname}
          onChange={handleSurnameChange}
        />

        <TextField
          className="textFieldUpdate"
          type="age"
          variant="outlined"
          placeholder="number"
          value={age}
          onChange={handleAgeChange}
        />

        <Button
          onClick={handleAddStudentClick}
          variant="contained"
          color="primary"
          className="buttonEdit"
        >
          ADD
        </Button>
      </div>
      <div className="addStudError">{props.addStudentError}</div>
    </>
  );
}
