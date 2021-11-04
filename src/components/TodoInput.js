import { Component } from 'react'
import styles from './Styles.module.css'

class TodoInput extends Component {
  state = {
    title: "",
    completed: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = this.state.title === "";
    if (!isEmpty) {
      const newData = {
        title: this.state.title,
        completed: this.state.completed,
      };
      this.props.addTodo(newData);
      this.setState({
        title: "",
        completed: false,
      });
    } else {
      alert("Title can't be empty");
    }
  };

  render() {
    return (
      <div className={styles.TodoInputContainer}>
        <input
          type="text"
          placeholder="Add todo..."
          name="title"
          className={styles.TodoInputTextBox}
          value={this.state.title}
          onChange={this.onChange}
        />
        <button onClick={this.handleSubmit} className={styles.TodoInputButton}>
          Submit
        </button>
      </div>
    );
  }
}

export default TodoInput