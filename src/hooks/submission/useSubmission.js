import { post } from "../../services/api";

export const goUpSubmissionApi = async (data) => {
    try {
        const params = {
            data
        }
        return await post(process.env.REACT_APP_SUBMISSION_ENDPOINT || '', params);
    } catch {
        console.error()
    }
};