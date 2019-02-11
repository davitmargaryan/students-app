import React, { useState } from 'react';
import { v4 } from 'uuid';
import FireManager from '../../firebase/FireManager'
import { Grid ,Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const divStyle = {
    margin: '40px',
    border: '5px solid pink'
  };

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
        //<div className={div}>
        <Grid style={{margin:'20px 0px 40px 150px'}} container spacing={24}>
         <Grid xs={8} md={8} sm={8}>
         <TextField
          id="outlined-name"
          fullWidth="true"

          label="Name"
          value={name} 
          onChange={handleNameChange}
          margin="normal"
          variant="outlined"
        />
        </Grid>
        <Grid xs={8} md={8} sm={8}>
        <TextField
                  fullWidth="true"

          id="outlined-name"
          label="surname"
          value={surname} 
          onChange={handleSurnameChange}
          margin="normal"
          variant="outlined"
        />
        </Grid>
        <Grid xs={8} md={8} sm={8}>
        <TextField
          fullWidth="true"
          id="outlined-name"
          label="age"
          value={age}
          onChange={handleAgeChange}
          margin="normal"
          variant="outlined"
        />
        </Grid>
        <Grid xs={8} md={8} sm={8}>
        <Button fullWidth="true" onClick={handleAddStudentClick} variant="contained" color="primary">
          Add
        </Button>
        </Grid>
        </Grid>
       
        //</div>
         
          
       
        
    );
}
