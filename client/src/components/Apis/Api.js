import axios from 'axios'

const RegisterApi = (formData) => {
    try {
        const res = axios.post('http://localhost:8004/user/Register', formData);
        return res;
    } catch (e) {
        console.log(e);
    }
};

const LoginApi = (details) => {
    try {
        const res = axios.post('http://localhost:8004/user/Login', details)
        return res
    }
    catch (err) {
        console.log(err)
    }
}

export { RegisterApi, LoginApi }