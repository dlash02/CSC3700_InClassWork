import {Col, Row} from "react-bootstrap";
import {useState, useEffect} from "react";
import BookList from "./BookList";
import {Button} from "bootstrap-react";

function Books () {
    const[ books, setBooks ] = useState( null );

    const handleDelete = ( id ) => {
        const newBooks = books.filter( b => b.id != id );
        setBooks( newBooks );
    }
    useEffect( () => {
        let url = " http://localhost:8000/books";
        fetch( url )
            .then(resp => {
                return resp.json()
            }).
            then(data => {
                console.log( data );
                setBooks( data );
            })

    }, [] );
    const myTitle = "Books 4 u 4 Sale!"
    const myTitle14 = " Books at 14.99"
    return (
        <Row>
            <Col sm={3}>
            </Col>
            <Col sm={3}>
                { books && <BookList books={books} title={myTitle} handleDelete={handleDelete} />}
            </Col></Row>
    )
}
export default Books;

