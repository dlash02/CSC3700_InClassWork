import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";
import {useAuth} from "./auth";

function NavBar() {
    const auth = useAuth();
    return (
        <Nav className="justify-content-end mainNav" activeKey="/">
            <Nav.Item>
                <Nav.Link  as={NavLink} to='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/products'>Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/profile'>Profile</Nav.Link>
            </Nav.Item>
            {
                !auth.user && (
                    <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                )
            }

        </Nav>
    );
}
export default NavBar;