import './App.css';
import Home from './components/Home';
import Books from './components/Books';
import {Button, Container, Navbar, Row, Col} from "react-bootstrap";
import NavbarBS from "./components/NavbarBS";
const mySchoolLink = "http://www.aurora.edu";
const mySchool = "Aurora University";
const likes = 500;
function AppBooksWEvents() {
    const handleClick = () => {
        console.log("That clicked be off")
    }
    const handleHero = ( name ) => {
        console.log(`That clicked off ${name}`)
    }
  return (
      <Container>
            <NavbarBS />
          <Row></Row>
      <Row>
          <Col sm={5}></Col>
          <Col>
              <h2> Click handlers</h2>
          </Col>
      </Row>
          <Row>

          <Col sm={2}>
          </Col>
          <Col sm={5}>
                  <Button onClick={handleClick} variant="primary"> Click to start</Button>
          </Col>
          <Col sm={5}>
              <Button  variant="secondary" onClick={ () => {
                  handleHero( "Hulk")
                  console.log("Handle Hulk")
              }}
              > Click Hero</Button>
          </Col>
      </Row>
          <Row>
              <Col sx sm='6'>
                  <p> I go to <a href={mySchoolLink}> {mySchool} </a></p>
              </Col>
          </Row>
      </Container>
  );
}
export default AppBooksWEvents;
