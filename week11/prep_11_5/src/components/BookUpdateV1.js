import React from 'react';
import {useParams} from "react-router-dom";

function BookUpdateV1(props) {
    const {id} = useParams();
    return (
        <div>
            <h2> Made it Book Update V1 id:{id}</h2>
        </div>
    );
}

export default BookUpdateV1;