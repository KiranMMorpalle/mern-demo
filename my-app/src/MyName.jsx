import React from 'react'

function MyName(props) {
    let name=props.fname + " " + props.lname;
  return (
    <div>
      <h2>My name is {name}</h2>
    </div>
  )
}

export default MyName
