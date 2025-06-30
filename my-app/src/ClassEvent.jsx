import React, { Component } from 'react'

export default class ClassEvent extends Component {
    clickFunc = ()=>{
        alert("Class click event");
    }

  render() {
    return (
      <div>
        <hr /><hr />
        <button onClick={this.clickFunc}>Button</button>
        

      </div>
    )
  }
}
