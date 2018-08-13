import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <div onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            OnIncrement={onIncrement}
            counter={counter}
          >
            <h4>{counter.name}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
