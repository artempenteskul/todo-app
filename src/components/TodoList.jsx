import TodoItem from './TodoItem.jsx';

import styles from '../css/todolist.module.css';


export default function TodoList({ todos }) {
    return (
        <div className={styles.todosContainer}>
            {todos.map(item => <TodoItem key={item} item={item} />)}
        </div>
    );
}
