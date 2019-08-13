import state from "./state";
import reducers from "./reducer";
import { createStore } from "redux";

let store = createStore(reducers, state);

export default store;
