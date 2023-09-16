import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


const AddBatch = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [validate, setValidate] = useState('');
    const [data, setData] = useState({
        title: '',
        StartDate: '',
        EndDate: '',
        slots: '',
    });

    // Check the action type based on the location state
    const actionCheck =
        location.state && location.state[1] === 'update' ? 'Update Batch' : 'Add Batch';

    // Function to populate form fields if in update mode
    const actionCheckFun = () => {
        if (location.state && location.state[1] === 'update') {
            const { title, StartDate, EndDate, slots } = location.state[0];
            setData({
                title,
                StartDate,
                EndDate,
                slots,
            });
        }
    };

    useEffect(() => {
        actionCheckFun();
    }, []); // Add an empty dependency array to run this effect only once

    const onFormSubmit = (e) => {
        e.preventDefault();
       
    };

    const onChangeSubmit = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmitBlog = async () => {
        try {
            if (actionCheck === 'Add Batch') {
                const res = await axios.post('http://localhost:8004/batches/upcoming', data);
                if (res.data.message === 'Batch added successfully') {
                    setValidate(res.data.message);
                    navigate('/batches');
                }
            } else {
                const reqId = location.state[0]._id;
                const res = await axios.patch(`http://localhost:8004/batches/update/${reqId}`,data)
                if (res.data.message === 'Batch Updated') {
                    setValidate(res.data.message);
                    navigate('/batches', { state: location.state[2] });
                }
            }
        } catch (e) {
            console.log(e);
            setValidate('An error occurred.');
        }
    };

    return (
        <div>
            <h6>{validate}</h6>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={data.title}
                    onChange={onChangeSubmit}
                />
                <input
                    type="date"
                    name="StartDate"
                    placeholder="Start-Date"
                    value={data.StartDate}
                    onChange={onChangeSubmit}
                />
                <input
                    type="date"
                    name="EndDate"
                    placeholder="End-Date"
                    value={data.EndDate}
                    onChange={onChangeSubmit}
                />
                <input
                    type="number"
                    name="slots"
                    placeholder="slot"
                    value={data.slots}
                    onChange={onChangeSubmit}
                />
                <button type="submit" onClick={ onSubmitBlog}>{actionCheck}</button>
            </form>
        </div>
    );
};

export default AddBatch;
