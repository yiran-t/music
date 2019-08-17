import { createStore } from "redux";
// import state from "./state";
import reducers from "./reducers/userInfoReducer";
let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
