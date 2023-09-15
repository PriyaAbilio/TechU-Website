import { Enroll, AllEnrolls } from "../controllers/Enroll.js";
import { Router } from "express";

const Routes = Router()

Routes.post('/Enroll', Enroll)
Routes.get('/allEnrolls', AllEnrolls)

export default Routes