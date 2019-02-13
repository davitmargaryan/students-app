import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import FireManager from "./firebase/FireManager";
import Students from "./components/students";
import Home from "./components/home";
import Works from "./components/works";
import SignIn from "./components/authentication/signin";
import SignUp from "./components/authentication/signup";
import Header from "./components/header";
import { Switch } from "react-router-dom";
import "./App.css";
import { ColorContext } from "./components/contexts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      age: 0,
      colorContext: {
        color: "black",
        changeColor: this.changeColor
      }
    };
  }

  changeColor = () => {
    const {colorContext} = this.state;
    const newColor = colorContext.color === 'black' ? '#6b6b6b' : 'black';
    this.setState({
        colorContext: {
            ...colorContext,
            color: newColor
        }
    });
  };

  render() {
    const { colorContext } = this.state;
    return (
        <Router>
          <ColorContext.Provider value={colorContext}>
            <Header />
            <Switch>
              <Route path="/students" component={Students} />
              <Route path="/home" component={Home} />
              <Route path="/works" component={Works} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={Home} />
            </Switch>
          </ColorContext.Provider>
        </Router>
    );
  }
}

export default App;
