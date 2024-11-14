import './App.css';
import Home from './components/Home';
import Books from './components/Books';
import {Button, Container, Navbar, Row, Col} from "react-bootstrap";
import NavbarBS from "./components/NavbarBS";

const myWarning = "The Following is an Opinion";
const mySchoolLink = "http://www.aurora.edu";
const mySchool = "Aurora University";
const likes = 500;
function App() {
  return (
      <Container>
            <NavbarBS />
      <Row>
          <Col sm={2}>
              <Col sm={10}>
                  <Home />
              </Col>
          </Col>
      </Row>
          <Row>
              <Col sx sm='6'>
                  <p> I go to <a href={mySchoolLink}> {mySchool} </a></p>
              </Col>
          <Col>
          <Button variant="primary"> Primary Button</Button>
          </Col>
          </Row>
          <Row>
              <Col sm='10'>
                  <h2> Books for Sale</h2>
                  <Books />
              </Col>
          </Row>
      </Container>
  );
}

export default App;
