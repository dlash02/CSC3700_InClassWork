import React, {useState} from 'react';
// import Books from "./Books";
import {Button} from "bootstrap-react";
import {Col, Row, Table} from "react-bootstrap";
import BookList from "./BookList";

function Home3(props) {
    const myTitle = "My Book List"
    const [ books, setBooks ] = useState(
        [
            {id:1, title: "The Hobbit!", author: "J.R.Tolkien", price: 14.99},
            {id:2, title: "Dune", author: "F. Herbert", price: 13.99},
            {id:3, title: "I Robot", author: "I. Asimov", price: 14.99}
        ]
    )
    return (
        <div>
            <Row>
                <Col>
                    <h2> Books 4 U!</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    Books over there
                </Col>
                <Col sm={4}>
                   <BookList books={books} title={myTitle} blah='something'/>
                   <BookList books={books.filter( (b) => b.price ==14.99)} title="One Book to Rule them all"/>
                </Col>
            </Row>
        </div>
    );
}

export default Home3;