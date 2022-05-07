import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import "./Items.css";

const Items = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [size, setSize] = useState(6);

    useEffect(() => {
        fetch(`https://rocky-caverns-30170.herokuapp.com/homepageitem?page=${currentPage}&size=${size}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [currentPage, size])

    useEffect(() => {
        fetch("https://rocky-caverns-30170.herokuapp.com/count")
            .then(res => res.json())
            .then(data => {
                const itemCount = data.productCount;
                const pages = Math.ceil(itemCount / 6);
                setPage(pages);
            })
    }, [])


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
            <Link style={{ textDecoration: "none" }} className='d-flex justify-content-end align-items-center' to="/manageitems"><button className='btn btn-danger'>Manage All</button></Link>

            <div className='my-5 text-center'>
                {
                    [...Array(page).keys()].map(single => <button onClick={() => setCurrentPage(single)} key={single} className={currentPage === single ? "btn btn-outline-primary mx-2 currentPage" : "btn btn-outline-primary mx-2"}>{single + 1}</button>)
                }

                <select className='border border-danger text-danger rounded-3 p-1' onChange={(e) => setSize(e.target.value)} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>Number of products</option>
                    <option value="5">5</option>
                    <option value="10" >10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Items;