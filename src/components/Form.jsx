import {useState} from 'react';
import { v4 as uuidV4 } from 'uuid';

import styles from '../css/form.module.css';

const generateUUID = function () {
    return uuidV4();
}


export default function Form({ todos, setTodos }) {

    const [todo, setTodo] = useState({id: generateUUID(), name: '', isDone: false});

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({id: generateUUID(), name: '', isDone: false});
    }

    function handleSetTodo(e) {
        setTodo(prevState => {
            return {...prevState, name: e.target.value};
        })
    }

    return (
        <form className={styles.todoForm} onSubmit={handleSubmit}>
            <input className={styles.todoFormInput} onChange={e => handleSetTodo(e)} placeholder="Enter todo item..." value={todo.name} type="text"/>
            <button className={styles.todoFormBtn} type="submit">Add to list</button>
        </form>
    );
}
