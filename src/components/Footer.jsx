import styles from '../css/footer.module.css';


export default function Footer({ doneTodos, totalTodos }) {
    return (
        <div className={styles.footer}>
            <span>Completed Todos: {doneTodos}</span>
            <span>Total Todos: {totalTodos}</span>
        </div>
    );
}
