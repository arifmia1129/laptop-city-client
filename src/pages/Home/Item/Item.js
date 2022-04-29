import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Item = ({ item }) => {
    const { _id, img, name, price, description, supplier, quantity } = item;
    return (
        <div className="d-md-flex justify-content-between border border-5 mb-2 align-items-center p-3 rounded-3 text-center">
            <div>
                <img className="rounded-3" src={img} alt="" style={{ width: "250px", height: "200px" }} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>Price range: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>{description}</p>
                <p>Seller info: {supplier}</p>
                <button className="btn btn-primary fw-bold text-white">Update Info</button>
            </div>
            <div className="border p-2 border-2 rounded-3">
                <QRCodeSVG value={_id} />
            </div>
        </div>
    );
};

export default Item;