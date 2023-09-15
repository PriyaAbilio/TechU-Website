import mongoose from "mongoose";


export default async function connect(){
    await mongoose.connect(`mongodb+srv://nanimadhani:AFjAs4pSnHEKxd85@cluster0.jh3uavb.mongodb.net/?retryWrites=true&w=majority`)
    console.log('connected to moongose database')
}