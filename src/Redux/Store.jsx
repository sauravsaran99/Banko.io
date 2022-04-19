
import { navReducer } from "./Reducers/Nav";
import { createStore } from 'redux'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    nav: navReducer
})

export const store = createStore(rootReducer)