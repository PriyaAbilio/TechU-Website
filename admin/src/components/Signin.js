import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginApi } from './Apis/Api'

const Signin = () => {

    const navigate = useNavigate()

    const [details,setDetails] = useState({
        username : "",
        password : ""
    })
    
    const [validate, setValidate] = useState("")
    
    const onFormSubmit = (e) => {
        e.preventDefault()
    }
    
    const onChangeFormData =  (e) => {
        try{
            let name = e.target.name;
            let value = e.target.value
    
            setDetails((ps) => ({...ps,[name] : value}))
        }catch(e){
            console.log(e)
        }
    }
    
    
    const onSubmitFormData = async() => {
        try{
            
          
    
            const res = await LoginApi(details);
     
                 console.log(res.data?.message);
     
                 setValidate(res?.data.message);
     
                 if(res?.data.message==="Login successfull"){
     
                     navigate('/')
                 }
        }catch(e){
            console.log(e)
            setValidate(e.response?.data.message)
        }
      
    }
    useEffect(()=>{
     
    },[validate])
    
        return (
            <div>
                <p>{validate}</p>
                <form onSubmit={onFormSubmit}>
                    <input type='text' placeholder='username'name='username'
                        onChange={onChangeFormData}
                    />
                    <input type='password'
                        placeholder='password'
                        name='password'
                        onChange={onChangeFormData}
                    />
                    <button onClick={onSubmitFormData}>Login</button>
                </form>
                
            </div>
        )
}

export default Signin