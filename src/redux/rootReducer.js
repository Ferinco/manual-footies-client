import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/users"
const rootReducer = combineReducers({
    user : userReducer
})
export {rootReducer}