export const state = () => ({ tasks: [] });
export const mutations = {
  ADD_TASK(state, task) {
    state.task = [{ content: "task", done: "false" }, ...state.tasks];
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
    
  },
};
export const getters = {};
export const actions = {};
