import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/users"
const rootReducer = combineReducers({
    users : userReducer
})
export {rootReducer}