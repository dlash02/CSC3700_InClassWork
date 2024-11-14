import React, {useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import useFetch from "./useFetch";

function Update(props) {
    const navigate = useNavigate();
    const {id} = useParams();
    const url = `http://localhost:3333/books/${id}`
    let { data, errors, isPending } = useFetch( url );
    const [formData, setFormData] =
        React.useState({title:'', author:'',
        description: '', price:'' });
    useEffect( () => {
        setFormData( data );
    }, [data])
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const book = {title, author, description, price};
        const url = `http://localhost:3333/books/${id}`;
        // if ( validate() ) {
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }).then((response) => response.json())
                .then((data) => {
                    console.log("Data=");
                    console.log(data);
                    navigate("/", {state: {message: `Form id:${id} successfully updated`}});
                }).catch((error) => {
                console.log("ERROR -------");
                console.log(error);
            })
        // } else {
        //     console.log( "Form validation failed");
        //     // console.log( errors );
        // }
    }
    return (
        <div>
            Inside Update!!! id:{id}
            {isPending && <div> loading ... </div>}
            {errors && <div> Error:{errors}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title1"
                           placeholder="Enter Title" value={formData.title}
                           name='title'
                           onChange={handleFormChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author1"
                           placeholder="Enter Author"
                           name='author'
                           value={formData.author} onChange={handleFormChange}/>

                </div>
                <div className="form-group">
                    <label htmlFor="author">Description</label>
                    <input type="text" className="form-control" id="description1"
                           name='description'
                           value={formData.description} onChange={handleFormChange}
                           placeholder="Enter Description"/>

                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <select className="form-control" id="price1"
                            value={formData.price}
                            name='price'
                            onChange={handleFormChange}>
                        <option value='9.99'> 9.99</option>
                        <option value='10.99'> 10.99</option>
                        <option value='11.99'> 11.99</option>
                    </select>
                </div>
                {!isPending &&
                <button type="submit" className="btn btn-primary">Update</button>}
                {isPending &&
                    <button type="submit" className="btn btn-primary" disabled>Wait for it</button>
                }

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

export default Update;