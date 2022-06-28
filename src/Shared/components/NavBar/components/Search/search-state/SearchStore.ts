import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./SearchReducer";
import { SearchResult } from "./model/SearchResult";

export interface SearchStore {
    searching: boolean;
    results: SearchResult[]
}


//export const store  = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export const store = configureStore({
    reducer, 
    devTools: true, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})