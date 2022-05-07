import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={CustomLink} to="/">Laptop-City</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        {/* Added custom link */}
                        <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                        {
                            user ? <>
                                <Nav.Link as={CustomLink} to="/manageitems">Manage-Items</Nav.Link>
                                <Nav.Link as={CustomLink} to="/additem">Add-Item</Nav.Link>
                                <Nav.Link as={CustomLink} to="/myitems">My-Items</Nav.Link>
                                <p className='text-white my-auto fw-bold btn' onClick={() => signOut(auth)}>Sign-Out</p>
                                <p className='text-white my-auto fw-bold border p-1 rounded'>{user?.displayName}</p>
                            </> : <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;