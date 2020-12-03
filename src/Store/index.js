import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import expenseReducer from "./Slices/Expense";
const reducer = combineReducers({
  expenseReducer,
  // here we will be adding reducers
});
const store = configureStore({
  reducer,
});
export default store;
