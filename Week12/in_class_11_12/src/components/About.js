import React from 'react';
import {Link, Outlet} from "react-router-dom";

function About(props) {
    return (
        <div>
            <h2> All about us!!!! The big school site </h2>

            <ol>
                <li> <Link to="AU"> About AU </Link></li>
                <li> <Link to="CSC"> About AU CSC </Link></li>
            </ol>
            <Outlet />
        </div>
    );
}

export default About;