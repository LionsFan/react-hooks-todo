import React, { useState } from 'react';

const Input = ({ dispatch }) => {
  const defaultValue = '';
  const [text, setText] = useState(defaultValue);

  return (
    <div className="input-container">
      <input
        className="input"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button
        className="button"
        onClick={() => {
          dispatch({type: 'ADD_TODO', payload: text})
          setText(defaultValue);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
