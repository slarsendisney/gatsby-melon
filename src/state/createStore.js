import { createStore } from "redux";

function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case "count":
      return Object.assign({}, { counter: state.counter + 1 });
    default:
      return state;
  }
}
let store = createStore(reducer);
store.subscribe(() => {
  console.log("new state", store.getState());
});

export default store;
