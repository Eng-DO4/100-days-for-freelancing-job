import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( _ => {
        const abortCont = new AbortController();
        setTimeout( _ => {
            fetch(url)
            .then(res => {
                if (!res.ok) throw Error('Could not fetch the data for that resource');
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('abort');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        }, 1000);
        return abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;