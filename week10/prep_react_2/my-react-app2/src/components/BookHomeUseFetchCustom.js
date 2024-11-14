import React, {useState, useEffect} from "react";
import {Col, Row, Table} from "react-bootstrap";
import BookListUseFetch  from "./BookListUseFetch";
import useFetch from "./useFetch";

const BookHomeUseFetchCustom = () => {
    const myTitle = "Books For Sale!";
    const url = "http://localhost:8000/books";
    const {data: books, isPending, error} = useFetch(url);
    // const handleDelete = (id) => {
    //     const newBooks = books.filter(b => b.id !== id);
        // setBooks(newBooks);
        return (
            <Col>
                <Row>
                    {error && <div> Error: {error} </div>}
                    {isPending && <div> Loading ....</div>}
                    {books && <BookListUseFetch books={books} myTitle={myTitle}/>}
                    <div> Testing </div>
                </Row>
            </Col>
        )
    // }
}
export default BookHomeUseFetchCustom;
