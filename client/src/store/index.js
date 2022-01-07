import { createStore, combineReducers } from "redux";

import thoughtsReducer from "./reducers/thoughtsReducer";

const reducers = combineReducers({ thoughtsReducer });
const store = createStore(reducers);
export default store;
