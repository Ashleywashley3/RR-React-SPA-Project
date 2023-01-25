import { useState } from 'react'
import React from 'react'

//mock data to make sure it works
import data from './data.json'

import './App.css';

//imported components
import Header from './Header'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

function App() {
  const [ toDoList, setToDoList ] = useState(data)

//TOGGLE Function. when user clicks task i want to change the state of complete to true if its false or vise versa.
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task}
    })
    setToDoList(mapped)
  }

//FILTER method returns a new array so we aren't capable of changing the state
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  //adds tasks to the list
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
