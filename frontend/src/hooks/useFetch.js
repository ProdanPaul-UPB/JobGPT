import {useEffect, useState} from 'react';

const useFetch = (req, args, onStart = false) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (params = undefined) => {
        setData(undefined);
        setLoading(true);
        setError(undefined);

        return await req({
            setData: setData, setLoading: setLoading, setError: setError, args: params ? params : args
        });
    };

    useEffect(() => {
        if (onStart) {
            sendRequest();
        }
    }, []);

    return {data, loading, error, sendRequest};
}

export default useFetch;