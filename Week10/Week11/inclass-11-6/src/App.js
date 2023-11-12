import './App.css';
import Navs from "./Navs";
import {Col, Row} from "react-bootstrap";
import Home4 from "./Home4";
// import Books from "./Books";

function App() {
  return (
    <div className="App">
      <Navs />
        <Row>
            <Col sm={2}> Hey </Col>
            <Col sm={8}>
                <Home4 />
            </Col>
            <Col sm={2}> Hey </Col>
        </Row>

    </div>
  );
}

export default App;
