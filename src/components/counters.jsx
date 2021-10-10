import React, { Component } from "react";
import Counter from "./counterComponent";

export default class Counters extends Component {

  
  render() {

    const { onReset, counters, onDelete, onIncrement } = this.props;
    
    return (
      <div>
      <button onClick={onReset}  className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
        //   <Counter key={counter.id} onDelete = {this.handleDelete} value={counter.value} id={counter.id}>
          <Counter key={counter.id} onIncrement = {onIncrement} onDelete = {onDelete}  counter = {counter} >

            
          </Counter>
        ))}
      </div>
    );
  }
}
