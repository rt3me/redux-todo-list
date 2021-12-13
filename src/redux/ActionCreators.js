import * as ActionTypes from "./ActionTypes";

export const addTodo = (todo) => (dispatch) => {
  console.log("addTodo called");
  const newTodo = {
    activity: todo,
    complete: false,
  };
  dispatch(createTask(newTodo));
};

const createTask = (todo) => ({
  // Task: Change this object to a redux action.
  type: ActionTypes.ADD_TODO,
  payload: todo,
});

export const toggleToDo = (id) => ({
  type: ActionTypes.TOGGLE_COMPLETE,
  payload: id,
});

export const clearAllTasks = () => ({
  type: ActionTypes.CLEAR_TASKS,
});

export const deleteAllTasks = () => ({
  // Task: Create an object to dispatch. use an object in this file as an example
  type: ActionTypes.DELETE_TASKS,
});

export const deleteSingleTask = (id) => ({
  type: ActionTypes.DELETE_SINGLE_TASK,
  payload: id,
});
