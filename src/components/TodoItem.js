import styles from './Styles.module.css';

export default function TodoItem({ item, deleteTodo, checkTodo, uncheckTodo }) {
  return (
    <tr className={styles.TodoItemRow}>
      <td>
        <input
          defaultChecked={item.completed ? true : false}
          type="checkbox"
          onClick={
            item.completed
              ? () => uncheckTodo(item.id)
              : () => checkTodo(item.id)
          }
        />
      </td>
      <td
        style={{ width: "290px", paddingLeft: "5px" }}
        className={item.completed ? styles.TodoItemCompleted : ""}
      >
        {item.title}
      </td>
      <td className={styles.TodoItemContent}>
        <button className={styles.TodoItemButton} onClick={() => deleteTodo(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}