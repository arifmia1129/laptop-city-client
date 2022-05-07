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
                const { data } = await axios.post("https://rocky-caverns-30170.herokuapp.com/login", { email })
                setToken(data);
                localStorage.setItem("token", data);
            }
            getToken();
        }
    }, [user]);
    return [token];
};

export default useToken;