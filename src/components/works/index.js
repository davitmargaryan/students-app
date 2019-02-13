import React, { useContext } from "react";
import { ColorContext } from "../contexts";

function Works() {
  const colorContext = useContext(ColorContext);

  return (
      <div style={{ color: colorContext.color }}>
        <h1>Works</h1>
      </div>
  );
}

export default Works;
