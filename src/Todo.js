import React from 'react';

const Todo = ({ idx, text, dispatch }) => (
  <div className="todo">
    <div className="todo-text">{idx+1}. {text}</div>
    <div className="todo-icons">
    <button
        className="icon-button"
        onClick={() => dispatch({type: 'MOVE_DOWN', payload: idx})}
      >
        <i className="fa fa-chevron-down"></i>
      </button>
      <button
        className="icon-button"
        onClick={() => dispatch({type: 'MOVE_UP', payload: idx})}
      >
        <i className="fa fa-chevron-up"></i>
      </button>
      <button
        className="icon-button"
        onClick={() => dispatch({type: 'REMOVE_TODO', payload: idx})}
      >
        <i className="fa fa-trash"></i>
      </button>
    </div>
  </div>
);

export default Todo;
