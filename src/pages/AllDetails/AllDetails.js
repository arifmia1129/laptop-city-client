import React from 'react';
import useItems from '../../hooks/useItems';

const AllDetails = () => {
    const [items] = useItems();
    const totalQuantity = items.reduce((previous, current) => previous + current.quantity, 0);
    const totalPrice = items.reduce((previous, current) => previous + parseInt(current.price), 0);
    return (
        <div className='container my-5'>
            <h3 className='fw-bold mb-3'>Overall Product Summary: </h3>
            <hr />
            <div className='container d-md-flex justify-content-around align-items-center'>
                <div className='bg-primary text-white fw-bold p-5 rounded-3 text-center'>
                    <h3>Total Product</h3>
                    <h1> {items.length}</h1>
                </div>
                <div className='bg-success text-white fw-bold p-5 rounded-3 text-center'>
                    <h3>Total Quantity</h3>
                    <h1> {totalQuantity}</h1>
                </div>
                <div className='bg-danger text-white fw-bold p-5 rounded-3 text-center'>
                    <h3>Total Price</h3>
                    <h1> {totalPrice}</h1>
                </div>

            </div>
        </div>
    );
};

export default AllDetails;