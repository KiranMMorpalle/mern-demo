import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('white');

  return (
    <><div className="box" style={{ backgroundColor: color }}>
      <h2>Pick a color:</h2>
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
        value={color} />
      <p>Selected: {color}</p>
    </div><br /><hr /></>
  );
}

export default ColorPicker;
