import React, { Component } from 'react';
import FireManager from '../../firebase/FireManager'
import { Link } from 'react-router-dom';

class StudentsList extends Component {

    render(){
        const {students} = this.props;
        return (<div className="App">
            {students.map(student =>
                {return <div key={student.sId}>
                    <Link to={`/students/${student.sId}`}>{student.name}</Link>
                </div>}
            )}
        </div>);
    }
}

export default StudentsList;