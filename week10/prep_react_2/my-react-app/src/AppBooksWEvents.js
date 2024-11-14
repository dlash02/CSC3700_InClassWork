// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function AppBooksWEvents() {
        const handleClick = () => {
            console.log("That clicked be off")
        }
    const handleHero = ( name ) => {
        console.log(`That clicked off ${name}`)
    }
  return (
    <div className="App">
    <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={handleClick}> Primary </button>
                </div>
                <div className="col">
                    <button className="btn btn-danger"
                            onClick={ () => {
                                handleHero( "Hulk")
                                console.log("Handle Hulk")
                            }}
                    > Click Hero </button>
                </div>
            </div>
            <div className="row">
            <div className="col">
                <Home />
            </div>
            </div>
      </div>
    </div>
  );
}

export default AppBooksWEvents;
