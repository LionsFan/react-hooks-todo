import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, dispatch }) => (
  <div className="todos">
    {todos.map((todo, idx) => <Todo key={idx} idx={idx} text={todo.text} dispatch={dispatch} />)}
  </div>
);

export default Todos;
