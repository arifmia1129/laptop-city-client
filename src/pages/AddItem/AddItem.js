import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import "./AddItem.module.css";
const AddItem = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data, event) => {

        await axios.post("http://localhost:5000/item", { data })
            .then(res => {
                if (res.data.acknowledged === true) {
                    toast("Successfully item added.");
                    event.target.reset();
                }
            })
    };

    return (
        <div className='p-3 container my-3'>
            <h3>Add New Item</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center w-100 border border-3 p-2">
                <input {...register("email")} type="email" value={user.email} readOnly />
                <br />
                <input {...register("img")} type="text" placeholder='Enter image url' />
                <br />
                <input {...register("name")} type="text" placeholder='Enter item name' />
                <br />
                <input {...register("price")} type="text" placeholder='Enter item price' />
                <br />
                <input {...register("description")} type="text" placeholder='Enter item description' />
                <br />
                <input {...register("quantity")} type="number" placeholder='Enter item quantity' />
                <br />
                <input {...register("supplier")} type="text" placeholder='Enter item supplier' />
                <br />
                <input className='btn btn-success' type="submit" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItem;