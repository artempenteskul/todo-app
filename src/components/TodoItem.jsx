import styles from '../css/todoitem.module.css';


export default function TodoItem({ item }) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.item} key={item}>{item}</div>
            <button className={styles.deleteBtn}>X</button>
        </div>
    );
}
