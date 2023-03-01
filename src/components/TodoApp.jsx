import React from 'react'
import Header from './Header'
import Navbar from './Navbar';
import TodosLogic from './TodosLogic';

function TodoApp() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Navbar/>
        <Header />
        <TodosLogic />
      </div>
    </div>
  )
}

export default TodoApp