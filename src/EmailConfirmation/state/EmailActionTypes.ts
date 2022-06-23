import { EmailConfirmAction, EmailRejectAction } from "./EmailActions";

export enum EmailConfirmationActionTypes {
    confirm = "confirm",
    reject = "reject"
}

type EmailAction = EmailConfirmAction | EmailRejectAction;
export default EmailAction;