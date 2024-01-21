import styles from '../css/todoitem.module.css';


export default function TodoItem({ item, todos, setTodos }) {

    function handleDeleteClick(item) {
        setTodos(todos.filter(todo => todo.id !== item.id));
    }

    function handleChangeStatusClick(item) {
        const newTodos = todos.map(todo => {
            if (todo.id === item.id) {
                return {...todo, isDone: !item.isDone}
            } else {
                return todo
            }
        })

        setTodos(newTodos);
    }

    return (
        <div className={styles.itemContainer}>
            <div className={item.isDone ? styles.itemDone : styles.item} key={item.id} onClick={() => handleChangeStatusClick(item)}>
                <span>{item.name}</span>
            </div>
            <button onClick={() => handleDeleteClick(item)} className={styles.deleteBtn}>X</button>
        </div>
    );
}
