import {post, get, put} from "./utils/requests";
import {loggedInHeaders} from "./utils/api";

export const getAllStudents = async (params) => {
    try {
        const url = '/students';

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getStudent = async (params) => {
    try {
        const url = `/students/${params.args.id}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const getStudentByUsername = async (params) => {
    try {
        const url = `/students/username/${params.username}`;

        const data = await (await get(url)).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const createStudent = async (params) => {
    try {
        const url = '/students';

        const data = await (await post(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};

export const updateStudent = async (params) => {
    try {
        const url = `/students`;

        const data = await (await put(url, params.args, loggedInHeaders())).data;
        params.setData(data);
        return data;

    } catch (err) {
        params.setError(err);
    } finally {
        params.setLoading(false);
    }
};
