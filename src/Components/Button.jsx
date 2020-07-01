import React from "react";
import "./Button.scss";

const isOperator = (val) => {
  if (!isNaN(val) || val === "." || val === "=") {
    return false;
  } else {
    return true;
  }
};

class Button extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.key === this.props.children) {
      this.props.handleClick(this.props.children);
    }
  };

  render() {
    return (
      <div
        className={`btn-wrapper ${
          isOperator(this.props.children) ? "operator" : null
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

// const Button = (props) => (
//   <div
//     className={`btn-wrapper ${isOperator(props.children) ? "operator" : null}`}
//     onClick={() => props.handleClick(props.children)}
//   >
//     {props.children}
//   </div>
// );

export default Button;
