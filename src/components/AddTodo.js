import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../js/actions/actions";

class AddTodo extends React.Component {
  state = {
    inputContent: "",
  };
  handelChange = (e) => {
    this.setState({
      inputContent: e.target.value,
    });
  };
  render() {
    return (
      <div className="add-todo">
        <div className="add-todo-h1">
          <h1>Daily Todo Lists</h1>
        </div>
        <div className="add-todo-input-button">
          <input
            placeholder="Please enter a text"
            value={this.state.inputContent}
            onChange={this.handelChange}
          />
          <button
            onClick={() => {
              if (this.state.inputContent) {
                this.props.addTodo({
                  text: this.state.inputContent,
                  id: Math.random(),
                  isComplete: false,
                });
                this.setState({ inputContent: "" });
              } else {
                alert("Please enter a text");
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { addTodo: (todo) => dispatch(addTodo(todo)) };
};

export default connect(null, mapDispatchToProps)(AddTodo);
