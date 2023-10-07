import axios from "axios";
import {apiEndpoint, defaultHeaders} from "./api";

export const get = async (url, headers = defaultHeaders) => {
    return axios({
        url: `${apiEndpoint}${url}`, method: "GET", headers: headers,
    });
};

export const post = async (url, data = {}, headers = defaultHeaders) => {
    return axios({
        url: `${apiEndpoint}${url}`, method: "POST", headers: headers, data: data,
    });
};

export const put = async (url, data = {}, headers = defaultHeaders) => {
    return axios({
        url: `${apiEndpoint}${url}`, method: "PUT", headers: headers, data: data,
    });
};

export const del = async (url, headers = defaultHeaders) => {
    return axios({
        url: `${apiEndpoint}${url}`, method: "DELETE", headers: headers,
    });
};
