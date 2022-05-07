import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import useToken from "../../hooks/useToken";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef("");
    const passRef = useRef("");


    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const [token] = useToken();
    if (error) {
        toast(error.message);
    }

    if (loading) {
        return <Loading></Loading>
    }

    // navigate when get token
    if (token) {
        navigate(from, { replace: true });
    }


    const handleFormSubmit = e => {
        e.preventDefault();
        const email = emailRef?.current?.value;
        const password = passRef?.current?.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleReset = async () => {
        const email = emailRef?.current?.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast("Enter your email address");
        }
    }
    return (
        <div className="p-3">
            <Form className='user-form border border-2 p-2 rounded mx-auto' onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Login
                </Button>
                <p className="text-center my-3">If forgot your password? <span className='btn text-primary' onClick={handleReset}>reset now</span></p>
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