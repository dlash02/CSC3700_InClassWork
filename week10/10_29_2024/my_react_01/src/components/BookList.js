import React from 'react';

function BookList(props) {
    const books = props.books;
    const title = props.title;
    console.log("Books="); console.log(books);
    console.log("title="); console.log(title);
    return (
        <div>
            <h3> Sub Title:{title}</h3>
            <table className="table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th> Title</th>
                    <th> Author</th>
                    <th> Description</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((book) => (
                        <tr key={book.id}>
                            <td> {book.title} </td>
                            <td> {book.author}</td>
                            <td> {book.desc}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default BookList;