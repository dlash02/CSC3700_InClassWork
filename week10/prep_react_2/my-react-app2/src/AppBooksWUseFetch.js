import './App.css';
import NavbarBS from "./components/NavbarBS";
import HomeBook4 from "./components/HomeBook4";
import BookHomeUseEffect from "./components/BookHomeUseEffect";
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
              <h2> My Books </h2>
          </Col>
      </Row>
          <Row>

          <Col sm={2}>
          </Col>
          <Col sm={5}>
                <BookHomeUseEffect />
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
export default AppBooksWUseFetch;
