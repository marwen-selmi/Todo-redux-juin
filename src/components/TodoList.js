import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state };
};

export default connect(mapStateToProps)(TodoList);
