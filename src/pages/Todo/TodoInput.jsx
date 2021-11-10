import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from "../../store/todoSlice"
import styles from './Styles.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function TodoInput(props) {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    title: "",
    completed: false,
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = state.title === ""
    if (!isEmpty) {
      const newData = {
        title: state.title,
        completed: state.completed,
      };
      dispatch(addTodo(newData))
      setState({
        title: "",
        completed: false,
      });
    } else {
      // alert("Title can't be empty")
      toast.warn("Title can't be empty!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className={styles.TodoInputContainer}>
      <ToastContainer limit={1} />
      <input
        type="text"
        placeholder="Add todo..."
        name="title"
        className={styles.TodoInputTextBox}
        value={state.title}
        onChange={onChange}
      />
      <button onClick={handleSubmit} className={styles.TodoInputButton}>
        Submit
      </button>
    </div>
  );
}