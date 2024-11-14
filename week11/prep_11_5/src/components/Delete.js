import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Link, useNavigate} from "react-router-dom";
function Delete(props) {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    };
    const {id} = useParams();
    return (
        <div>
            <h2> Deleted Book with id={id} </h2>
            <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
                Go Home
            </button>
        </div>
    );
}

export default Delete;