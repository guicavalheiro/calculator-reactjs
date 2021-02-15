import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton"

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    console.log("Val: " + val)
    this.setState( { 
      input: this.state.input + val,
      currentNumber: val
    },
      () => {
        console.log("\nAfter add to input")
        this.print()
    } );
  }

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ 
        input: this.state.input + val,
        currentNumber: this.state.input 
      },
        () => {
          console.log("\nAfter add zero to input")
          this.print()
      } );
    }
  }

  addDecimal = val => {
    if (this.state.input.includes(".") === false) {
      this.setState( { 
        input: this.state.input + val,
        currentNumber: this.state.input 
      },
        () => {
          console.log("\nAfter add decimal")
          this.print()
      });
    }
  }

  clearInput = () => {
    this.setState( {
        input: "",
        previousNumber: "",
        currentNumber: "",
        operator: ""
    } );
  }

  add = val => {
    if (this.state.input !== "") {
      
      this.setState( {
        previousNumber: this.state.input,
        input: this.state.input + val,
        operator: val
      },
        () => {
          console.log("\nAfter plus choice")
          this.print()
      });
    }
  }
  
  equals = () => {
    console.log("\nBefore equals")
    this.print()
    
    this.setState({
      input: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber),
      currentNumber: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber),
      previousNumber: "",
      operator: ""
    },
      () => {
        console.log("\nAfter equals") 
        this.print()
    } );
  }

  print = () => {
    console.log("Input   : " + this.state.input);
    console.log("Current : " + this.state.currentNumber)
    console.log("Previous: " + this.state.previousNumber)
    console.log("Operator: " + this.state.operator)
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.equals}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClick={this.clearInput}>clear</ClearButton>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
