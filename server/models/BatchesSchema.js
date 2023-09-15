import mongoose from 'mongoose'


const schema = mongoose.Schema

const BatchSchema = new schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    StartDate: {
        type: String,
        required: true,
        trim: true
    },
    EndDate: {
        type: String,
        required: true,
        trim: true,
    },
    slots: {
        type: Number,
        default: 25
    }
})

export default mongoose.model('Batch', BatchSchema)