import React, { Component } from "react";
import FireManager from "../../firebase/FireManager";

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
      <div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    );
  }
}

export default Profile;
