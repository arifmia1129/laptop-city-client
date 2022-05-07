import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';
import "./Items.css";

const Items = () => {

    const [items, setItems] = useItems();


    return (
        <div className="container my-5">
            <h3 className='mb-3 fw-bold'>Inventory Items Info : </h3>
            <hr />
            {
                items.slice(0, 6).map(item => <Item
                    key={item?._id}
                    item={item}
                ></Item>)

            }
            <Link style={{ textDecoration: "none" }} className='d-flex justify-content-end align-items-center' to="/manageitems"><button className='btn btn-danger'>Manage All</button></Link>


        </div>
    );
};

export default Items;