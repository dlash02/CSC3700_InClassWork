import './App.css';
import NavBar from "./components/NavBar";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import CreateV3 from "./components/CreateV3";
import BookUpdateV2 from "./components/BookUpdateV2";
import Delete from "./components/Delete";
import {Routes, Route } from 'react-router-dom'
import Books from "./components/Books";
// import BookHomeV8WDelete from "./components/BookHomeV8WDelete";
import BookHomeV9WDeleteUpdate from "./components/BookHomeV9WDeleteUpdate";

function AppWRouter() {
    return (
        <div className="App">
            <NavBar/>
            <div className="container">`
                <div className="row">
                    <div className="col-md-3">
                        <Books/>
                    </div>
                    <div className="col-md-9">
                        <Routes>
                            <Route path="/" element={<BookHomeV9WDeleteUpdate />}></Route>
                            <Route path="about" element={<About />}></Route>
                            <Route path="books/:id" element={<BookDetails />}></Route>
                            <Route path="create" element={<CreateV3 />}></Route>
                            <Route path="delete/:id" element={<Delete />}></Route>
                            <Route path="update/:id" element={<BookUpdateV2 />}></Route>
                        </Routes>
                    </div>
            </div>
        </div>
</div>
    );
}
export default AppWRouter;
