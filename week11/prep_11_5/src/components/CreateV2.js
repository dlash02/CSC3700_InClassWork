import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
function CreateV2(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const book = {title, author, price, description}
        console.log( 'book='); console.log( book );
        const URL = "http://localhost:3333/books";
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book)
        })
            .then((response) => response.json())
            .then((data) => {

            // navigate('/');                // Add any success handling logic
                navigate('/', { state: { message: 'Form submitted successfully!' } });
            })
            .catch((error) => {
                console.error('Error:', error);
                // Add any error handling logic
            });
    }
    return (
        <div>
            <h2> Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title1"
                           placeholder="Enter Title" value={title} onChange={handleTitleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author1"
                           placeholder="Enter Author"
                           value={author} onChange={handleAuthorChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Description</label>
                    <input type="text" className="form-control" id="description1"
                           value={description} onChange={handleDescriptionChange}
                           placeholder="Enter Description"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <select className="form-control" id="price1"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}>
                        <option value='9.99'> 9.99</option>
                        <option value='10.99'> 10.99</option>
                        <option value='11.99'> 11.99</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <ol>
                <li> Title:{title}</li>
                <li> Author:{author}</li>
                <li> Price:{price}</li>
                <li> Description:{description}</li>
            </ol>
        </div>
    );
}

export default CreateV2;