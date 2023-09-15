import BatchesSchema from "../models/BatchesSchema.js";


export async function addBatch(req, res) {
    try {
        let { title, StartDate, slots, EndDate } = req.body
        if (StartDate === "") {
            return res.status(400).json({ message: "please enter the Date " });
        } else if (EndDate === "") {
            return res.status(400).json({ message: "Please Enter End date" })
        } else if (title === "") {
            return res.status(400).json({ message: "please enter the Title " });
        } else {
            await BatchesSchema.create(req.body);
            return res.status(200).json({ message: "Batch added successfully" });
        }
    }
    catch (err) {
        console.log(err)
    }
}

export async function getallbatches(req, res) {
    try {
        const allBatches = await BatchesSchema.find({});
        return res.status(200).send(allBatches);
    } catch (err) {
        console.log(err)
    }
}


export async function UpdateBatch(req, res) {
    try {
        await BatchesSchema.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json({ message: "Batch Updated" })
    }
    catch (err) {
        console.log(err)
    }
}


export async function deleteBatch(req,res) {
    try{
        await BatchesSchema.findByIdAndDelete(req.params.id)
        return res.status(200).json({ message: "Batch Deleted" })
    } catch (err) {
        console.log(err)
    }
}