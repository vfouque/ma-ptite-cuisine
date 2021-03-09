import React, { Component } from "react";

export default class SearchBarre extends Component {
  handleKeyDown() {
    console.log("hello");
  }
  render() {
    return (
      <div>
        <input onKeyDown={this.handleKeyDown} type="text" />
      </div>
    );
  }
}
