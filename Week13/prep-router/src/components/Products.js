import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Products() {
    return (
        <div>
            <h2> Products Page </h2>
            <input type="search" placeholder="Search Products "/>
            <nav className='featuredNavs'>
                <Link to='featured'> Featured </Link>
                <Link to='new'> New </Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Products;