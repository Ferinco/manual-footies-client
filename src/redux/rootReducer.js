import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/users"
import storeReducer from "./slices/stores"
const rootReducer = combineReducers({
    user : userReducer,
    stores: storeReducer
})
export {rootReducer}