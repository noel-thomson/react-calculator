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
    if (e.key === "/" && this.props.children === String.fromCharCode(247)) {
      e.preventDefault();
      this.props.handleClick(this.props.children);
    }
    if (e.key === "*" && this.props.children === "x") {
      this.props.handleClick(this.props.children);
    }
    if (e.keyCode === 13 && this.props.children === "=") {
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

export default Button;
