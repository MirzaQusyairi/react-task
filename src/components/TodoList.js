import TodoItem from './TodoItem'
import styles from './Styles.module.css'

export default function TodoList(props) {
  const { data, deleteTodo, checkTodo, uncheckTodo } = props;
  return (
    <div className={styles.TodoListContainer}>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {data.map((todo) => (
            <TodoItem
              key={todo.id}
              item={todo}
              deleteTodo={deleteTodo}
              checkTodo={checkTodo}
              uncheckTodo={uncheckTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
