import {Table} from "react-bootstrap";
import {Button} from "bootstrap-react";

// function BookList ( props ) {
function BookList ( {books, title, handleDelete}  ) {
    // const books = props.books;
    // const title = props.title;
    // console.log( props, books )
    console.log( books )
    return (
        <div>
            <h2> {title} </h2>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th> Title</th>
                <th> Author</th>
                <th> Price</th>
            </tr>
            </thead>
        <tbody>
            {books.map((book) => (
                    <tr key={book.id}>
                        <td> {book.title}</td>
                        <td> {book.author}</td>
                        <td> {book.price}</td>
                        <td>
                           <Button onClick={() => handleDelete(book.id)} > Delete {book.id}</Button>
                        </td>
                    </tr>
                )
            )}
        </tbody>
        </Table>
        </div>
    )
}
export default BookList;