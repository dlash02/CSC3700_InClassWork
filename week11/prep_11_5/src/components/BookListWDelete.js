import React from 'react';
import {Link, useNavigate} from "react-router-dom";
function BookListWDelete( {books, handleDelete, title}) {
    // const books = props.books;
    // const handleDelete = props.handleDelete;
    // const title = props.title;
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/create');
    };
    const handleDeleteButtonClick = (id) => {
        // Instead of calling delete ... fetch and navidate
        // navigate(`/delete/${id}`);
        let URL = "http://localhost:3333/books/" + id;
        console.log("url=" + URL);
        fetch( URL , {
            method: "DELETE",
        }).then(() => {
            navigate(`/delete/`+ id);
        })
    };
    return (
        <div>
            <h2> {title} </h2>
            <table className="table-bordered">
                <thead>
                <tr>
                    <th> Title</th>
                    <th> Author</th>
                    <th> Description</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td> {book.title}</td>
                        <td> {book.author}</td>
                        <td> {book.desc}</td>
                        <td>
                            {/*<Link to={`/books/${book.id}`}>Show{book.title}</Link>*/}
                            <button type="button" className="btn btn-primary"
                                onClick={() => handleDeleteButtonClick(book.id)}>
                                Delete {book.id}
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
                Add Book
                </button>
        </div>
);
}
export default BookListWDelete;