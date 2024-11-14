import './App.css';
import NavBar from "./components/NavBar";
// import PurchasePrepV2 from "./components/PurchasePrepV2";
import Books from "./components/Books";
import BookHome from "./components/BookHome";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Books/>
                    </div>
                    <div className="col-md-9">
                        <BookHome />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
