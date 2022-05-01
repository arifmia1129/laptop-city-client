import React from 'react';
import { Table } from 'react-bootstrap';
import useItems from '../../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items, setItems] = useItems();
    return (
        <div className='container mx-auto d-block my-5'>
            <h3 className='fw-bold'>Manage All Product</h3>
            <hr />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr key={item._id}>
                            <td></td>
                            <td>{item.name}</td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default ManageItems;