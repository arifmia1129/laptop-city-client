import React from 'react';
import { Table } from 'react-bootstrap';
import useItems from '../../hooks/useItems';
import "./ManageItems.css";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = async id => {
        const { data } = await axios.post(`http://localhost:5000/item/${id}`);
        setItems(items);
        if (data.acknowledged) {
            const rest = items.filter(item => item._id !== id);
            setItems(rest);
            toast("Delete operation success.")
        }
        console.log(data);
    }
    return (
        <div className='container mx-auto d-block my-5'>
            <h3 className='fw-bold'>Manage All Product</h3>
            <hr />
            <Table striped bordered hover size="sm" className="text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr key={item._id} >
                            <td></td>
                            <td>{item.name}</td>
                            <td><button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageItems;