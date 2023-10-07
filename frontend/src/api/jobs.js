import {post, get, put} from "./utils/requests";
import {loggedInHeaders} from "./utils/api";

export const getAllJobs = async (params) => {
    try {
        const url = '/jobs';

        const data = await (await get(url)).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getJob = async (params) => {
    try {
        const url = `/jobs/${params.args.id}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const createJob = async (params) => {
    try {
        const url = '/jobs';

        const data = await (await post(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const updateJob = async (params) => {
    try {
        const url = `/jobs`;

        const data = await (await put(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};
