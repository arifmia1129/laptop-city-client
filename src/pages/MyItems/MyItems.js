import { TrashIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getItems = async () => {
            // try to get token and send server side for verify
            try {
                const { data } = await axios(`https://rocky-caverns-30170.herokuapp.com/myitems?email=${user?.email}`, {
                    headers: {
                        authorization: `Bearer: ${localStorage.getItem("token")}`
                    }
                })
                setMyItems(data);
            }

            // catch any error sign out user
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        }

        getItems();
    }, [user]);



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
            const rest = myItems.filter(item => item._id !== id);
            setMyItems(rest);
            toast("Delete operation success.");
        }
    }

    if (agree) {
        handlePermanentDelete(id);
    }


    return (
        <div className='container mx-auto d-block my-5'>
            <h3 className='fw-bold'>My All Added Item</h3>
            <hr />
            <Table striped bordered hover size="sm" className="text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Author</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.map(item => <tr key={item._id} >
                            <td></td>
                            <td>{item.name}</td>
                            <td>{user.displayName}</td>
                            <td>
                                <TrashIcon style={{ width: "50px" }} onClick={() => handleDelete(item._id)} className="btn btn-danger" />
                            </td>
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

export default MyItems;