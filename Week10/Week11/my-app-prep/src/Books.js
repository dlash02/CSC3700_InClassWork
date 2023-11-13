import {Col, Row} from "react-bootstrap";
import {useState, useEffect} from "react";
import BookList from "./BookList";
import {Button} from "bootstrap-react";

function Books () {
    const[ books, setBooks ] = useState( null );
    const [error, setError ] = useState(  null );
    const handleDelete = ( id ) => {
        const newBooks = books.filter( b => b.id != id );
        setBooks( newBooks );
    }

    const [ isPending, setIsPending] = useState(true);
    useEffect( () => {
        let url = " http://localhost:8000/books";
        console.log("URL->" + url );
        setTimeout( () => {
            fetch( url )
                .then(resp => {
                    // console.log( `resp->`); console.log( resp );
                    if ( !resp.ok){
                        throw Error("Cannot fetch URL data for resource")
                    }
                    return resp.json()
                }).
            then(data => {
                setIsPending( false );
                console.log( data );
                setBooks( data );
                setError ( null );
            }).catch( (err) => {
                console.log("Error:"); console.log(err.message);
                setIsPending( false );
                setError( err.message);
            })
        }, 2000)

    }, [] );
    const myTitle = "Books 4 u 4 Sale!"
    const myTitle14 = " Books at 14.99"
    return (
        <Row>
            <Col sm={3}>
            </Col>
            <Col sm={3}>
                { error && <div> Error: {error} </div> }
                {isPending && <div> Loading ...</div>}
                { books && <BookList books={books} title={myTitle} handleDelete={handleDelete} />}
            </Col></Row>
    )
}
export default Books;

