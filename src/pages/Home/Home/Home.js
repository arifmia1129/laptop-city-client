import React from 'react';
import Chart1 from '../../Chart/Chart1';
import Banner from "../Banner/Banner";
import Items from '../Items/Items';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Chart1></Chart1>
        </div>
    );
};

export default Home;