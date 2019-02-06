import React, { Component } from 'react';
import logo from './logo.svg';
import FireManager from "./firebase/FireManager";
import './App.css';

class App extends Component {

  state = {
    userName: ''
  };

  componentDidMount(){
    FireManager.getStudent('awhmXpzGdG5I1PkFFyl1').then(user => {
      this.setState({username: user.name})
    })
  }

  render() {
    const {username} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            {username}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
