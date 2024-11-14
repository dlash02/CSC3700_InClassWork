import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';
function BookUpdateV2(props) {
    const { id } = useParams();
    let url = `http://localhost:3333/books/${id}`;
    let { data, error, isPending } = useFetch(url);

    const [values, setValues] = useState({
        id: id,
        name: '',
        title: '',
        author: '',
        price: '10.99',
        description: ''
    });

    // Update form values when the data is fetched
    useEffect(() => {
        if (data) {
            setValues(data);
        }
    }, [data]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let URL = `http://localhost:3333/books/${values.id}`;
        fetch(URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }).then(() => {
            navigate('/'); // Navigate back to home after submitting
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <div className="container">
            <h2>Book UpdateV2 for id: {id}</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {values && (
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Title"
                            required
                            value={values.title || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="author"
                            name="author"
                            placeholder="Author"
                            required
                            value={values.author || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price:</label>
                        <select
                            className="form-select"
                            id="price"
                            name="price"
                            value={values.price || ''}
                            onChange={handleChange}
                        >
                            <option value="9.99">9.99</option>
                            <option value="10.99">10.99</option>
                            <option value="11.99">11.99</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="3"
                            value={values.description || ''}
                            onChange={handleChange}
                        />
                    </div>
                    {!isPending && <button type="submit" className="btn btn-primary">Submit</button>}
                    {isPending && <button type="submit" className="btn btn-primary" disabled>Adding Content</button>}
                </form>
            )}
            <ol className="mt-3">
                <li>Title: {values.title || ''}</li>
                <li>Author: {values.author || ''}</li>
                <li>Price: {values.price || ''}</li>
                <li>Description: {values.description || ''}</li>
            </ol>
            <Link to="/" className="btn btn-link">Back Home</Link>
        </div>
    );
}

export default BookUpdateV2;
