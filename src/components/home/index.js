import React from "react";
import { ColorContext } from "../contexts";

function Home() {
  return (
    <ColorContext.Consumer>
      {({ color, changeColor }) => (
        <div style={{ color }}>
          <h1>hello hOME</h1>
        </div>
      )}
    </ColorContext.Consumer>
  );
}

export default Home;
