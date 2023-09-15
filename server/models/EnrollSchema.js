import mongoose from "mongoose";

const schema = mongoose.Schema

const EnrollSchema = new schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    phoneNumber: {
        type: Number,
        trim: true,
        required: true
    },
    course: {
        type: String,
        required: true,
        enum: ["MERN STACK", "MEAN STACK", "JAVA FULL STACK"]
    },
    mode: {
        type: String,
        required: true,
        enum: ['online', 'offline']
    }
})

export default mongoose.model("Enroll", EnrollSchema)