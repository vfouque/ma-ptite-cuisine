import { Component } from "react";
const titleStyle = { fontSize: "40px", color: "red" };
export default class Receipe extends Component {
  render() {
    return (
      <div>
        <h1 style={titleStyle}>{this.props.data.name}</h1>
        <img src={this.props.data.img} alt="" />
      </div>
    );
  }
}
