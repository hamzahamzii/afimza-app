import { createStore, combineReducers } from "redux";

import thoughtsReducer from "./reducers/thoughtsReducer";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({ thoughtsReducer, userReducer });
const store = createStore(reducers);
export default store;
