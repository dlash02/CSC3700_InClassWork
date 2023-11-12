import React, {useState} from 'react';
// import Books from "./Books";
import {Button} from "bootstrap-react";
import {Col, Row, Table} from "react-bootstrap";
import BookList from "./BookList";

function Home4(props) {
    const myTitle = "My Book List"
    const [ books, setBooks ] = useState(
        [
            {id:1, title: "The Hobbit There and back again", author: "J.R.Tolkien", price: 14.99},
            {id:2, title: "Dune", author: "F. Herbert", price: 13.99},
            {id:3, title: "I Robot", author: "I. Asimov", price: 14.99}
        ]
    )
    const handleDelete = (id) => {
        const newBooks = books.filter( b => b.id !== id )
        setBooks(newBooks);
    }
    return (
        <div>
            <Row>
                <Col>
                    <h2> Books 4 U!</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                    Books over there
                </Col>
                <Col >
                   <BookList  books={books} title={myTitle} handleDelete={handleDelete}/>
                </Col>
            </Row>
        </div>
    );
}

export default Home4;