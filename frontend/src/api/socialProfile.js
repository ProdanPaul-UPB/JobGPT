import {post, get, put} from "./utils/requests";
import {loggedInHeaders} from "./utils/api";

export const getAllSocialProfiles = async (params) => {
    try {
        const url = '/social-profiles';

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getSocialProfile = async (params) => {
    try {
        const url = `/social-profiles/${params.id}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const createSocialProfile = async (params) => {
    try {
        const url = '/social-profiles';

        const data = await (await post(url, params.data, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const updateSocialProfile = async (params) => {
    try {
        const url = `/social-profiles/`;

        const data = await (await put(url, params.data, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};
