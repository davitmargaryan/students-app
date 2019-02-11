import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FireManager from '../../firebase/FireManager'
import Profile from './Profile'
import StudentsList from './StudentsList';
import AddStudentsForm from './AddStudentsForm';
import Grid from '@material-ui/core/Grid';
import { app } from 'firebase';

const divStyle = {
    margin: '40px',
    border: '5px solid '
  };

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
        const StudentsListHOC = function(){
            return (
               <div style={divStyle} className="marg">
                    <StudentsList students={students}/>
                    <AddStudentsForm />
               </div>
                
                // <Grid container spacing={24}>
                //     <Grid item xs={24} md={6} sm={12}>
                //     </Grid>
                // </Grid>

            )
        };
        return (
            <Router>
                <>
                    <Route exact path="/students"  component={StudentsListHOC}  />
                    <Route path="/students/:studentId" component={Profile}/>
                 </>
            </Router>

        );
    }
}

export default Students;
