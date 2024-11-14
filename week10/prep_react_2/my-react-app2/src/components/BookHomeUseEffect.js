import React, {useState, useEffect} from "react";
import {Col, Row, Table} from "react-bootstrap";
import BookList  from "./BookList";

const BookHomeUseEffect = () => {
    const myTitle = "Books For Sale!";

    const [books, setBooks] = useState(null );
    // const [books, setBooks] = useState([
    //     { title : "The FellowShip of the Ring", desc: "The first of the LOTR Trilogy", author: "Tolkien", id: 0 },
    //     { title : "The Two Towers", desc : "The second of the LOTR Trilogy", author: "Tolkien", id: 1 },
    //     { title : "The Return of the King", desc: "The Final Book  of the LOTR Trilogy", author: "Tolkien", id: 2 }
    // ])
    const handleDelete =(id) => {
        const newBooks = books.filter( b => b.id !== id);
        setBooks(newBooks);
    }
    useEffect( () => {
        let url = "http://localhost:8000/books";
        fetch( url )
            .then( resp => {
                return resp.json()
            }).then( data => {
                setBooks(data);
            }
        )
    }, [])
    return(
        <Col>
            <Row>
                {books &&  <BookList books={books} myTitle={myTitle} handleDelete={handleDelete}/>}
            </Row>
        </Col>
    )
}
export default BookHomeUseEffect;