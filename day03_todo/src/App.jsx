import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './Component/Main'
import TodoList from './Component/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TodoList/>
    </div>
  )
}

export default App
