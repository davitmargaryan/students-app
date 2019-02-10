import React, { useState } from "react";
import FireManager from "../../firebase/FireManager";

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
    FireManager.editStudent(student).then(() => {
      console.log("Success");
    });
    console.log(student);
  };

  return (
    <div>
      <input
        placeholder={props.student.name}
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <input
        placeholder={props.student.surname}
        type="text"
        value={surname}
        onChange={handleSurnameChange}
      />
      <input
        placeholder={props.student.age}
        type="number"
        value={age}
        onChange={handleAgeChange}
      />
      <button onClick={handleUpdateData}>Update</button>
    </div>
  );
}
