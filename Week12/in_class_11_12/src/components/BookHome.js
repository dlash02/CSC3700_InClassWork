import React, {useState} from 'react';
import BookList from "./BookList";

function BookHome(props) {
    const [books, setBooks] = useState([
        {   title : "The FellowShip of the Ring", desc: "The first of the LOTR Trilogy", author: "Tolkien", id: 0 },
        { title : "The Two Towers", desc : "The second of the LOTR Trilogy", author: "Tolkien", id: 1 },
        { title : "The Return of the King", desc: "The Final Book  of the LOTR Trilogy", author: "Tolkien", id: 2 }
    ])
    const handleDelete = ( id ) => {
        const newBooks  = books.filter((book) => book.id != id)
        setBooks(newBooks)
    }
    return (
        <div>
            <BookList books={books} handleDelete={handleDelete}
                title="All Time Best Sellers" />
        </div>
    );
}

export default BookHome;