import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo, undoTodo } from "../js/actions/actions";
import Modal from "react-modal";

class Todo extends React.Component {
  state = {
    modalIsopen: false,
    todoText: this.props.todo.text,
  };
  handelModal = () => {
    this.setState({
      modalIsopen: !this.state.modalIsopen,
    });
  };
  handelChange = (e) => {
    this.setState({
      todoText: e.target.value,
    });
  };
  render() {
    const todo = this.props.todo;
    const deleteTodo = this.props.deleteTodo;
    const editTodo = this.props.editTodo;
    const undoTodo = this.props.undoTodo;
    return (
      <div>
        <button onClick={() => undoTodo(todo.id)}>Undo</button>
        <span
          style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <button onClick={this.handelModal}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete </button>

        <Modal isOpen={this.state.modalIsopen}>
          <input value={this.state.todoText} onChange={this.handelChange} />
          <button
            onClick={() => {
              editTodo(todo.id, { ...todo, text: this.state.todoText });
              this.handelModal();
            }}
          >
            Edit Todo
          </button>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo: (id, todoEdited) => dispatch(editTodo(id, todoEdited)),
    undoTodo: (id) => dispatch(undoTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
