import React, { Component } from 'react';
import FireManager from '../../firebase/FireManager'
import { Link } from 'react-router-dom';
import UpdateData from './UpdateData.js';


class StudentsList extends Component {
    constructor(props) {
        super(props);
    }
    handleRemove = student => {
        FireManager.removeStudent(student);
      };
    handleEdit = student => {
        FireManager.editStudent(student);
    }
    render(){
        const {students} = this.props
        return (<div className="App">
            {students.map(student =>
                {return <div key={student.id}>
                    <Link to = {`/students/${student.id}`} >{student.name} 
                    </Link>
                    <button onClick = {()=>{this.handleRemove(student)}}>Remove</button>
                    <button onClick = {()=>{this.handleEdit(student)}}>Edit</button>
                    <UpdateData student={student} />
                </div>
                }
            )}
        </div>);
    }
}

export default StudentsList;