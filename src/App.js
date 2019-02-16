import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Students from "./components/students";
import Works from "./components/works";
import SignIn from "./components/authentication/signin";
import SignUp from "./components/authentication/signup";
import Header from "./components/header";
import { Switch } from "react-router-dom";
import "./App.css";
import {ThemeContext ,themes} from './components/contexts/ThemeContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      age: 0,
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    return (
        <Router>
          <ThemeContext.Provider value={this.state.theme}>
            <Header   changeTheme={this.toggleTheme} />
            <Switch>
              <Route path="/students" component={Students} />
              <Route path="/home" component={Home} />
              <Route path="/works" component={Works} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={Home} />
            </Switch>
          </ThemeContext.Provider>
        </Router>
    );
  }
}

export default App;
