import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis } from 'recharts';
import useItems from '../../hooks/useItems';
import "./Chart.css";
const Chart1 = () => {
    const [items] = useItems();
    return (
        <div className='container'>
            <h3 className='fw-bold mb-3'>Products information through charts:</h3>
            <hr />
            <div className='container d-md-flex justify-content-between align-item-center'>

                <div>
                    <h3>Available Quantity in Stock: </h3>
                    <div className="chart">
                        <PieChart width={250} height={300}>
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
                </div>
                <div>
                    <h3>Price Range by Product:</h3>
                    <BarChart
                        className='chart'
                        width={250}
                        height={300}
                        data={items}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="price" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Chart1;