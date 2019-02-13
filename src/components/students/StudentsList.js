import React, { Component } from 'react';
import FireManager from '../../firebase/FireManager'
import { Link } from 'react-router-dom';

class StudentsList extends Component {

    render(){
        const {students} = this.props;
        return (<div className="App">
            {students.map(student =>
                {return <div key={student.id}>
                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                </div>}
            )}
        </div>);
    }
}

export default StudentsList;