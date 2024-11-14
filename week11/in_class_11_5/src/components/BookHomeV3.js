import React, {useEffect, useState} from 'react';
import BookList from "./BookList";
import useFetch  from "./useFetch";
import {useNavigate} from "react-router-dom";

function BookHomeV3(props) {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        // const newBooks = books.filter((book) => book.id != id)
        // setBooks(newBooks)
        navigate(`/books/${id}`);
    }
    let url = "http://localhost:3333/books";
    const { data : books, isPending, error} = useFetch(url);
    return (
        <div>
            { error && <div> Error on Load {error}</div> }
            { isPending && <div> Loading .... </div> }
            <BookList books={books} handleDelete={handleDelete}
                      title="All Time Best Sellers"/>

        </div>
    );
}

export default BookHomeV3;