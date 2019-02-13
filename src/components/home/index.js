import React from "react";
import { ThemeContext } from "../contexts";

function Home() {
  return (
    <ThemeContext.Consumer>
      {({ color, changeColor }) => (
        <div style={{ color }}>
          <h1>hello hOME</h1>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Home;
