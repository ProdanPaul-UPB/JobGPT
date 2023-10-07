import {post} from "./utils/requests";

export const login = async (params) => {
    try {
        const url = '/auth/login';

        const data = await (await post(url, params.args)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const register = async (params) => {
    try {
        const url = '/auth/register';

        const data = await (await post(url, params.args)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const emailConfirmation = async (params) => {
    try {
        const url = '/auth/email-confirmation';

        const data = await (await post(url, params.data)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};
