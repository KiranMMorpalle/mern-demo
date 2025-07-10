import React from 'react';

const PropesGetter = ({ title, rating, isCool, actors }) => (
  <div>
    <h2>Name : {title} | Rating: {rating} | Cool: {isCool ? "Yes" : "No"}  | Actor: {actors[0].name}</h2>
  </div> 
);

const PropsExample = () =>{
  return (
    <div>
      <h1>Props Example</h1> <br /><hr />
      <h2>String  |  Number  |  Boolean  |  Array</h2> <hr />
        <PropesGetter title="YJHD" rating={5} isCool={true} actors = {[{name : "Ranbir"}]} /> 
        <PropesGetter title="Pravas" rating={5} isCool={true} actors = {[{name : "Ashok"}]} />
        <PropesGetter title="Maharaja" rating={5} isCool={true} actors = {[{name : "Vijay"}]} />
        <PropesGetter title="DDLJ" rating={5} isCool={true} actors = {[{name : "Srk"}]} />
    </div>
  );
}

export default PropsExample;
// export default PropesGetter;
