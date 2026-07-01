// [LOG: 20260701_1747]
import { useState } from 'react'
import './App.css'
import TodoBoard from './component/TodoBoard'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() === '') return;
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  };

  const deleteItem = (indexToDelete) => {
    const updatedList = todoList.filter((item, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  return (
    <div className="app-container">
      <input 
        type="text" 
        value={inputValue} 
        onChange={onChange} 
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} onDelete={deleteItem} />
    </div>
  );
}

export default App;
