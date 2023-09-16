import { Router } from "express";
import { AllEnquiries, Enquiry } from "../controllers/Enquiry.js";

const route = Router()

route.post('/enquiry', Enquiry)
route.get('/allEnquiry', AllEnquiries)

export default route