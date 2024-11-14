import { Col, Row} from "react-bootstrap";
import BookList from "./BookList";
import useFetch from "./useFetch";


const HomeBook4 = () => {
    const { data : books, isPending, error } = useFetch("http://localhost:3012/books/book");
    let title = "My Book List";

    return(
        <Col>
            <Row>
                {error && <div> { error } </div>}
                {books.length > 0 &&  <BookList books={books} myTitle={title}  />}
                { isPending && <div> Loading ... </div>}
            </Row>
        </Col>
    )
}
export default HomeBook4;