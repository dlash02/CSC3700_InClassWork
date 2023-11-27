import React from 'react';
import {useParams} from "react-router-dom";

function UserDetails(props) {
    const { id } = useParams();
    return (
        <div>
            <h2> User Details for id:{id}</h2>
               Here are details about id:{id}
        </div>
    );
}

export default UserDetails;