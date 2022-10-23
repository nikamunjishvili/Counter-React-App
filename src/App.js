import React, {useState} from "react";

function App() {
  const[count,setCount] = useState(0);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <h1>Counter App</h1>
        <div className="count-body">
          <h2>{count}</h2>
          <button className="btn1" onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button className="btn2"  onClick={() => setCount(count - 1)}
          disabled={count === 0}
          >
          Decrement
          </button>
          <button className="btn3" onClick={() => setCount(0)}
          disabled={count === 0}
          >
          Reset
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
