import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><CustomLink to="/">Laptop-City</CustomLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        {
                            user ? <>
                                <Nav.Link href="#"><CustomLink to="/manageitems">Manage-Items</CustomLink></Nav.Link>
                                <Nav.Link href="#"><CustomLink to="/additem">Add-Item</CustomLink></Nav.Link>
                                <Nav.Link href="#"><CustomLink to="/myitems">My-Items</CustomLink></Nav.Link>
                                <Nav.Link href="#" onClick={() => signOut(auth)}>Sign-Out</Nav.Link>
                                <p className='text-white my-auto fw-bold border p-1 rounded'>{user?.displayName}</p>
                            </> : <Nav.Link href="#"><CustomLink to="/login">Login</CustomLink></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;