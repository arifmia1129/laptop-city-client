import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (error) {
        toast(error.message);
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }


    const handleFormSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className="p-3">
            <Form className='user-form border border-2 p-2 rounded mx-auto' onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Login
                </Button>
                <p className="text-center my-3">If you have not an account? <Link style={{ textDecoration: "none" }} to="/register">register now</Link></p>

                <div className='d-flex justify-content-center align-items-center'>
                    <div className='w-50  bg-secondary' style={{ height: "2px" }}></div>
                    <div><p className='mx-2 mt-3'>OR</p></div>
                    <div className='w-50 bg-secondary' style={{ height: "2px" }}></div>
                </div>
                <SocialLogin></SocialLogin>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;