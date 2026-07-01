// [LOG: 20260701_1747]
import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <span>{props.item}</span>
      <button onClick={() => props.onDelete(props.index)}>삭제</button>
    </div>
  );
}

export default TodoItem;
