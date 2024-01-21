import styles from '../css/todoitem.module.css';


export default function TodoItem({ item, todos, setTodos }) {

    function handleDeleteClick(item) {
        setTodos(todos.filter(todo => todo !== item));
    }

    return (
        <div className={styles.itemContainer}>
            <div className={styles.item} key={item}>{item}</div>
            <button onClick={() => handleDeleteClick(item)} className={styles.deleteBtn}>X</button>
        </div>
    );
}
