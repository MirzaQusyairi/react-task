import TodoList from './components/TodoList'
import styles from './TodoPage.module.css'

export default function TodoPage({ todos }) {
  return (
    <div className={styles.todoPage}>
      <div className={styles.header}>
        <h2>To Do App</h2>
      </div>
      <div className={styles.todoPageContent}>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}
