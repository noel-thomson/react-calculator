import React from "react";
import "./Button.scss";

const isOperator = (val) => {
  if (!isNaN(val) || val === "." || val === "=") {
    return false;
  } else {
    return true;
  }
};

const Button = (props) => (
  <div
    className={`btn-wrapper ${isOperator(props.children) ? "operator" : null}`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;
