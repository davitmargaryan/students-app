import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import FireManager from "./firebase/FireManager";
import Students from './components/students'
import './App.css';

class App extends Component {

  state = {
    userName: '',
      age: 0
  };
  render() {
    return (
        <Router>
          <>
            <Route exact path="/" render={()=> <p>Invalid Rout</p>}/>
            <Route path="/students" component={Students}/>
          </>
        </Router>
    );
  }
}

export default App;
