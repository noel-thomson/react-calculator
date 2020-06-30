import React from "react";
import "./ClearButton.scss";

const ClearButton = (props) => (
  <button className="clear-btn-wrapper" onClick={props.handleClear}>
    AC
  </button>
);

export default ClearButton;
