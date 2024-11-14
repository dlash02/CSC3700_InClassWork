import React, {useState} from "react";
import BookList from "./BookList";

const BookHomeV2 = () => {
    const myTitle = "Books For Sale!";

    const [books, setBooks] = useState([
        {   title : "The FellowShip of the Ring", desc: "The first of the LOTR Trilogy", author: "Tolkien", id: 0 },
        { title : "The Two Towers", desc : "The second of the LOTR Trilogy", author: "J. R. Tolkien", id: 1 },
        { title : "The Return of the King", desc: "The Final Book  of the LOTR Trilogy", author: "J. R. Tolkien", id: 2 }
    ])
    return(
                <div>
                        <BookList books={books} title={myTitle} />
                        <BookList books={books.filter((b ) => b.author == "Tolkien")} title={myTitle} />
                </div>
    )
}
export default BookHomeV2;