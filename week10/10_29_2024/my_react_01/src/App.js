import './App.css';
import Books from './components/Books'
import NavBar from "./components/NavBar";
// import PurchasePrepV2 from "./components/PurchasePrepV2";
import BookHomeV5 from "./components/BookHomeV5";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Books/>
                    </div>
                    <div className="col-md-6">
                        <BookHomeV5/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
