import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from "../../../firebase.init";
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='btn btn-outline-secondary text-center d-block mx-auto social-login'>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <img className='me-3 mb-3' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <p>Login With Google</p>
                </div>
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogin;