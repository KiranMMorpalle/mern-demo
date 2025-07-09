import React, { Component } from 'react'

export default class LifecycleDemo extends Component {

    // 1 : constructor method
    constructor(props){
        super(props)

        this.state = {
            name : "Spark"
        }
        console.log("Constructor Involked.!!");
    }

    // 2. Static way
    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle getDerivedStateFromProps..!!");
        return null
    }

    // 3. componentDidMount()
    componentDidMount(){
        console.log("Lifecycle componentDidMount..!!");
    }

  render() 
  {
    // 4. render()
    console.log("Lifecycle render..!!");

    return (
      <div>
        <h1>Lifecycle of React</h1>
      </div>
    )
  }
}
