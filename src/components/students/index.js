import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FireManager from '../../firebase/FireManager'

class Students extends Component {

    state = {
        students: []
    };

    componentDidMount(){
        FireManager.getStudents().then(students => {
            this.setState({students})
        })
    }

    render() {
        const { students } = this.state;
        return (
            <div className="App">
                {students.map(student =>
                    {return <div key={student.sId}>
                                <Link to={`/students/${student.sId}`}>{student.name}</Link>
                            </div>}
                )}
            </div>
        );
    }
}

export default Students;
