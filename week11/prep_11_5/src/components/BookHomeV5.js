import React, {useEffect, useState} from "react";
import BookList from "./BookList";

const BookHomeV5 = () => {
    const myTitle = "Books For Sale!";

    const [books, setBooks] = useState([]); // Initialize as an empty array
    const handleDelete = (id) => {
        const newBooks = books.filter((book) => book.id !== id);
        setBooks(newBooks);
    }


    useEffect(() => {
        let url = "http://localhost:3333/books";
        setTimeout(() => {
            fetch(url)
                .then(resp => {
                    return resp.json();
                }).then(
                data => {
                    console.log(data);
                    setBooks(data);
                }).catch( error => {
                    console.log("Fetch Errors");
                    console.log(error);
            })
        }, 2000)
        console.log("Use Effect Is Running");
        console.log(books);
    }, []);

    return(
                <div>
                        <BookList books={books} title={myTitle}
                                    handleDelete={handleDelete} />
                </div>
    )
}
export default BookHomeV5;