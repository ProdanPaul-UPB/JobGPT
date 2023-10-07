import {get, put, del} from "./utils/requests";
import {loggedInHeaders} from "./utils/api";

export const getAllUsers = async (params) => {
    try {
        const url = '/users';

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getUser = async (params) => {
    try {
        const url = `/users/${params.username}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const updateMe = async (params) => {
    try {
        const url = `/users`;

        const data = await (await put(url, params.data, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const deleteMe = async (params) => {
    try {
        const url = `/users`;

        const data = await (await del(url, loggedInHeaders())).data;
        params.setData(data)
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};