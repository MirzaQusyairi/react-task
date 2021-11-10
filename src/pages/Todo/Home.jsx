// import { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import styles from './Styles.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.HomeBoxTitle}>
        <h1 className={styles.HomeTitle}>todos</h1>
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
}