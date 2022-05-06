import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    const [sendEmailVerification] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified && user.providerData[0].providerId === "password") {
        return <div className='px-2'>
            <div className='container my-5 border border-3 border-danger text-center p-3 rounded-3'>
                <h3 className='text-danger fw-bold'>Warning!!! Because your email address not verified.</h3>
                <p className='text-success'>If you want verify your email please click verify email button and check your email.</p>
                <button onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email for verification.');
                }} className='btn btn-success fw-bold'>Verify Email</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;