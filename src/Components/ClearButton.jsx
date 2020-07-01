import React from "react";
import "./ClearButton.scss";

export class ClearButton extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.keyCode === 8 || e.keyCode === 27) {
      this.props.handleClear();
    }
  };

  render() {
    return (
      <button className="clear-btn-wrapper" onClick={this.props.handleClear}>
        AC
      </button>
    );
  }
}

export default ClearButton;
