import './App.css';
import NavBar from "./components/NavBar";
// import PurchasePrepV2 from "./components/PurchasePrepV2";
import Books from "./components/Books";
import BookHomeV3 from "./components/BookHomeV3";
import {Route, Routes} from "react-router-dom";
import About from "./components/About";
import Delete from "./components/Delete";
import CreateV2 from "./components/CreateV2";
import NotFound from "./components/NotFound";
import Update from "./components/Update";
import CSC from "./components/CSC";
import AU from "./components/AU";
// const About = React.lazy(() => import("./components/About"));
function AppWLink() {
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
                            <Route path='about' element={<About />} >
                                <Route path='AU' element={<AU />} ></Route>
                                <Route path='CSC' element={<CSC />} ></Route>
                            </Route>
                            <Route path='*' element={<NotFound />} ></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppWLink;
