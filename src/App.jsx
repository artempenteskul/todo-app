import { useState } from 'react'

import Header from './components/Header.jsx';
import Todo from './components/Todo.jsx';


export default function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
          <Header />
          <Todo />
      </div>
  )
}
