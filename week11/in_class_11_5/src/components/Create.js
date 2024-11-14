import React from 'react';

function Create(props) {
    const [title, setTitle] = React.useState('');
    const handleTitleChange = (e) => setTitle(e.target.value);
    const [author, setAuthor] = React.useState('');
    const handleAuthorChange = (e) => setAuthor(e.target.value);
    const [description, setDescription] = React.useState('');
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const [price, setPrice] = React.useState('');
    // const handlePriceChange = (e) => setPrice(e.target.value);
    return (
        <div>
            <h2> Add New Book</h2>
            {/*<form onSubmit={handleSubmit}>*/}
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title1"
                           placeholder="Enter Title" value={title}
                           name='title'
                           onChange={handleTitleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author1"
                           placeholder="Enter Author"
                           name='author'
                           value={author} onChange={handleAuthorChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Description</label>
                    <input type="text" className="form-control" id="description1"
                           name='description'
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

export default Create;