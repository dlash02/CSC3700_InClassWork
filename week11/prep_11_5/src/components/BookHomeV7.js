import React, { useState} from "react";
import BookList from "./BookList";
import useFetch from "./useFetch";

const BookHomeV7 = () => {
    const { data : books, isPending, error } = useFetch("http://localhost:3333/books/");
    let title = "My Book List";

    return(

            <div className="row">
                {error && <div> { error } </div>}
                {books.length > 0 &&  <BookList books={books} myTitle={title}  />}
                { isPending && <div> Loading ... </div>}
            </div>

    )
}
export default BookHomeV7;