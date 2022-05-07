import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import { TrashIcon } from '@heroicons/react/solid';
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [size, setSize] = useState(10);

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
                const pages = Math.ceil(itemCount / 10);
                setPage(pages);
            })
    }, [])





    // Modal part
    // Use react bootstrap modal
    const [show, setShow] = useState(false);
    const [agree, setAgree] = useState(false);
    const [id, setId] = useState("");
    const handleClose = () => setShow(false);
    const handleSave = () => {
        setAgree(true);
        setShow(false);
    }

    const handleDelete = id => {
        setShow(true);
        setId(id);
    }

    const handlePermanentDelete = async id => {
        setAgree(false);
        const { data } = await axios.post(`https://rocky-caverns-30170.herokuapp.com/item/${id}`);
        if (data.acknowledged) {
            const rest = items.filter(item => item._id !== id);
            setItems(rest);
            toast("Delete operation success.");
        }
    }

    if (agree) {
        handlePermanentDelete(id);
    }

    return (
        <div className='container mx-auto d-block my-5'>
            <Link to="/additem" className="btn btn-success fw-bold">Add Item</Link>
            <h3 className='fw-bold'>Manage All Product</h3>
            <hr />
            <Table striped bordered hover size="sm" className="text-center">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr key={item._id} >
                            <td>Name: {item.name}, <br /> Quantity: {item.quantity}, <br /> Price: {item.price}, <br /> Supplier: {item.supplier}</td>
                            <td>
                                <TrashIcon style={{ width: "50px" }} onClick={() => handleDelete(item._id)} className="btn btn-danger" />
                            </td>
                        </tr>
                        )
                    }
                </tbody>

            </Table>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-danger'>Warning for delete!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure delete this data permanently?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleSave}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default ManageItems;