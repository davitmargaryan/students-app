import React, { Component } from "react";
import FireManager from "../../firebase/FireManager";
import { ThemeContext } from "../contexts"
import Chip from "@material-ui/core/Chip/Chip";

class Profile extends Component {
  state = {
    name: "",
    age: ""
  };

  componentDidMount() {
    const { studentId } = this.props.match.params;
    if (studentId) {
      FireManager.getStudent(studentId).then(student => {
        this.setState({
          name: student.name,
          age: student.age
        });
      });
    }
  }

  render() {
    const { name, age } = this.state;
    return (
        <ThemeContext.Consumer>
            {({ color, changeColor }) => (
      <div>
          <Chip
              color={ color }
              label={ `Name: ${name} Age: ${age}` }
          />
      </div>
            )}
        </ThemeContext.Consumer>
    );
  }
}

export default Profile;
