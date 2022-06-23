
export interface EmailConfirmationResult {
    verified: boolean;
    title: string;
    description: string;
}

export class EmailConfirmationFailedResult implements EmailConfirmationResult {
    verified: boolean = false;
    title: string = "Failed Verification";
    description: string = "We couldn't verificate your account. You may have used invalid link";

    constructor(message: string) {
        this.description = message
    }
}

export class EmailConfirmationSucceededResult implements EmailConfirmationResult {
    verified: boolean = true;
    title: string = "You have successfully verified the account."
    description: string = "Verified"
}