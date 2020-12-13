import { Country } from "./reducer"
import { combineReducers } from "redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";



 export const rootReducer = combineReducers({
   Country
})
  
export const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunk))
);

export type AppState = ReturnType<typeof rootReducer>