import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useToken = () => {
    const [user] = useAuthState(auth);
    const [token, setToken] = useState("");

    useEffect(() => {
        const email = user?.email;
        if (email) {
            const getToken = async () => {
                const { data } = await axios.post("http://localhost:5000/login", { email })
                setToken(data);
                localStorage.setItem("token", data);
            }
            getToken();
        }
    }, [user]);
    return [token];
};

export default useToken;