import React, {useState} from "react";
import {Col, Row, Table} from "react-bootstrap";
import BookList  from "./BookList";

const BookHome = () => {
    const myTitle = "Books For Sale!";

    const [books, setBooks] = useState([
        { title : "The FellowShip of the Ring", desc: "The first of the LOTR Trilogy", author: "Tolkien", id: 0 },
        { title : "The Two Towers", desc : "The second of the LOTR Trilogy", author: "Tolkien", id: 1 },
        { title : "The Return of the King", desc: "The Final Book  of the LOTR Trilogy", author: "Tolkien", id: 2 }
    ])
    const handleDelete =(id) => {
        const newBooks = books.filter( b => b.id !== id);
        setBooks(newBooks);
    }
    return(
        <Col>
            <Row>
               <BookList books={books} myTitle={myTitle} handleDelete={handleDelete}/>
            </Row>
        </Col>
    )
}
export default BookHome;