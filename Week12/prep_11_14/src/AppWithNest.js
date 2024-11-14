import React from 'react';
import {Route, Routes} from "react-router-dom";
import Products  from "./components/Products";
import About from "./components/About";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";

const AppWithNest = () => {
    return (
        <div>
    <Routes>
        <Route path="products" element={<Products />}>
            <Route path="FeaturedProducts" element={<FeaturedProducts />} />
            <Route path="NewProducts" element={<NewProducts />} />
        </Route>
        <Route path='*' element={<About />} />
    </Routes>
    </div>
    );
};

export default AppWithNest;