import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import FireManager from "./firebase/FireManager";
import Students from "./components/students";
import Home from "./components/home";
import Works from "./components/works";
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
        color: "blue",
        changeColor: this.changeColor
      }
    };
  }

  changeColor = () => {
    let oldColorcontext = this.state.colorContext;
    if (oldColorcontext.color === "blue") {
      oldColorcontext.color = "green";
      this.setState({
        colorContext: oldColorcontext
      });
      return;
    }
    oldColorcontext.color = "blue";
    this.setState({
      colorContext: oldColorcontext
    });
  };

  render() {
    const { colorContext } = this.state;
    return (
      <>
        <Router>
          <div>
            <ColorContext.Provider value={colorContext}>
              <Header />
            </ColorContext.Provider>

            <Switch>
              <Route path="/students" component={Students} />
              <ColorContext.Provider value={colorContext}>
                <Route path="/home" component={Home} />
                <Route path="/works" component={Works} />
              </ColorContext.Provider>
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
