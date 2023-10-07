import post from "./utils/requests";
import {loggedInHeaders} from "./utils/api";

export const changePassword = async (params) => {
    try {
        const url = '/change-password';

        const data = await (await post(url, params.data, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const resetPassword = async (params) => {
    try {
        const url = `/reset-password/${params.code}`;

        const data = await (await post(url, params.data)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const resetPasswordConfirmation = async (params) => {
    try {
        const url = '/reset-password-confirmation';

        const data = await (await post(url, params.data)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};