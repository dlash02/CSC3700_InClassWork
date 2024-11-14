import './App.css';
import Home from './components/Home';
import {Button, Container, Navbar} from "react-bootstrap";
import NavbarBS from "./components/NavbarBS";
import BookHome from "./components/BookHome";

function App() {
  return (
      <Container>

`    <div className="App">
         <div className="content">
            <NavbarBS />
             <BookHome />
      </div>
      </div>
      </Container>
  );
}

export default App;
