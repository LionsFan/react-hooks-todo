import React, { useState, useReducer, useEffect } from 'react';
import './App.css';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  return (
    <div className="app">
      <div className="header">
        <Title />
        <Input dispatch={dispatch} />
      </div>
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  );
}

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state.push({text: action.payload})
      return state;
    case 'REMOVE_TODO':
      return state.slice(0, action.payload).concat(state.slice(action.payload + 1))
    case 'MOVE_UP':
      if (action.payload > 0) {
        let move = state[action.payload];
        state[action.payload] = state[action.payload-1];
        state[action.payload-1] = move;
      }
      return state;
    case 'MOVE_DOWN':
      if (action.payload < state.length - 1) {
        let move = state[action.payload];
        state[action.payload] = state[action.payload+1];
        state[action.payload+1] = move;
      }
      return state;
    default:
      return state
  }
}

const Title = () => (
  <h1 className="title">To Do App</h1>
);

const Input = ({dispatch}) => {
  const [text, setText] = useState('');

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
          setText('');
        }}
      >
        Submit
      </button>
    </div>
  );
}

const Todos = ({todos, dispatch}) => (
  <div className="todos">
    {todos.map((todo, idx) => <Todo key={idx} idx={idx} text={todo.text} dispatch={dispatch} />)}
  </div>
);

const Todo = ({idx, text, dispatch}) => (
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

export default App;
