import React from "react";

export const ColorfulMessage = (props) => {
  console.log("からふる");

  //分割代入
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
