import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as searchReducer } from "./search-state/SearchReducer";
import { reducer as trendsReducer } from "./state/TrendingReducer";
import thunk from "redux-thunk";
import { TrendingStore } from "./state/TrendingStore";
import { SearchStore } from "./search-state/SearchStore";

export const reducers = combineReducers({trends: trendsReducer, search: searchReducer });
export const store = configureStore({
    reducer: reducers, 
    devTools: true, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type AppStore = typeof store & {trends: TrendingStore, search: SearchStore}; 
