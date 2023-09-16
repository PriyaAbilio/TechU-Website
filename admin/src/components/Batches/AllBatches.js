import React, { useEffect, useState } from 'react'
// import DeleteBatch from './Apis/Api'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AllBatches = () => {

    const navigate = useNavigate()
    const [batches, setBatches] = useState([])
    const [validate, setValidate] = useState("")
    const [data, setData] = useState({
        title: "",
        StartDate: "",
        EndDate: "",
        slots: ""
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    const onChangeSubmit = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData((ps) => ({ ...ps, [name]: value }))
    }


    const batch = () => {
        navigate('/addbatch')
    }


    const getAllBatches = async () => {
        try {
            const res = axios.get("http://localhost:8004/batches/all")
                .then((data) => {
                    setBatches(data.data)
                })
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getAllBatches()
    }, [])




    const deleteBatch = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8004/batches/delete/${id}`);
            console.log(response.data);
            if (response.data.message === "Batch deleted") {
                getAllBatches()
            }
        } catch (error) {
            console.log(error);
        }
    }



    const onCreateBatch = () => {
        navigate("/addbatch");
    };
    const onEditBatch = (val) => {
        let action = "update";
        navigate("/addbatch", { state: [val, action] });
    };

  
    return (
        <div>
            <button onClick={onCreateBatch}>Add Batch</button>
            {
                batches.map((val) => {
                    return (
                        <div className="card" style={{ width: "18rem" }} key={val._id} >
                            <h5 className="card-header">Batch</h5>
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                                <p className="card-text">{val.StartDate}</p>
                                <p className="card-text">{val.EndDate}</p>
                                <a href="#" className="btn btn-primary" onClick={() => deleteBatch(val._id)} >Delete</a>
                                <a href="#" className="btn btn-primary" onClick={() => onEditBatch(val)} >Update</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllBatches