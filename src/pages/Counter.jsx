import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <span className="tag">Practice 1</span>
      <h1>Counter App</h1>
      <p className="description">Use the buttons to increase, decrease or reset the counter.</p>

      <div className="count-box">{count}</div>

      <div className="button-row">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <p className="small-note">The counter value is stored using React useState.</p>
    </section>
  );
}

export default Counter;
