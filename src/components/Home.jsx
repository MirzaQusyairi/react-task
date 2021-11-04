import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import styles from './Styles.module.css'

export default function Home() {
  const [state, setState] = useState({
    data: [
      {
        id: 1,
        title: "Mengerjakan Exercise",
        completed: true,
      },
      {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false,
      },
    ],
  });

  const deleteTodo = (id) => {
    const todos = state.data.filter((item) => item.id !== id);
    setState({ data: todos });
  };

  const addTodo = (newTodo) => {
    const todo = { id: uuidv4(), ...newTodo };
    setState({ data: [...state.data, todo] });
  };

  const checkTodo = (id) => {
    let todos;
    const todoTarget = state.data.filter((todo) => todo.id === id);
    if (todoTarget[0].completed) {
      todos = state.data.map((todo) => {
        if (todo.id === id) {
          todo.completed = false;
        }
        return todo;
      });
    } else {
      todos = state.data.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      });
    }
    setState({ data: todos });
  };

  return (
    <div>
      <div className={styles.HomeBoxTitle}>
        <h1 className={styles.HomeTitle}>todos</h1>
      </div>
      <TodoInput addTodo={addTodo} />
      <TodoList
        data={state.data}
        deleteTodo={deleteTodo}
        checkTodo={checkTodo}
      />
    </div>
  );
}
