import React, { useState} from "react";
import BookListWDelete from "./BookListWDelete";
import useFetch from "./useFetch";
import { useLocation } from 'react-router-dom';

const BookHomeV8WDelete = () => {
    const { data : books, isPending, error } = useFetch("http://localhost:3333/books/");
    let title = "My Book List";
    const location = useLocation();
    const message = location.state?.message;
    return(

            <div className="row">
                {message && <div style={{ color: 'green' }}>{message}</div>}
                {error && <div> { error } </div>}
                {books.length > 0 &&  <BookListWDelete books={books} myTitle={title}  />}
                { isPending && <div> Loading ... </div>}
            </div>

    )
}
export default BookHomeV8WDelete;