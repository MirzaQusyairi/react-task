import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import styles from './Styles.module.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  deleteTodo = (id) => {
    const todos = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: todos });
  };

  addTodo = (newTodo) => {
    const todo = { id: uuidv4(), ...newTodo };
    this.setState({ data: [...this.state.data, todo] });
  };

  checkTodo = (id) => {
    const todos = this.state.data.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    this.setState({ data: todos });
  };

  uncheckTodo = (id) => {
    const todos = this.state.data.map((todo) => {
      if (todo.id === id) {
        todo.completed = false;
      }
      return todo;
    });
    this.setState({ data: todos });
  };

  render() {
    return (
      <div>
        <div className={styles.HomeBoxTitle}>
          <h1 className={styles.HomeTitle}>todos</h1>
        </div>
        <TodoInput addTodo={this.addTodo} />
        <TodoList
          data={this.state.data}
          deleteTodo={this.deleteTodo}
          checkTodo={this.checkTodo}
          uncheckTodo={this.uncheckTodo}
        />
      </div>
    );
  }
}

export default Home
