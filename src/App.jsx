import { useState } from 'react'

import Todo from './components/Todo.jsx';


export default function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
          <Todo />
      </div>
  )
}
