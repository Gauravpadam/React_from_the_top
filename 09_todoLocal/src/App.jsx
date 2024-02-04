import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo } , ...prev])
  }

  const updateTodo = (id , todo) => {
    setTodos((prev) => 
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((prevTodo) => prevTodo.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) =>
    // prevTodo.id === id ? {id: id, todo: prevTodo.todo, completed: !prevTodo.completed} : prevTodo)) // This is correct, but using spread operator works as well. Property defined again overwrites the existing property
    prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // Now the task is to locally store things
  // For this, we can use localStorage provided in Window API Object
  // This is not available in NextJS due to server side rendering

  // For getting values
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) // since localStorage stores in string format

    if (todos && todos.length > 0){
      setTodos(todos)
    } // todos.length is a safety check
  } , []) // No dependency as such

  // For setting values
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form to add the todos */}
              <TodoForm />
          </div>
          {/* Map through all the todos and pass to TodoItem for rendering */}
          <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className='w-full'>
              <TodoItem todo={todo} />
              </div>))}
          </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
