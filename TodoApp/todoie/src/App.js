import React from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import CounterComponent from './components/CounterComponent';
import './style.css';


function App() {
  return (
    <div className='todo-container'>
      <CounterComponent />
      <Header title="Todo App" />
      <TodoItem text="EAT" completed={true} />
      <TodoItem text="MET" />
      <Button />
    </div>
  )
}

export default App;
