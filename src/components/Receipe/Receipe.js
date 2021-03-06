import { Component } from "react";

export default class Receipe extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.name}</h1>
        <img src={this.props.data.img} alt="" />
      </div>
    );
  }
}
import React, { Component } from 'react'


