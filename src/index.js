import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Room() {
  const [isLit, setLit] = useState(true);
  const brightness = isLit ? "lit" : "dark";

  return (
    <div className={`room ${isLit ? 'lit' : 'dark'}`}>
      the room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={() => setLit(!isLit)}>
        flip
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById('root'));
