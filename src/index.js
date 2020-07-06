import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi() {
  return <div>Hello <strong>Lou</strong></div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));
