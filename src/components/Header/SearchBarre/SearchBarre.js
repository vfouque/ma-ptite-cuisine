import React, { Component } from "react";

export default class SearchBarre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown(event) {
    console.log(event.target.value);
    this.setState({ searchString: event.target.value });
    this.props.onChange(event.target.value);
  }

  // handleKeyDown = () => {
  //   this.setState({ searchString: target.value });
  // };

  render() {
    //if (this.state.searchString === RECEIPES
    return (
      <div>
        <input onChange={this.handleKeyDown} type="text" />
      </div>
    );
  }
}
