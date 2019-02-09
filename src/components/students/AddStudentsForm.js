import React, { useState } from 'react';
import { v4 } from 'uuid';
import FireManager from '../../firebase/FireManager'

export default function AddStudentsForm() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);

    const handleNameChange = function(e){
        setName(e.target.value)
    };

    const handleSurnameChange = function(e){
        setSurname(e.target.value)
    };

    const handleAgeChange = function(e){
        setAge(e.target.value)
    };

    const handleAddStudentClick = function () {
        const id = v4();
        const student = {
            name,
            surname,
            age,
            id
        };
        FireManager.addStudent(student).then(() => {
            alert('Success')
        })
    };

    return (
        <div>
            <input placeholder="name" type="text" value={name} onChange={handleNameChange}/>
            <input placeholder="surname" type="text" value={surname} onChange={handleSurnameChange}/>
            <input placeholder="age" type="number" value={age} onChange={handleAgeChange}/>
            <button onClick={handleAddStudentClick}>Add</button>
        </div>
    );
}