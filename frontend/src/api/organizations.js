import {post, get, put} from "./utils/requests";
import {loggedInHeaders} from "./utils/api";

export const getAllOrganizations = async (params) => {
    try {
        const url = '/organizations';

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getOrganization = async (params) => {
    try {
        const url = `/organizations/${params.args.id}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getOrganizationByUsername = async (params) => {
    try {
        const url = `/organizations/username/${params.username}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const createOrganization = async (params) => {
    try {
        const url = '/organizations';

        const data = await (await post(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const updateOrganization = async (params) => {
    try {
        const url = `/organizations`;

        const data = await (await put(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};