import React, {useEffect, useState} from 'react';
import BookList from "./BookList";

function BookHomeV2(props) {
    const [books, setBooks] = useState([
        {   title : "The FellowShip of the Ring", desc: "The first of the LOTR Trilogy", author: "Tolkien", id: 0 },
        { title : "The Two Towers", desc : "The second of the LOTR Trilogy", author: "Tolkien", id: 1 },
        { title : "The Return of the King", desc: "The Final Book  of the LOTR Trilogy", author: "Tolkien", id: 2 }
    ])
    const handleDelete = ( id ) => {
        const newBooks  = books.filter((book) => book.id != id)
        setBooks(newBooks)
    }
    const [ counter, setCounter] = useState(0);

    useEffect(() => {
        console.log( "Use Effect Is Running");
        console.log( books );
    }, [counter])
    return (
        <div>
            <BookList books={books} handleDelete={handleDelete}
                title="All Time Best Sellers" />
            <button className="btn btn-danger" onClick={ () => setCounter(counter + 1)}>
                    Counter:{counter}
                    </button>
        </div>
    );
}

export default BookHomeV2;