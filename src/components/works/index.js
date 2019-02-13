import React from "react";
import { ThemeContext } from "../contexts";

function Works() {
  return (
    <ThemeContext.Consumer>
      {({ color, changeColor }) => {
        return (
          <div style={{ color }}>
            <h1>COMPONENTS WORDS</h1>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Works;
