import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Keypad from "./Keypad";
import Display from "./Display";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      previous: "",
      operation: "",
    };
    this.keyPress = this.keyPress.bind(this);
    this.delete = this.delete.bind(this);
    this.clear = this.clear.bind(this);
    this.operation = this.operation.bind(this);
    this.compute = this.compute.bind(this);
    this.equals = this.equals.bind(this);
  }

  keyPress(event) {
    const sum = event.target.value;
    let display = this.state.current;

    if (sum === "." && this.state.current.includes(".")) return;

    this.setState({
      current: display + sum,
    });
  }

  delete() {
    let display = this.state.current;

    this.setState({
      current: display.slice(0, -1),
    });
  }

  clear() {
    this.setState({
      current: "",
      previous: "",
      operation: "",
    });
  }

  compute() {
    let result;
    let previousNumber = parseFloat(this.state.previous);
    let currentNumber = parseFloat(this.state.current);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (this.state.operation) {
      case "/":
        result = previousNumber / currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "*":
        result = previousNumber * currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  }

  operation(op) {
    let operator = op.target.value;
    if (this.state.current === "") return;
    if (this.state.previous !== "") {
      let value = this.compute();
      this.setState({
        previous: value + operator,
      });
    } else {
      this.setState({
        previous: this.state.current + operator,
      });
    }
    this.setState({
      current: "",
      operation: op.target.value,
    });
  }

  equals() {
    let value = this.compute();
    if (value === undefined || value == null) return;

    this.setState({
      current: value,
      previous: "",
      operation: "",
    });
  }

  render() {
    return (
        <div id='app'>

      <Container id='calculator'>
        <Display
          operator={this.state.operation}
          total={this.state.previous}
          screen={this.state.current}
          />
        <Keypad id='keypad'
          equals={this.equals}
          operation={this.operation}
          clear={this.clear}
          del={this.delete}
          onClick={this.keyPress}
          />
      </Container>
          </div>
    );
  }
}
export default Calculator;
