import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid'
import './index.css'



const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function clearCompleteTodo() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }]
    })
    //console.log(name)
    todoNameRef.current.value = null
  }

  return (
    <main>
    <div className='mainArea'>
      <TodoList todos = {todos} className="TodoListItems" toggleTodo={toggleTodo}/>
      <input ref = {todoNameRef} type="text" className="InputField" placeholder='Enter your Task'/> <br/>
      <button onClick = {handleAddTodo} className="addButton">Add Item</button>
      <button className='clearButton' onClick= {clearCompleteTodo}> Clear Complete</button>
      <div className="progressTracker">{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
    </main>
    
  )
   
}

export default App;
