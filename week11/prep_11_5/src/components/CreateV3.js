import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
function CreateV3(props) {
    const [formData, setFormData] = useState({ title: '', author: '', description: '', price: '' });
    const [errors, setErrors] = useState({});
    const handleFormChange = ( e ) => {
        const { name, value } = e.target;
        setFormData({...formData, [name] : value});
    }
    const navigate = useNavigate();
    const validate = () => {
        let newErrors = {};
        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.author) newErrors.author = 'Author is required';
        if (!formData.description) newErrors.description = 'Description is required';
        if (!formData.price) newErrors.price = 'Price is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // const book = {formData.title, formData.author, formData.price, formData.description}
        console.log( 'formData='); console.log( formData );
        const URL = "http://localhost:3333/books";
        if (validate()) {
            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
                .then((response) => response.json())
                .then((data) => {

                    // navigate('/');                // Add any success handling logic
                    navigate('/', {state: {message: 'Form submitted successfully!'}});
                })
                .catch((error) => {
                    console.error('Error:', error);
                    // Add any error handling logic
                });
        }else {
            console.log( "Form Validation Failed");
        }
        }
    return (
        <div>
            <h2> Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title1"
                           name='title'
                           placeholder="Enter Title" value={formData.title} onChange={handleFormChange}/>
                    {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author1"
                           placeholder="Enter Author"
                           name='author'
                           value={formData.author} onChange={handleFormChange}/>
                    {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="author">Description</label>
                    <input type="text" className="form-control" id="description1"
                           name='description'
                           value={formData.description} onChange={handleFormChange}
                           placeholder="Enter Description"/>
                    {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <select className="form-control" id="price1"
                            value={formData.price}
                            name='price'
                            onChange={handleFormChange} >
                        <option value='9.99'> 9.99</option>
                        <option value='10.99'> 10.99</option>
                        <option value='11.99'> 11.99</option>
                    </select>
                    {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <ol>
                <li> Title:{formData.title}</li>
                <li> Author:{formData.author}</li>
                <li> Price:{formData.price}</li>
                <li> Description:{formData.description}</li>
            </ol>
        </div>
    );
}

export default CreateV3;