import './App.css';
import NavBar from "./src/components/NavBar";
// import PurchasePrepV2 from "./components/PurchasePrepV2";
import Books from "./src/components/Books";
import BookHomeV3 from "./src/components/BookHomeV3";
import {Route, Routes} from "react-router-dom";
import About from "./src/components/About";
import Delete from "./src/components/Delete";
import Create from "./src/components/Create";
import NotFound from "./src/components/NotFound";

function AppWRouter() {
    return (
        <div className="App">
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Books/>
                    </div>
                    <div className="col-md-9">
                        <Routes>
                            <Route path='/' element={<BookHomeV3 />} ></Route>
                            <Route path='/about' element={<About />} ></Route>
                            <Route path='/delete/:id' element={<Delete />} ></Route>
                            <Route path='/create' element={<Create />} ></Route>
                            <Route path='*' element={<NotFound />} ></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppWRouter;
