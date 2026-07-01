// [LOG: 20260701_1747]
import React from 'react';
import TodoItem from './TodoItem';

function TodoBoard(props) {
  return (
    <div>
      <h2>Todo List</h2>
      {props.todoList.map((item, index) => (
        <TodoItem 
          key={index} 
          item={item} 
          index={index} 
          onDelete={props.onDelete} 
        />
      ))}
    </div>
  );
}

export default TodoBoard;
