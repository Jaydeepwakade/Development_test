import { applyMiddleware, combineReducers, createStore } from "redux";
import { Reducer } from "./reducer";
import { thunk } from "redux-thunk";



const rootreducer = combineReducers({
    data:Reducer
})
 export const store = createStore(
    rootreducer,
    applyMiddleware(thunk)
)