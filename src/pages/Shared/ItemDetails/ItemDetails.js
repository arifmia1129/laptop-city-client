import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Item details: {id}</h1>
        </div>
    );
};

export default ItemDetails;