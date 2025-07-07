import React, { useRef } from 'react';

function FormUncontrolled() {
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Hi, ${inputRef.current.value}!`);
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} placeholder="Enter your name" />
      </label>
      <button type="submit">Say hello</button>
    </form>
  );
}

export default FormUncontrolled;
