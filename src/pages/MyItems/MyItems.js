import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getItems = async () => {
            // try to get token and send server side for verify
            try {
                const { data } = await axios(`http://localhost:5000/myitems?email=${user?.email}`, {
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
    }, [user])
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
                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.map(item => <tr key={item._id} >
                            <td></td>
                            <td>{item.name}</td>
                            <td>{user.displayName}</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;