import {useState} from 'react';

import Form from './Form.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';


export default function Todo() {
    const [todos, setTodos] = useState([]);
    const doneTodos = todos.filter(todo => todo.isDone).length;
    const totalTodos = todos.length;

    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
            <Footer doneTodos={doneTodos} totalTodos={totalTodos} />
        </div>
    );
}