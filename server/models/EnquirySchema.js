import mongoose from "mongoose";

const schema = mongoose.Schema

const EnquirySchema = new schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    mobile : {
        type : Number,
        required : true
    },
    course : {
        type : String,
        required : true,
        enum : ["Mern Stack", "Mean Stack", "DevOps", "Data Science"]
    },
    message : {
        type : String,
     
    }
})


export default mongoose.model("enquiry",EnquirySchema)