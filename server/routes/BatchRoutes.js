import { Router } from "express";
import { UpdateBatch, addBatch, DeleteBatch, getallbatches } from "../controllers/Batch.js";

const Route = Router()

Route.post('/upcoming', addBatch)
Route.get('/all', getallbatches)
Route.patch('/update/:id', UpdateBatch)
Route.delete('/delete/:id', DeleteBatch)
export default Route