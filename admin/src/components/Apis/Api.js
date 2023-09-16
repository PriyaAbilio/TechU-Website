import axios from 'axios'

export const LoginApi = (details) => {
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

const updatebatch = async (id,data) => {
    try {
        const response = await axios.patch(`http://localhost:8004/batches/update/${id}`,data);
        return response;
    } catch (e) {
        console.log(e)
    }
}


const AddBatch = async (data) => {
   try{
    const res = await axios.post("http://localhost:8004/batches/upcoming",data)
   }catch(e){
    console.log(e)
   }
}

export default {LoginApi,AllBatches,DeleteBatch,updatebatch,AddBatch};