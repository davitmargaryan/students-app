import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Students from "./components/students";
import Home from "./components/home";
import Works from "./components/works";
import Header from "./components/header";
import { Switch } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./components/contexts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      age: 0,
      colorContext: {
        color: "primary",
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
      <>
        <Router>
          <div>
            <ThemeContext.Provider value={colorContext}>
              <Header />

            <Switch>
              <Route path="/students" component={Students} />
              <ThemeContext.Provider value={colorContext}>
                <Route path="/home" component={Home} />
                <Route path="/works" component={Works} />
              </ThemeContext.Provider>
              <Route path="/" component={Home} />
            </Switch>
            </ThemeContext.Provider>

          </div>
        </Router>
      </>
    );
  }
}

export default App;
