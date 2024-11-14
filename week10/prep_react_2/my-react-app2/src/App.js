import './App.css';
import Home from './components/Home';
import {Button, Container, Navbar} from "react-bootstrap";
import NavbarBS from "./components/NavbarBS";

function App() {
  return (
      <Container>

`    <div className="App">
         <div className="content">
            <NavbarBS />
             <h2> Hello Human </h2>
      </div>
          <Button variant="primary"> Primary Button!</Button>
          <Button variant="secondary"> Secondary Button</Button>
          <Button variant="success"> Success Button</Button>
    </div>
      </Container>
  );
}
export default App;
