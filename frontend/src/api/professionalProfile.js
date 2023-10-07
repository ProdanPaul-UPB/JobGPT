import {post, get, put} from "./utils/requests";
import {loggedInHeaders} from "./utils/api";

export const getAllProfessionalProfiles = async (params) => {
    try {
        const url = '/professional-profiles';

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getProfessionalProfile = async (params) => {
    try {
        const url = `/professional-profiles/${params.id}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const createProfessionalProfile = async (params) => {
    try {
        const url = '/professional-profiles';

        const data = await (await post(url, params.data, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const updateProfessionalProfile = async (params) => {
    try {
        const url = `/professional-profiles`;

        const data = await (await put(url, params.data, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};