import React from 'react';
import { ToastContainer } from 'react-toastify';
import AllDetails from '../../AllDetails/AllDetails';
import Chart1 from '../../Chart/Chart1';
import Banner from "../Banner/Banner";
import Items from '../Items/Items';

const Home = () => {

    return (
        <div>

            <Banner></Banner>
            <AllDetails></AllDetails>
            <Items></Items>
            <Chart1></Chart1>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;