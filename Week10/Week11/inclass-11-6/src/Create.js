import React, {useState} from 'react';
import * as PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';


function Create(props) {
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [price,setPrice] = useState(11.99 );
    const [description,setDescription] = useState("");
    const handleDescChange = (event) => {
        setDescription(event.target.value)
    }
    return (
        <div>
            <h2> Add A New Book </h2>
            <Form>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title"
                                  value={title}
                                  required
                                  onChange={ (e) => setTitle( e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title"
                                  required
                                  value={author}
                                  onChange={ (e) => setAuthor( e.target.value)}
                    />
                </Form.Group>
                <Form.Label>Price:</Form.Label>
                <Form.Select aria-label="Default select example"
                             value={price}
                             onChange={ (e) => setPrice( e.target.value)}
                >
                    <option value="10.99">10.99</option>
                    <option value="11.99">11.99</option>
                    <option value="12.99">12.99</option>
                </Form.Select>
                <Form.Group controlId='description'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        value={description} onChange={handleDescChange}
                    />
                </Form.Group>
            </Form>
            <ol>
                <li> Title: {title}</li>
                <li> Author: {author}</li>
                <li> Price: {price}</li>
                <li> Description {description}</li>
            </ol>
        </div>
    );
}

export default Create;