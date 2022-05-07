import React from 'react';
import useItems from '../../hooks/useItems';

const AllDetails = () => {
    const [items] = useItems();

    // use array reduce operation
    const totalQuantity = items.reduce((previous, current) => parseInt(previous) + parseInt(current.quantity), 0);
    const totalPrice = items.reduce((previous, current) => parseInt(previous) + (parseInt(current.price) * parseInt(current.quantity)), 0);
    return (
        <div className='container my-5'>
            <h3 className='fw-bold mb-3'>Overall Product Summary: </h3>
            <hr />
            <div className='container d-md-flex justify-content-around align-items-center'>
                <div className='bg-primary text-white fw-bold p-5 rounded-3 text-center m-3'>
                    <h3>Total Brand</h3>
                    <h1> {items.length}</h1>
                </div>
                <div className='bg-success text-white fw-bold p-5 rounded-3 text-center m-3'>
                    <h3>Total Quantity</h3>
                    <h1> {totalQuantity}</h1>
                </div>
                <div className='bg-danger text-white fw-bold p-5 rounded-3 text-center m-3'>
                    <h3>Total Amount</h3>
                    <h1> {totalPrice}</h1>
                </div>

            </div>
        </div>
    );
};

export default AllDetails;