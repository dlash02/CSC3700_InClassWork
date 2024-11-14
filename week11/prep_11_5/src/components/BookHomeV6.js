import React, {useEffect, useState} from "react";
import BookList from "./BookList";

const BookHomeV6 = () => {
    const myTitle = "Books For Sale!";

    const [books, setBooks] = useState([]); // Initialize as an empty array
    const [error, setError] = useState(null); // Initialize as an empty array
    const handleDelete = (id) => {
        const newBooks = books.filter((book) => book.id !== id);
        setBooks(newBooks);
    }

    const [ isPending, setIsPending] = useState(true);
    useEffect(() => {
        let url = "http://localhost:3333/books";
        setTimeout(() => {
            fetch(url)
                .then(resp => {
                    if ( !resp.ok ){
                        throw Error("Cannot Fetch url=" +url );
                    }
                    return resp.json();
                }).then(
                data => {
                    setIsPending(false);
                    setBooks(data);
                    console.log(data);
                }).catch( error => {
                    console.log("Fetch Errors");
                    setIsPending(false);
                    setError( error.message );
                    console.log(error);
            })
        }, 2000)
        console.log("Use Effect Is Running");
        console.log(books);
    }, []);

    return(
                <div>
                    {error && <div> Error: {error}</div>}
                    {isPending && <div> Loading...</div>}
                    {books &&
                        <BookList books={books} title={myTitle}
                                    handleDelete={handleDelete} />
                    }
                </div>
    )
}
export default BookHomeV6;