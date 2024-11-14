import React, {useEffect, useState} from "react";
import BookListV3 from "./BookListV3";

const BookHomeV4 = () => {
    const myTitle = "Books For Sale!";

    const [books, setBooks] = useState([]); // Initialize as an empty array
    const handleDelete = (id) => {
        const newBooks = books.filter((book) => book.id !== id);
        setBooks(newBooks);
    }


    useEffect(() => {
        let url = "http://localhost:3333/books";
        fetch( url )
            .then ( resp => {
                return resp.json();
            }).then(
                data => {
                    console.log( data );
                    setBooks( data );
                }
        )
        console.log( "Use Effect Is Running");
        console.log( books );
    }, [])
    return(
                <div>
                        <BookListV3 books={books} title={myTitle}
                                    handleDelete={handleDelete} />
                </div>
    )
}
export default BookHomeV4;