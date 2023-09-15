import React, { useEffect, useState } from 'react'
import AllBatches from '../components/Apis/Api'
import axios from 'axios'

const Batches = () => {


    const [batches, setBatches] = useState([])


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
      try{
        const res = await deleteBatch(id)
      }catch(e){
        console.log(e)
      }
    }
    return (
        <div>
            {
                batches.map((val) => {
                    return (
                        <div className="card" style={{ width: "18rem" }} key = {val._id} >
                            <h5 className="card-header">Batch</h5>
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                                <p className="card-text">{val.StartDate}</p>
                                <p className="card-text">{val.EndDate}</p>
                                <a href="#" className="btn btn-primary" onClick={()=> deleteBatch(val?._id)} >Delete</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Batches