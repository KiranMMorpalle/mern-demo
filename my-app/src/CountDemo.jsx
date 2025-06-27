import React, { Component } from 'react'

export default class CountDemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
    incrementCount(){
        this.state.count++;
        console.log(this.state.count);

    }

  render() {
    return (
      <div>
        <hr />
        <h2>Count : {this.setState.count}</h2>
        <button onClick={()=> this.incrementCount()}>Increment</button>
      </div>
    )
  }
}
