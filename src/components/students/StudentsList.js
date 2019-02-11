import React, { Component } from 'react';
import FireManager from '../../firebase/FireManager'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

class StudentsList extends Component {

    render(){
        const {students} = this.props;
        return (<div className="App">
            {students.map(student =>
                {return (<div key={student.sId}>
                <>
                <Button style={{width:'250px',margin:'10px'}} variant="contained" href={`/students/${student.sId}`} >
                    {student.name}
                </Button>
             {/* <CardContent><Link to={`/students/${student.sId}`}>{student.name}</Link></CardContent> */}
                </>
                </div>)}
            )}
        </div>);
    }
}

export default StudentsList;