import React from 'react';
import {Link, Outlet, useSearchParams} from "react-router-dom";
import {Button} from "react-bootstrap";

function Users(props) {
    const [ searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <div>
            <h2> The List of all known Users</h2>
            <ol>
                <li key='1'> User 1 <Link to='1'> More Details </Link> </li>
                <li key='2'> User 2 <Link to='2'> More Details </Link> </li>
                <li key='3'> User 3 <Link to='3'> More Details </Link> </li>
                <Outlet />
                <div>
                    <Button onClick={() =>
                           setSearchParams({filter:'active'})}>
                           ShowActive
                    </Button>
                    <Button onClick={() =>
                        setSearchParams({})}>
                        Reset Filter
                    </Button>
                    {
                        showActiveUsers ?
                             <h2> Showing the active users </h2>
                            : <h2> Showing all users </h2>
                    }
                </div>

            </ol>
        </div>
    );
}

export default Users;