import React from "react";
import "./component.css";

const Display = (props) => {
  const { value } = props;
  return (
    <div id="display-holder">{value && <p id="value">{value}</p>}</div>
  );
};

export default Display;