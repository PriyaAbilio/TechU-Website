import AdminSchema from "../models/AdminSchema.js";



export async function AdminLogin(req, res) {

    try {
        const { username, password } = req.body
        let exist = await AdminSchema.findOne({ username })
        if (username === "" || password === "") {
            return res.status(400).json({ message: "Please enter the details" })
        } else if (username != exist.username) {
            return res.status(400).json({ message: "Please enter correct username" })
        }
        else if (password != exist.password) {
            return res.status(400).json({ message: "Please enter correct password" })
        }
        else {
            return res.status(200).json({ message: "Login successfull" })
        }
    } catch (err) {
        console.log(err)
    }
}


export async function AdminRegister(req, res) {
    try {
        const { username, password } = req.body
        if (username === "" || password === "") {
            return res.status(400).json({ message: "Please enter the details" })
        } else {

            await AdminSchema.create(req.body)
            return res.status(200).json({ message: "Register successfull" })
        }
    } catch (err) {
        console.log(err)
    }
}