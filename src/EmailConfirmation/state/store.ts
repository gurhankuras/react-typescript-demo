import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { EmailConfirmationResult } from "../EmailConfirmationResult";
import  reducers from './emailConfirmReducer';
export * as actionCreators from "./EmailActionCreators";

export type EmailConfirmationStore = {
    loading: boolean;
    result?: EmailConfirmationResult;
}

export const initialState: EmailConfirmationStore = {
    loading: true
};

export const store  = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;