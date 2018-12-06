import React, { useReducer, useEffect } from 'react';

import appReducer from './App.reducer';
import Input from './Input';
import Title from './Title';
import Todos from './Todos';
import './App.css';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, dispatch] = useReducer(appReducer, initialState);

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


export default App;
