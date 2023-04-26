import { configureStore, combineReducers } from "@reduxjs/toolkit";
import hamburgerReducer from "./reducers/hamburgerSlice";

const rootReducer = combineReducers({ hamburger: hamburgerReducer });

export const store = configureStore({
  reducer: rootReducer,
});
