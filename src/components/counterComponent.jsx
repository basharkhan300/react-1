import React, { Component } from "react";

export default class Counter extends Component {
  
  render() {
    return (
      <div>
      
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button onClick={ () => { return this.props.onIncrement(this.props.counter) } } className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button onClick = { () => { return this.props.onDelete(this.props.counter.id) } } className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }


  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  //   conditionalRender(){

  //     if(this.state.tags.length === 0) return <p>No tags</p>

  //     else{

  //      return this.state.tags.map((tag) => <li key = {tag}>{tag}</li> )
  //     }

  //   }

  // {this.conditionalRender()}

  // <span className = {this.getBadgeClass()}>{this.formatCount()}</span>
  // <button className = "btn btn-secondary btn-sm">Increment</button>
  // {this.state.tags.map((tag) => <li key = {tag}>{tag}</li> )}
  // {this.props.children}
}
