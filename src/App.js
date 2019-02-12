import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import FireManager from "./firebase/FireManager";
import Students from "./components/students";
import Home from "./components/home";
import Works from "./components/works";
import Header from "./components/header";
import { Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    userName: "",
    age: 0
  };

  // componentDidMount() {
  //   FireManager.getStudent("awhmXpzGdG5I1PkFFyl1").then(user => {
  //     this.setState({ username: user.name, age: user.age });
  //   });
  // }

  render() {
    // const { username, age } = this.state;
    return (
      <>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/students" component={Students} />
              <Route path="/works" component={Works} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
