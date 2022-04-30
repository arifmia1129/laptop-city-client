import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [currentQuantiy, setCurrentQuantity] = useState(item.quantity);
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);
    return (
        <div className="container my-5">
            <h2 className='text-center fw-bold'>Item Details</h2>
            <div className="border border-3 text-center p-2 rounded-3">
                <img width={250} height={250} src={item.img} alt="" />
                <h4>Name: {item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Description: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Supplier: {item.supplier}</p>
                <input type="number" name="quantity" id="" placeholder='Enter quantity' />
                <button className='btn btn-success ms-2'>Add Quantity</button>
                <br />
                <br />
                <button className='btn btn-danger'>Delivered</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ItemDetails;