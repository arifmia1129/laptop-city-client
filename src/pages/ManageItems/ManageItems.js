import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import useItems from '../../hooks/useItems';
import "./ManageItems.css";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

const ManageItems = () => {
    const [items, setItems] = useItems();

    // Modal part
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
        const { data } = await axios.post(`http://localhost:5000/item/${id}`);
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
            <h3 className='fw-bold'>Manage All Product</h3>
            <hr />
            <Table striped bordered hover size="sm" className="text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr key={item._id} >
                            <td></td>
                            <td>{item.name}</td>
                            <td><button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
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