import TodoItem from './TodoItem.jsx';

import styles from '../css/todolist.module.css';


export default function TodoList({ todos, setTodos }) {
    return (
        <div className={styles.todosContainer}>
            {todos.map(item => <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />)}
        </div>
    );
}
