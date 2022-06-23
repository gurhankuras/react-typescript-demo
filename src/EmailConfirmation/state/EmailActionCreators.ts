import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios, { AxiosError } from "axios";
import { EmailConfirmAPIService } from "../services/emailService";
import EmailAction, { EmailConfirmationActionTypes } from "./EmailActionTypes";
import { EmailRejectAction } from "./EmailActions";
import { EmailConfirmationStore } from "./store";

export const confirmEmail = (token: string, userId: string) => {
    return {
            type: EmailConfirmationActionTypes.confirm,
            payload: {
                token: token,
                userId: userId
            }
        }
}

export const rejectEmail = (message: string): EmailRejectAction => {
    return {
        type: EmailConfirmationActionTypes.reject,
        payload: {
            message: message
        }
    }
}

export const confirmEmailRemotely = (token: string, userId: string): ThunkAction<void, EmailConfirmationStore, unknown, EmailAction>  => 
    async (dispatch) => {
        try {
            await EmailConfirmAPIService.confirmEmail({token, userId})
            // @ts-ignore
            dispatch(confirmEmail(token, userId))
        } catch (error) {
            if (error instanceof Error) {
                dispatch(rejectEmail(error.message))
                return
            }
            dispatch(rejectEmail("Unknown error"))
        }
    };