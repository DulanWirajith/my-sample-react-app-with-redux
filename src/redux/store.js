import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { rootReducer } from "./rootReducers";

const store = createStore(rootReducer);

export default store;
