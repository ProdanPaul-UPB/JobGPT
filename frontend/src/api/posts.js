import {post, get, put} from "./utils/requests";
import {loggedInHeaders} from "./utils/api";

export const getAllPosts = async (params) => {
    try {
        const url = '/posts';

        const data = await (await get(url)).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getPost = async (params) => {
    try {
        const url = `/posts/${params.args.id}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const createPost = async (params) => {
    try {
        const url = '/posts';

        const data = await (await post(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const updatePost = async (params) => {
    try {
        const url = `/posts`;

        const data = await (await put(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;
    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};
