import { Router } from "express";
import { UpdateBatch, addBatch, deleteBatch, getallbatches } from "../controllers/Batch.js";

const Route = Router()

Route.post('/Upcoming', addBatch)
Route.get('/all', getallbatches)
Route.patch('/Update/:id', UpdateBatch)
Route.patch('/delete/:id', deleteBatch)
export default Route