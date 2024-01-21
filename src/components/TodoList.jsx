import TodoItem from './TodoItem.jsx';

import styles from '../css/todolist.module.css';


export default function TodoList({ todos, setTodos }) {
    const sortedTodos = todos.slice().sort((a, b) => Number(a.isDone) - Number(b.isDone));
    return (
        <div className={styles.todosContainer}>
            {sortedTodos.map(item => <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />)}
        </div>
    );
}
