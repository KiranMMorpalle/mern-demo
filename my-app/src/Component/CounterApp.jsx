import React, { useState } from 'react';

function CounterApp() {
  // Declare a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  return (
    <><div style={styles.container}>
      <h2>Counter: {count}</h2>

      <div style={styles.buttonGroup}>
        <button onClick={() => setCount(count + 1)} style={styles.btn}>➕ Increment</button>
        <button onClick={() => setCount(count - 1)} style={styles.btn}>➖ Decrement</button>
        <button onClick={() => setCount(0)} style={styles.resetBtn}>🔁 Reset</button>
      </div>
    </div><br /><hr /></>
  );
}

// Inline styles for quick styling
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial',
  },
  buttonGroup: {
    marginTop: '20px',
  },
  btn: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  resetBtn: {
    margin: '5px',
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
  }
};

export default CounterApp;
