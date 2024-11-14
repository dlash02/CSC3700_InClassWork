// import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <div className="App">
          <Navbar/>
          <h2> Books 4 U!</h2>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <Books/>
                  </div>
                  <div className="col-md-6">
                      <Hello/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
