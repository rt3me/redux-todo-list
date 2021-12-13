import * as ActionTypes from "./ActionTypes";

const initialState = {
  todo: [
    { activity: "First ToDo", complete: false, id: 0 },
    { activity: "Second ToDo", complete: true, id: 1 },
  ],
};

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Change the cases to match with the code
    case ActionTypes.ADD_TODO:
      const todo = action.payload;
      todo.id = state.todo.length;
      console.log("Creating todo with id:", todo.id);
      return { ...state, todo: state.todo.concat(todo) };
    case ActionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo];
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete;
      return { ...state, todo: updatedTodo };
    case ActionTypes.CLEAR_TASKS:
      return { ...state, todo: state.todo.filter((task) => !task.complete) };
    case ActionTypes.DELETE_TASKS:
      // TASK implement the final action type
      return { ...state, todo: [] };
    case ActionTypes.DELETE_SINGLE_TASK:
      console.log("Deleting single task with id of:", action.payload);
      return { ...state, todo: state.todo.filter((task) => task.id !== action.payload) };
    default:
      return state;
  }
};
