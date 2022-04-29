import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Item = ({ item }) => {
    const { img, name, price, description, supplier, quantity } = item;
    return (
        <div>
            <div>
                <img src={img} alt="" style={{ width: "250px", height: "200px" }} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>Price range: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>{description}</p>
                <p>Seller info: {supplier}</p>
            </div>
            {/* <div>
                <QRCodeSVG value={name} />
            </div> */}
        </div>
    );
};

export default Item;