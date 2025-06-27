import React from 'react'

// function Addition() {
//     let num1=10;
//     let num2=20;
//   return (
//     <div>
//       <h3>Sum is : {num1+num2}</h3>
//     </div>
//   )
// }

function Addition({n1,n2}){

  let sum=parseInt(n1) + parseInt(n2);
  return(
    <div>
      <h3>Sum = {sum}</h3>
    </div>
  )
}

export default Addition
