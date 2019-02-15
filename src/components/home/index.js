import React from "react";
import { ThemeContext } from "../contexts";
import Chip from "@material-ui/core/Chip/Chip";

function Home() {
  return (
    <ThemeContext.Consumer>
      {({ color, changeColor }) => (
          <Chip
              color={ color }
              label='Hello Home'
          />
      )}
    </ThemeContext.Consumer>
  );
}

export default Home;
