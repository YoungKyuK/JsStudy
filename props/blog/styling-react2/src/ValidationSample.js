import React, { Component } from "react";
import "./ValidationSample.css";

// ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것이다.

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    vaildated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
export default ValidationSample;
