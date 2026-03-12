import React, { Component } from "react";
import { Parent } from "./Parent";

export class Toggle extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }

  toggleComponent = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleComponent}>
          Toggle Parent
        </button>

        {this.state.show && <Parent />}
      </>
    );
  }
}