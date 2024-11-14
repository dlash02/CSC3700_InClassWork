import React from 'react';
import {Button, Table} from "react-bootstrap";
// import {Link} from "react-router-dom";
// const BookList =  (props) =>  {
const BookListUseFetch =  ({books, myTitle, handleDelete}) =>  {
    // const books = props.books;
    return (
        <div>
            <h2>Title= {myTitle}</h2>
            <Table striped bordered hover className="text-center">
                <thead>
                <tr>
                    <th> Title</th>
                    <th> Author </th>
                    <th> Description  </th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((book) => (
                        <tr key={book.id}>
                            <td>
                                {book.title}
                            </td>
                            <td>
                                {book.author}
                            </td>
                            <td>
                                {book.desc}
                            </td>
                            {/*<td>*/}
                            {/*    <Button onClick={() => handleDelete(book.id)}> Delete {book.id}</Button>*/}
                            {/*    /!*<Link to={`/books/${book.id}`} > Details {book.id}</Link>*!/*/}
                            {/*</td>*/}
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    );
}
export default BookListUseFetch;