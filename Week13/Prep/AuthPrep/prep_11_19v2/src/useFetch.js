import { useEffect, useState } from "react";

const useFetch = (URL) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reset states when URL changes
        setData(null);
        setError(null);

        // Only fetch if URL exists
        if (!URL) {
            setIsPending(false);
            return;
        }

        // Set pending to true before fetch
        setIsPending(true);

        const abortCont = new AbortController();

        fetch(URL, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error(`Could Not Get Data for URL:${URL}`);
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    setError(err.message);
                    setIsPending(false);
                }
            });

        return () => abortCont.abort();
    }, [URL]);

    return { data, isPending, error };
};

export default useFetch;