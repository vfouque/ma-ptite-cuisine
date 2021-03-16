import { Component } from "react";
import styles from "./Receipe.module.css";
const titleStyle = { fontSize: "40px", color: "red" };
export default class Receipe extends Component {
  render() {
    return (
      <div>
        <h1 style={titleStyle}>{this.props.data.name}</h1>
        <img src={this.props.data.img} alt="" className={styles.image} />
      </div>
    );
  }
}
