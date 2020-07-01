import React from "react";
import Display from "./Components/Display";
import Button from "./Components/Button";
import ClearButton from "./Components/ClearButton";
import "./App.scss";

const { evaluate } = require("mathjs");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    };
  }

  handleClick = (val) => {
    if (val === "x") {
      val = "*";
    }
    if (val === String.fromCharCode(247)) {
      val = "/";
    }
    if (
      this.state.result === "0" &&
      (val === "/" || val === "*" || val === "-" || val === "+")
    )
      return;
    if (this.state.result === "0" || this.state.result === 0) {
      this.setState({ result: val });
    } else {
      this.setState({ result: this.state.result + val });
    }
  };

  handleEqual = () => {
    let equationResult = evaluate(this.state.result);
    if (Number.isInteger(equationResult)) {
      this.setState({ result: evaluate(this.state.result).toFixed(0) });
    } else {
      this.setState({ result: evaluate(this.state.result).toFixed(2) });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="calc-wrapper">
            <Display result={this.state.result} />
            <div className="row">
              <Button handleClick={this.handleClick}>7</Button>
              <Button handleClick={this.handleClick}>8</Button>
              <Button handleClick={this.handleClick}>9</Button>
              <Button handleClick={this.handleClick}>&#247;</Button>
            </div>
            <div className="row">
              <Button handleClick={this.handleClick}>4</Button>
              <Button handleClick={this.handleClick}>5</Button>
              <Button handleClick={this.handleClick}>6</Button>
              <Button handleClick={this.handleClick}>x</Button>
            </div>
            <div className="row">
              <Button handleClick={this.handleClick}>1</Button>
              <Button handleClick={this.handleClick}>2</Button>
              <Button handleClick={this.handleClick}>3</Button>
              <Button handleClick={this.handleClick}>-</Button>
            </div>
            <div className="row">
              <Button handleClick={this.handleClick}>0</Button>
              <Button handleClick={this.handleClick}>.</Button>
              <Button handleClick={this.handleEqual}>=</Button>
              <Button handleClick={this.handleClick}>+</Button>
            </div>
            <ClearButton handleClear={() => this.setState({ result: "0" })} />
          </div>
        </header>
      </div>
    );
  }
}
export default App;
