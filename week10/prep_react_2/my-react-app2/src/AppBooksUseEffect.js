import './App.css';
// import Home from './components/Home';
import {Container} from "react-bootstrap";
import NavbarBS from "./components/NavbarBS";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import BookHome from "./components/BookHome";
// import BookHomeUseFetchCustom   from "./components/BookHomeUseFetchCustom";
import Home   from "./components/Home";

function App() {
  return (
    <div className="App">
          <Router>
                <Container>
                    <NavbarBS />

                </Container>
                 <Routes>
                     <Route path='/' element={<Home />} />
                </Routes>
           </Router>
     </div>
  );
}

export default App;
