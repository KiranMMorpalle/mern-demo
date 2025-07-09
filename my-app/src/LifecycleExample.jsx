import React, { Component } from 'react'

export default class LifecycleExample extends Component {

    //1
    constructor(props) {
        super(props);
        this.state = {favorite : "red"};
        console.log("Constructor called");
    }
    //2
    static getDerivedStateFromProps(props, state){
        return {favorite : props.favcol};

        console.log("getDerivedStateFromProps called");
    }
    
    // 3
    componentDidMount() {
    setTimeout(() => {
      this.setState({favorite: "pink"})
    }, 5000)

    console.log("componentDidMount called");
  }

  render() {
    return (
      <div>
        <h1>My Favorite color : {this.state.favorite} </h1>
      </div>
    )
  }
}
