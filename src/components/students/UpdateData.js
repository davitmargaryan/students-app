//import React from "react";
import React, { useState } from 'react';
import FireManager from '../../firebase/FireManager';
// import { debug } from 'util';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function UpdateData(props) {
    const [name, setName] = useState(`${props.student.name}`);
    const [surname, setSurname] = useState(`${props.student.surname}`);
    const [age, setAge] = useState(`${props.student.age}`);
    // const [check,setCheck] = useState(`${false}`);

    const handleNameChange = function(e){
        setName(e.target.value);

    };

    const handleSurnameChange = function(e){
        setSurname(e.target.value);
    };

    const handleAgeChange = function(e){
        setAge(e.target.value)
    };

     const handleUpdateData = function(){
        const student = {
            name,
            surname,
            age,
            id:props.student.id
        };
        function toFixObject (obj) {
            if (!obj.name) {obj.name = props.student.name};
            if (!obj.surname) {obj.surname = props.student.surname};
            if (!obj.age) {obj.age = props.student.age};
            return obj
        };
        toFixObject(student);
        FireManager.editStudent(student).then(() => {
            console.log('Success')
        })
        console.log(student);
     }

 return (
   <div id = {props.student.id} style = {{display:"none"}}className = 'divInputUpdate'>
     <TextField className="textFieldUpdate"variant="outlined" placeholder={props.student.name} type="text" value={name} onChange={handleNameChange} />
     <TextField className="textFieldUpdate"type="text"variant="outlined" value={surname} onChange={handleSurnameChange}/>
     <TextField className="textFieldUpdate" variant="outlined" placeholder={props.student.age} type="number" value={age} onChange={handleAgeChange} />
     <Button onClick = {handleUpdateData} variant="contained"color="primary" className = 'buttonEdit'>Update</Button>
   </div>
 );
}