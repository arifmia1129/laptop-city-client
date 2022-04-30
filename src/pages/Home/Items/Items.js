import React, { useEffect, useState } from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';
const Items = () => {
    const [items] = useItems();
    return (
        <div className="container my-5">
            <h3 className='mb-3 fw-bold'>Inventory Items Info : </h3>
            <hr />
            {
                items.map(item => <Item
                    key={item?._id}
                    item={item}
                ></Item>)
            }
        </div>
    );
};

export default Items;