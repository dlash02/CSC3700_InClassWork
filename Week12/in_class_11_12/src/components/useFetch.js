import {useEffect, useState} from "react";

const useFetch = ( URL ) => {
    const [data, setData] = useState([] );
    const [ isPending, setIsPending] = useState( true );
    const [error, setError] = useState( null );
    useEffect( () => {
        // run every re-render of DOM
        const abortCont = new AbortController();
        setTimeout(() => {
            // let URL = 'http://localhost:8000/books'

            fetch( URL, { signal : abortCont.signal} )
                .then(res => {
                    // console.log( res );
                    if ( !res.ok ){
                        throw Error(`Could Not Get Data for URL:${URL}`);
                    }
                    return res.json()
                }).then(data => {
                console.log("data ->");
                console.log(data);
                setData(data);
                setIsPending(false);
                setError( null );

            })
                .catch((err) => {
                    if ( err.name == "AbortError"){
                        console.log("Not showing abort error")
                    } else {
                        console.log("Error Network");
                        console.log(err);
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 2000 );
        return () => {
            console.log("Inside Clearnup ");
            abortCont.abort();
        }
    }, [ URL ] )
    return { data, isPending, error }
}

export default useFetch;