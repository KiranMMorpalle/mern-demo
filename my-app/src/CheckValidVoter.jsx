import React from 'react'

// function CheckValidVoter() {
//     let age=17;
//     let msg=" ";

//     if (age <=0 && age >100) {
//         // alert("Enter valid age.");
//         return "Enter valid age.";
//     }
//     else if(age<18)
//         return "You are not valid user for vote.";
//     else
//         return "You are not valid user for vote.";
  
// }

function CheckValidVoter({age, isEligible}){
    return(
    <div>
      <h3>Age = {age}</h3>
      <p>{isEligible ? "Your are eligible" : "You are Not eligible"}</p>
    </div>
  )
}

export default CheckValidVoter
