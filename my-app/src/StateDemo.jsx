import React, { Component } from 'react'

export default class StateDemo extends Component {

    constructor() {
      super()
    
      this.state = (
        {
            msg : "You are welcome."
        }
      )
    }

    changeMsg() {
        this.setState(
            {
                msg : "How are you."
            }
        )
    }
    

  render() {
    return (
      <div>
        <br />
        <hr />
        <h2>{this.state.msg}</h2>
        <button onClick={()=> this.changeMsg()}>Click Me</button>
      </div>
    )
  }
}
