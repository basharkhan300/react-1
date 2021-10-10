import React, { Component } from 'react';
import Navbar from "./components/navbar"
import './App.css';
import Counters from "./components/counters"

class App extends Component {


    state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 4 },
      { id: 3, value: 6 },
      { id: 4, value: 8 },
    ],
  };
  
  handleIncrement = (counterArg) => {
    const newIncrement = [...this.state.counters];
    const index = newIncrement.indexOf(counterArg);
    newIncrement[index] = {...counterArg}   // without this our counter object in state changes which we dont want
    newIncrement[index].value++;

    this.setState({counters: newIncrement})
    
  }
  
  handleReset = () => {

    const newResetCounters = this.state.counters.map( (element) => {
      element.value = 0;
      return element;
    } )

    this.setState({counters: newResetCounters})
    
  }
  
  handleDelete = (counterid) => {
    //   console.log("handles this", counterid);
    const newCounters = this.state.counters.filter( (element) => { return element.id !== counterid } )
    this.setState( { counters: newCounters } );
  }


  
  
  render() { 
    return (
      <React.Fragment>
      <Navbar totalCounters = {this.state.counters.filter((element) => element.value > 0 ).length} />
      <main className="container">
      <Counters counters = {this.state.counters} onReset = {this.handleReset} onIncrement = {this.handleIncrement} onDelete = {this.handleDelete} />
      </main>
      </React.Fragment>
    )
  }
}
 
export default App;

