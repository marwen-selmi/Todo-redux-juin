import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UNDO_TODO,
} from "../constants/actionType";

const initialState = [
  { text: "hello i m the first todo", id: Math.random(), isComplete: false },
];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id ? action.todoEdited : todo
      );
    case UNDO_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    default:
      return state;
  }
}
