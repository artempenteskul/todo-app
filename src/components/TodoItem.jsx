export default function TodoItem({ item }) {
    return (
        <h3 key={item}>{item}</h3>
    );
}