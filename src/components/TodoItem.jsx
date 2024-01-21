import styles from '../css/todoitem.module.css';


export default function TodoItem({ item, todos, setTodos }) {

    function handleDeleteClick(item) {
        setTodos(todos.filter(todo => todo.id !== item.id));
    }

    return (
        <div className={styles.itemContainer}>
            <div className={styles.item} key={item.id}>{item.name}</div>
            <button onClick={() => handleDeleteClick(item)} className={styles.deleteBtn}>X</button>
        </div>
    );
}
