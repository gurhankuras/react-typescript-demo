import { EmailConfirmationActionTypes } from "./EmailActionTypes";

export interface EmailConfirmAction {
    type: EmailConfirmationActionTypes.confirm;
    payload: {
        token: string;
        userId: string;
    };
}

export interface EmailRejectAction {
    type: EmailConfirmationActionTypes.reject;
    payload: {
        message: string
    };
}
