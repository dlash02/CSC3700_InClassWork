import React from 'react';

function BookList( {books, handleDelete, title}) {
    // const books = props.books;
    // const handleDelete = props.handleDelete;
    // const title = props.title;
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
                            <button className="btn btn-danger" onClick={() =>
                                handleDelete(book.id)
                            }>
                                Delete {book.id}
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BookList;