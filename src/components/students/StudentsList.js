import React, { Component } from 'react';
import FireManager from '../../firebase/FireManager'
import { Link } from 'react-router-dom';
import UpdateData from './UpdateData.js';
import '../../App.css';
import Button from "@material-ui/core/Button";

class StudentsList extends Component {
    constructor(props) {
        super(props);
    }
    handleRemove = student => {
        FireManager.removeStudent(student);
      };
     
  hiddenOrShowEdit = student => {
        if (document.getElementById(`${student.id}`).style.display === 'none') {document.getElementById(`${student.id}`).style.display = 'block';
            return 
        }
        if (document.getElementById(`${student.id}`).style.display === 'block') {document.getElementById(`${student.id}`).style.display = 'none'}

    }
    render(){
        const {students} = this.props
        return (<div className="App">
            {students.map(student =>
                {return <div key={student.id} className = 'divItem'>
                    <Link to = {`/students/${student.id}`} className = 'linkStyle' >{student.name+ '   ' + student.surname}
                    </Link>
                        <Button variant="contained" color="primary"  style={{ backgroundColor: "red" }} onClick = {()=>{this.handleRemove(student)}} >Remove</Button>
                        <Button  variant="contained" color="primary" style={{ backgroundColor: "green" }} onClick = {()=>{this.hiddenOrShowEdit(student)}}>Edit</Button>
                    <UpdateData student={student} />
                </div>
                }
            )}
        </div>);
    }
}

export default StudentsList;