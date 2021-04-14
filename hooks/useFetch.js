import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [urlData, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Couldn't fetch the data for that resource!");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                    setLoading(false);
                    setData(null);
                }
            });
        return () => abortCont.abort();
    }, [url]);

    return { urlData, loading, error };
};

export default useFetch;
