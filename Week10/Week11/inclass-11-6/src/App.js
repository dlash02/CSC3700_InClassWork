import './App.css';
import Navs from "./Navs";
import {Col, Row} from "react-bootstrap";
import Home2 from "./Home2";
// import Books from "./Books";

function App() {
  return (
    <div className="App">
      <Navs />
        <Row>
            <Col sm={2}> Hey </Col>
            <Col sm={8}>
                <Home2/>
            </Col>
            <Col sm={2}> Hey </Col>
        </Row>

    </div>
  );
}

export default App;
