
import { Router } from "express";
import { Register,getallRegister, login } from "../controllers/Register.js";
import { AdminLogin, AdminRegister } from "../controllers/Admin.js";

const Rout=Router()

Rout.post('/Register',Register)
Rout.get('/allRegister',getallRegister)
Rout.post('/Login',login)
Rout.post('/adminLogin',AdminLogin)
Rout.post('/adminRegister',AdminRegister)
export default Rout