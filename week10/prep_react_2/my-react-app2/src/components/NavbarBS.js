import {Button, Container, Navbar, Nav} from "react-bootstrap";

const NavbarBS = () => {
    return (
        <Navbar bg="primary" data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href="#home"> Brand Home</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href="#home"> Home </Nav.Link>
                     <Nav.Link href="#features"> Features </Nav.Link>
                </Nav>
            </Container>
            </Navbar>
    )
}
export default  NavbarBS;