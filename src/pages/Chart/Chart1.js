import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart1 = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("items.json")
            .then(res => res.json())
            .then(result => setItems(result));
    }, []);
    return (
        <div className='container'>
            <h3 className='fw-bold mb-3'>Products information through charts:</h3>
            <hr />
            <div className='container d-md-flex justify-content-between align-item-center'>

                <div>
                    <h3>Available Quantity in Stock: </h3>
                    <PieChart width={500} height={300}>
                        <Pie
                            dataKey="quantity"
                            isAnimationActive={false}
                            data={items}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
                <div>
                    <h3>Price Range by Product:</h3>
                    <BarChart
                        width={500}
                        height={300}
                        data={items}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Chart1;