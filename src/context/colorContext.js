import React from "react";

// Creating the context object and passing the default values.
const colorContext = React.createContext({
  colorDark: false,
  setColor: () => {},
});

export default colorContext;
