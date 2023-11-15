import React from 'react';
import Form from 'react-bootstrap/Form';

function Create(props) {
    return (
        <div>
            <h2> Add A New Book </h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" placeholder="Author" />
            </Form.Group>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="9.99"> 9.99</option>
                <option value="10.99"> 10.99</option>
                <option value="11.99"> 11.99</option>
            </Form.Select>
            <label> Price:</label>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </div>
    );
}

export default Create;