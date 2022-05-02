import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Register.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Loading from '../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    // firebase create email,pass user
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);


    const [checkStatus, setCheckStatus] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (error) {
        return (
            <div>
                {toast(error.message)};
            </div>
        );
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (user && updating) {
        return (
            <div>
                {
                    toast("Successfully user created. And check your email for verify.")
                };
                {
                    navigate(from, { replace: true })
                }
            </div>
        );
    }

    const handleFormSubmit = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    return (
        <div className="p-3">
            <Form className='user-form border border-2 p-2 rounded mx-auto' onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Profile Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setCheckStatus(!checkStatus)} type="checkbox" name="check" label="Agree terms and conditions?" />
                </Form.Group>
                <Button disabled={!checkStatus} className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Register
                </Button>
                <p className="text-center my-3">If you have already an account? <Link style={{ textDecoration: "none" }} to="/login">log in now</Link></p>

                <div className='d-flex justify-content-center align-items-center'>
                    <div className='w-50  bg-secondary' style={{ height: "2px" }}></div>
                    <div><p className='mx-2 mt-3'>OR</p></div>
                    <div className='w-50 bg-secondary' style={{ height: "2px" }}></div>
                </div>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;