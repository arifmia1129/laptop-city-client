import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item]);
    const handleQuantityDecrement = async () => {
        if (item.quantity > 0) {
            const { data } = await axios.put(`http://localhost:5000/item/${id}`, { quantity: item.quantity - 1 })
            if (data.acknowledged) {
                toast("Successfully quantity decrement!");
            }
        }

    }

    const handleToSubmit = async e => {
        e.preventDefault();
        const addedQuantity = e.target.quantity.value;
        const { data } = await axios.put(`http://localhost:5000/item/${id}`, { quantity: parseInt(item.quantity) + parseInt(addedQuantity) })
        if (data.acknowledged) {
            e.target.reset();
            toast("Successfully quantity added!")
        }
    }
    return (

        <div className="container my-5">
            <Link style={{ textDecoration: "none" }} className='d-flex justify-content-end align-items-center' to="/manageitems"><button className='btn btn-danger'>Manage All</button></Link>
            <h2 className='text-center fw-bold'>Item Details</h2>
            <div className="border border-3 text-center p-2 rounded-3">
                <img className='rounded-3' width={250} height={250} src={item.img} alt="" />
                <div className='my-3'>
                    <h4 className='fw-bold'>Name: {item.name}</h4>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Supplier: {item.supplier}</p>
                </div>
                <form onSubmit={handleToSubmit} className="w-75 mx-auto">
                    <input type="number" name="quantity" id="" placeholder='Enter quantity' />
                    <br />
                    <input className='btn btn-success' type="submit" value="Add Quantity" />
                </form>
                <br />
                <br />
                <button onClick={handleQuantityDecrement} className='btn btn-danger'>Delivered</button>
            </div>
            <div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ItemDetails;