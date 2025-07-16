import React, { Component } from 'react'

export default class Addition1 extends Component {
  render() {
    const {n1, n2} = this.props
    let sum = parseInt(n1) + parseInt(n2);

    return (
      <div>
        <h3>Sum : {sum}</h3>
      </div>
    )
  }
}
