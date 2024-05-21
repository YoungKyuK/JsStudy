import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// app.js에서 받아온 props (todos)를 맵을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링 해준다.
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
