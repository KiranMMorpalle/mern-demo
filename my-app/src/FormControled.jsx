import React, { useState } from 'react';

function FormControlled() {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return;          // quick validation
    alert(`Hi, ${name}!`);             // replace with real logic
    setName('');                       // clear the field
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </label>
      <button type="submit" disabled={!name.trim()}>
        Say hello
      </button>
    </form>
  );
}

export default FormControlled;
