import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import "./Item.css";
const Item = ({ item }) => {
    const { _id, img, name, price, description, supplier, quantity } = item;

    const navigate = useNavigate();

    const handleSingleItem = id => {
        navigate(`item/${id}`);
    }
    return (
        <div className="d-md-flex justify-content-between border border-5 mb-2 align-items-center p-3 rounded-3 text-center">
            <div>
                <img className="rounded-3" src={img} alt="" style={{ width: "250px", height: "200px" }} />
            </div>
            <div className='item-info'>
                <h3 className='fw-bold'>{name}</h3>
                <p><span className='fw-bold'>Price range:</span> {price}</p>
                <p><span className='fw-bold'>Quantity:</span> {quantity}</p>
                <p>{description}</p>
                <p><span className='fw-bold'>Seller info:</span> {supplier}</p>
                <button onClick={() => handleSingleItem(_id)} className="btn btn-primary fw-bold text-white">Update Info</button>
            </div>
            <div className="border p-2 border-md-2 rounded-3">
                <QRCodeSVG value={`Product_id: ${_id}, Name: ${name}, Price: ${price}, Image_url: ${img}, Description: ${description}, Supplier: ${supplier}, Quantity: ${quantity}`} />
            </div>
        </div>
    );
};

export default Item;