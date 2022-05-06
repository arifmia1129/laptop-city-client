import { Pie, PieChart, Tooltip } from 'recharts';
import useItems from '../../hooks/useItems';
import "./Chart.css";
const Chart1 = () => {
    const [items] = useItems();
    return (
        <div className='container'>
            <h3 className='fw-bold mb-3'>Products information through charts:</h3>
            <hr />
            <div>
                <h3>Available Quantity in Stock: </h3>
                <div className="chart d-flex justify-content-center align-items-center">
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
        </div>
    );
};

export default Chart1;