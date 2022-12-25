import { useEffect, useState } from "react";

// This is a custom hook to be usable multiple of times
const useFetch = (url) => { // yes it's a function
    const [data, setBlogs] = useState(null); // use data word as general as I'll use it more in different code
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( _ => {
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
                setIsPending(false);
                setError(err.message);
            });
        }, 1000);
    }, []);

    return { data, isPending, error }; // returning an object to use destructuring and get vars 
}

export default useFetch;