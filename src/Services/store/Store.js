import { createStore } from "redux";
import rootReducer from "../Reducers/CombineReducers";
const store = createStore(rootReducer);

export default store;
