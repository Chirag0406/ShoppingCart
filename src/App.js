import React, { Component } from "react";
import "./App.css";
import Navabar from "./Components/navbar";
import Counters from "./Components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, name: "Dell" },
      { id: 2, value: 0, name: "HP" },
      { id: 3, value: 0, name: "Sony" },
      { id: 4, value: 0, name: "Apple" }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log("index = " + index);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navabar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
