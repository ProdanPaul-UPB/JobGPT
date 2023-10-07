import {getAuthFromStorage} from "../../utils/storage";

export const apiEndpoint = "http://localhost:5000/api/v1";

export const loggedInHeaders = () => {
    const authData = getAuthFromStorage();

    return {
        "Content-Type": "application/json", "Authorization": `  Bearer ${authData || ""}`,
    };
};

export const defaultHeaders = {
    "Content-Type": "application/json",
};
