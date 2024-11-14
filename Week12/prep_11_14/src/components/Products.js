import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <h2>Products Page With 2 Nested Links</h2>
            <Link to="FeaturedProducts">Featured Products Page</Link>
            <br />
            <Link to="NewProducts">New Products Page</Link>

            {/* Outlet will render the nested routes */}
            <Outlet />
        </div>
    );
};

export default Products;
