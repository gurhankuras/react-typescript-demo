import axios, { AxiosError } from "axios";
import { EmailConfirmError } from "../error/EmailConfirmError";

export class EmailConfirmAPIService {
    static async confirmEmail({token, userId}: {token: string, userId: string}): Promise<void> {
        try {
            const response = await axios.get(`http://localhost:5100/account/email/verify`, {
                params: {
                    token: token,
                    userId: userId
                }
            });
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error)) {
                const statusCode = error.response?.status;
                if (statusCode === 400) {
                    throw new EmailConfirmError("Invalid URL")
                } else if (statusCode === 404) {
                    throw new EmailConfirmError("User not exists")
                }
            }
            throw new Error("An unknown error occured");
        }
    }
}