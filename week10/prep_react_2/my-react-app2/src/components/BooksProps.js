import Table from 'react-bootstrap/Table';
const BooksProps = () => {
    const [books,setBooks] = {

    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th> Title</th>
                    <th> Price</th>
                    <th> Description</th>
                </tr>
            </thead>
            <tr>
                <td> The Fellowship of the Ring</td>
                <td> 12.99</td>
                <td> The first of the great series</td>
            </tr>
            <tr>
                <td> The Two Towers</td>
                <td> 11.99</td>
                <td> The second of the great series</td>
            </tr>
        </Table>
    )
}
export default BooksProps;