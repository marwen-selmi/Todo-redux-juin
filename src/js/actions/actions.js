import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UNDO_TODO,
} from "../constants/actionType";

export const addTodo = (todo) => {
  return { type: ADD_TODO, todo };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

export const editTodo = (id, todoEdited) => {
  return { type: EDIT_TODO, id, todoEdited };
};

export const undoTodo = (id) => {
  return { type: UNDO_TODO, id };
};
