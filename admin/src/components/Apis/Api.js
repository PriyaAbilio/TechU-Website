import axios from 'axios'

const LoginApi = (details) => {
    try{
        const res = axios.post("http://localhost:8004/user/adminLogin",details)
        return res
    }catch(e){
        console.log(e)
    }
}


const AllBatches = () => {
    try{
        const res = axios.get("http://localhost:8004/batches/all")
        return res
    }catch(e){
        console.log(e)
    }
}


const DeleteBatch =  (id) => {
    try{
        const res = axios.delete(`http://localhost:8004/batches/delete/${id}`)
        return res
    }catch(e){
        console.log(e)
    }
}

export default {LoginApi,AllBatches,DeleteBatch};