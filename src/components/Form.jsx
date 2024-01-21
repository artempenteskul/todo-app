import {useState} from 'react';

import styles from '../css/form.module.css';


export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]); // spread operator ... copies all previous items
        setTodo('');
    }

    return (
        <form className={styles.todoForm} onSubmit={handleSubmit}>
            <input className={styles.todoFormInput} onChange={e => setTodo(e.target.value)} placeholder="Enter todo item..." value={todo} type="text"/>
            <button className={styles.todoFormBtn} type="submit">Add to list</button>
        </form>
    );
}
