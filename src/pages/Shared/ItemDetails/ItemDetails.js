import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);
    return (
        <div>
            <h1>Item details: {item.name}</h1>
        </div>
    );
};

export default ItemDetails;