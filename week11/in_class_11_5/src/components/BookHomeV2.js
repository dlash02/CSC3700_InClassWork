import React, {useEffect, useState} from 'react';
import BookList from "./BookList";

function BookHome(props) {
    const [books, setBooks] = useState([]);
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let url = "http://localhost:3333/books";
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    setLoading(false);
                    if ( !response.ok ){
                        throw Error("Cannot Fetch url=" +url );
                    }
                    return response.json();
                }).then(
                data => {
                    setBooks(data);
                }
            ).catch(error => {
                setError(true);

                console.log(error.message);
            })
        }, 2000)
        console.log("It is running:" + counter);
    }, [])
    const handleDelete = (id) => {
        const newBooks = books.filter((book) => book.id != id)
        setBooks(newBooks)
    }
    return (
        <div>
            { error && <div> Error on Load {error}</div> }
            { loading && <div> Loading .... </div> }
            <BookList books={books} handleDelete={handleDelete}
                      title="All Time Best Sellers"/>
            <button className="btn btn-primary"
                    onClick={() => setCounter(counter + 1)}>
                Counter:{counter}</button>
        </div>
    );
}

export default BookHome;