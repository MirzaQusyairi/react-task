import styles from './TodoList.module.css'

export default function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <div className={styles.todoItem} key={todo.id.toString()} style={todo.completed ? { textDecoration: "line-through" } : null}>
          {todo.title}
        </div>
      ))}
    </>
  )
}
