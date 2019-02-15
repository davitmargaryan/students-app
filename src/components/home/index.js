import React, { useContext } from "react";
import { ColorContext } from "../contexts";

function Home() {
  const colorContext = useContext(ColorContext);

  return (
    <div style={{ color: colorContext.color }}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
