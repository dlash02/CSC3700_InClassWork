import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function CreateV2(props) {
    let navigate = useNavigate();
    const [formData, setFormData] = React.useState({title:'', author:'',
                                                            description: '', price:''});
    const [ errors, setErrors] = React.useState({});
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }
    const validate = () => {
        let newErrors = {};
        if( !formData.title ){ newErrors.title = 'Title is required'; }
        if( !formData.author ){ newErrors.author = 'Author is required'; }
        if( !formData.description ){ newErrors.description = 'Description is required'; }
        if( !formData.price ) { newErrors.price = 'Price is required'; }
        setErrors( newErrors );
        return Object.keys( newErrors ).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const book = {title, author, description, price};
        const url = "http://localhost:3333/books/";
        if ( validate() ) {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }).then((response) => response.json())
                .then((data) => {
                    console.log("Data=");
                    console.log(data);
                    navigate("/", {state: {message: `Form successfully submitted`}});
                }).catch((error) => {
                console.log("ERROR -------");
                console.log(error);
            })
        } else {
            console.log( "Form validation failed");
            console.log( errors );
        }
    }
    return (
        <div>
            <h2> Add New Book!!!!</h2>
            {/*<form onSubmit={handleSubmit}>*/}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title1"
                           placeholder="Enter Title" value={formData.title}
                           name='title'
                           onChange={handleFormChange}/>
                    {errors.title && <p style={{color:'red'}}> {errors.title}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author1"
                           placeholder="Enter Author"
                           name='author'
                           value={formData.author} onChange={handleFormChange}/>
                    {errors.author && <p style={{color:'red'}}> {errors.author}</p>}

                </div>
                <div className="form-group">
                    <label htmlFor="author">Description</label>
                    <input type="text" className="form-control" id="description1"
                           name='description'
                           value={formData.description} onChange={handleFormChange}
                           placeholder="Enter Description"/>
                    {errors.description && <p style={{color:'red'}}> {errors.description}</p>}

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
                    {errors.price && <p style={{color:'red'}}> {errors.price}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <ol>
                <li> Title:{formData.title}</li>
                <li> Author:{formData.author}</li>
                <li> Price:{formData.price}</li>
                <li> Description:{formData.description}</li>
            </ol>
            <a href='/'> back </a>
            <Link to='/'> back </Link>
        </div>
    );
}

export default CreateV2;