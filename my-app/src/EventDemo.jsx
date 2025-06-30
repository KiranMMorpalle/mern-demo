import React from 'react'

function abc(){
    alert("Hello Students..!!");
}

function EventDemo() {
  return (
    <div>
      {/* <button onClick={abc}>Msg</button> */}
      <button onClick={()=>alert("Hello Students..!!")}>Msg</button> <br /><hr />

        {/* 2. onChange */}
      <input type="text" onChange={()=>alert("Hello you typed Somethng..!!")} />

      {/* 3. onmouseEnter */}
      <p onMouseEnter={()=> console.log("on mouse event")}>Welcome</p>

      {/* 4. onFocus */}
     <input type="text" onFocus={()=>console.log("on focus event")} />

     {/* 5. onBlur */}
     <input type="text" onBlur={()=>console.log("on blur event")} />

     {/* 6. onKeyDown */}
     <input type="text" onKeyDown={()=>console.log("on onKeyDown event")} />

     {/* 7. onKeyUp */}
     <input type="text" onKeyUp={()=>console.log("on onKeyUp event")} />

     {/* 8. onCopy */}
     <p onCopy={()=> console.log("Content Copy.")}>Java</p>
    </div>
  )
}

export default EventDemo
