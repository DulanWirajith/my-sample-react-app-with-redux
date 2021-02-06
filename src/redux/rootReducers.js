import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";

// to add all reducers
export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
