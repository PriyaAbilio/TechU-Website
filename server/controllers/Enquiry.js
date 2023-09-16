import EnquirySchema from '../models/EnquirySchema.js'


export async function Enquiry(req, res) {
    let regex =
        /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    try {
        const { name, email, mobile, course, message } = req.body
        let emailValid = regex.test(email);
        let exist = await EnquirySchema.findOne({ email })
        if (exist) {
            return res.status(400).json({ message: "You been already Enrolled" })
        } else if (name === "") {
            return res.status(400).json({ message: "please enter the name" })
        } else if (email === "") {
            return res.status(400).json({ message: "Please enter the email" })
        } else if (!emailValid) {
            return res.status(400).send({ message: "Invalid Email" })
        } else if (mobile === "") {
            return res.status(400).json({ message: "Please Enter Phone Number" })
        } else if (mobile.length !== 10) {
            return res.status(400).json({ message: "Enter valid phone number" })
        } else if (course === "") {
            return res.status(400).json({ message: 'Please Select Course' })
        }
        else {
            await EnquirySchema.create(req.body)
            return res.status(202).json({ message: "Successfull" })
        }
    }
    catch (err) {
        console.log(err)
    }
}

export async function AllEnquiries(req, res) {
    try {
        const AllEnquiry = await EnquirySchema.find({})
        return res.status(200).send(AllEnquiry);
    } catch (err) {
        console.log(err)
    }
}