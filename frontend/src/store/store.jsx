import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,  // Register userReducer under 'user'
});

const store = createStore(rootReducer);

export default store;
