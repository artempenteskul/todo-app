import { useState } from 'react';


export default function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]); // spread operator ... copies all previous items
        setTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setTodo(e.target.value)} value={todo} type="text"/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}