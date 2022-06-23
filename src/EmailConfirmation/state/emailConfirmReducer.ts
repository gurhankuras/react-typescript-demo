import { EmailConfirmationFailedResult, EmailConfirmationSucceededResult } from "../EmailConfirmationResult";
import EmailAction, { EmailConfirmationActionTypes } from "./EmailActionTypes";
import { EmailConfirmationStore, initialState } from "./store";

const reducer = (state: EmailConfirmationStore = initialState, 
                action: EmailAction): EmailConfirmationStore => {
    switch (action.type) {
        case EmailConfirmationActionTypes.confirm:
            console.log("Girdi ama bir sey olmuyor")
            return {
                loading: false,
                result: new EmailConfirmationSucceededResult()
            }
        case EmailConfirmationActionTypes.reject:
            return {
                ...state,
                result: new EmailConfirmationFailedResult(action.payload.message)
            }
        default:
            return state;
    }
}
export default reducer;