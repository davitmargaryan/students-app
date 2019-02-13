import React from "react";
import { ColorContext } from "../contexts";

function Works() {
  return (
    <ColorContext.Consumer>
      {({ color, changeColor }) => {
        return (
          <div style={{ color }}>
            <h1>COMPONENTS WORDS</h1>
          </div>
        );
      }}
    </ColorContext.Consumer>
  );
}

export default Works;
