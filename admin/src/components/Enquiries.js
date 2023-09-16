import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Enquiries = () => {
    const [userData, setUserData] = useState([])

    const getUserData = async () => {
        const res = await axios.get("http://localhost:8004/allEnquiry")
            .then((data) => {
                setUserData(data.data)
            })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        getUserData()
    })



    return (
        <div>
            {
                userData.map((val) => {
                    return (
                        <div className="card" style={{ width: "18rem" }}>
                            <h5 className="card-header">User</h5>
                            <div className="card-body">
                                <h5 className="card-title">{val.name}</h5>
                                <p className="card-text">{val.email}</p>
                                <p className="card-text">{val.mobile}</p>
                                <p className="card-text">{val.course}</p>
                                <p className="card-text">{val.message}</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Enquiries