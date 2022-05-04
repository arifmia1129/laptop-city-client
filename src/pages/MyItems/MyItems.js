import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyItems(data));
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