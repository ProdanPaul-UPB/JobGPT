import {post, get, put} from "./utils/requests";
import {loggedInHeaders} from "./utils/api";

export const getAllBroadcasts = async (params) => {
    try {
        const url = '/broadcasts';

        const data = await (await get(url)).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getBroadcast = async (params) => {
    try {
        const url = `/broadcasts/${params.args.id}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const createBroadcast = async (params) => {
    try {
        const url = '/broadcasts';

        const data = await (await post(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const updateBroadcast = async (params) => {
    try {
        const url = `/broadcasts`;

        const data = await (await put(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};
