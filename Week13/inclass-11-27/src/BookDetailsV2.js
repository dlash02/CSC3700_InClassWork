import React from 'react';
import {Link,  useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import BookList from "./BookList";

function BookDetailsV2(props) {
    const {id} = useParams();
    let url = `http://localhost:8000/books/${id}` ;
    const {data : book, error, isPending} = useFetch( url );
    const history = useNavigate();
    const handleClick = () => {
        let URL = `http://localhost:8000/books/${book.id}`;
        fetch(URL , {
            method: 'DELETE',
        }).then(() => {
            history('/');
        })
    }
    const myTitle = "Book details are here"
    return (
        <div>
            <div>
                <h2> Book details v2</h2>
             { isPending  && <div> Loading </div>}
             { error  && <div> {error} </div>}
             { book && <BookList books={book} title={myTitle}/>}
                     <Link to="/"> Back Home again</Link>
                 </div>
        </div>
    );
}
export default BookDetailsV2;