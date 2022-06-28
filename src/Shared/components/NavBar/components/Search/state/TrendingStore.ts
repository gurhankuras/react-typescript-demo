import thunk from "redux-thunk";
import { reducer } from "./TrendingReducer";
import { configureStore } from "@reduxjs/toolkit";

export interface TrendingStore {
    loading: boolean;
    loaded: boolean;
    trendingTopics: number[]
}


//export const store  = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export const store = configureStore({
    reducer, 
    devTools: true, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type TrendsDispatch = ReturnType<typeof store.dispatch>