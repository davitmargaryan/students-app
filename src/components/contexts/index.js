import React from "react";

export const ColorContext = React.createContext({
  color: "black",
  changeColor: () => {}
});
