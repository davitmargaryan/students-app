import React from "react";
import { ThemeContext } from "../contexts";
import Chip from "@material-ui/core/Chip/Chip";

function Works() {
  return (
      <ThemeContext.Consumer>
          {({ color, changeColor }) => (
              <Chip
                  color={ color }
                  label='Hello Works'
              />
          )}
      </ThemeContext.Consumer>
  );
}

export default Works;
