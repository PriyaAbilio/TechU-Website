import EnrollSchema from "../models/EnrollSchema.js";


export async function Enroll(req, res) {
    let regex =
        /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    try {
        const { name, email, phoneNumber, course, mode } = req.body
        let emailValid = regex.test(email);
        let exist = await EnrollSchema.findOne({ email })
        if (exist) {
            return res.status(400).json({ message: "You been already Enrolled" })
        } else if (name === "") {
            return res.status(400).json({ message: "please enter the name" })
        } else if (email === "") {
            return res.status(400).json({ message: "Please enter the email" })
        } else if (!emailValid) {
            return res.status(400).send({ message: "Invalid Email" })
        } else if (phoneNumber === "") {
            return res.status(400).json({ message: "Please Enter Phone Number" })
        } else if (phoneNumber.length !== 10) {
            return res.status(400).json({ message: "Enter valid phone number" })
        } else if (course === "") {
            return res.status(400).json({ message: 'Please Select Course' })
        } else if (mode === "") {
            return res.status(400).json({ message: "Select Mode" })
        }
        else {
            await EnrollSchema.create(req.body)
            return res.status(202).json({ message: "Enrolled Successfully" })
        }
    }
    catch (err) {
        console.log(err)
    }
}

export async function AllEnrolls(req, res) {
    try {
        const AllEnroll = await EnrollSchema.find({})
        return res.status(200).send(AllEnroll);
    } catch (err) {
        console.log(err)
    }
}