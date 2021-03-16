import Receipe from "./components/Receipe/Receipe";
import { RECEIPES } from "./utils/data";
import "./App.css";
import SearchBarre from "./components/Header/SearchBarre/SearchBarre";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { receipes: [] };
    this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
  }

  handleSearchStringChange(searchString) {
    this.setState({
      receipes: searchString
        ? RECEIPES.filter((receipe) =>
            receipe.name.toLowerCase().includes(searchString.toLowerCase())
          )
        : [],
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBarre onChange={this.handleSearchStringChange} />

        {/*RECEIPES.filter((name) => (name = this.state.searchString))*/}

        {this.state.receipes.map((receipe, index) => (
          <Receipe key={index} data={receipe} />
        ))}
      </div>
    );
  }
}

export default App;
