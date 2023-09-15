import RegisterModel from "../models/RegisterSchema.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export async function Register(req, res) {

    let regex =
        /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    try {
        const { name, email, phoneNumber, password } = req.body
        let exists = await RegisterModel.findOne({ email });
        let emailValid = regex.test(email);
        if (exists) {
            return res.status(400).json({ message: "You have been already registerd" });
        } else if (name === "") {
            return res.status(400).json({ message: "please enter the Name" });
        } else if (email === "") {
            return res.status(400).json({ message: "please enter the Email" });
        } else if (!emailValid) {
            return res.status(400).json({ message: "Email is not valid" });
        } else if (phoneNumber === "") {
            return res.status(400).json({ message: "please enter the PhoneNumber " });
        } else if (phoneNumber.length !== 10) {
            return res.status(400).json({ message: "please enter the correct Number " });
        } else if (password === "") {
            return res.status(400).json({ message: 'please enter your passowrd' })
        } else if (password.length < 8) {
            return res.status(400).json({ message: "Password should be at least of length 8" })
        }
        else {
            const user = new RegisterModel({
                name,
                email,
                phoneNumber,
                password: bcrypt.hashSync(password),
            })
            await RegisterModel.create(user);
            return res.status(200).json({ message: "registerd successfully" });
        }
    } catch (err) {
        console.log(err)
    }
}

export async function getallRegister(req, res) {
    try {
        const allRegisters = await RegisterModel.find({});
        return res.status(200).send(allRegisters);
    } catch (err) {
        console.log(err)
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body
        const exist = await RegisterModel.findOne({ email })
        const isPasswordCorrect = bcrypt.compareSync(password, exist.password);
        if (email === "") {
            return res.status(400).json({ message: "Please enter a email" })
        } else if (password === "") {
            return res.status(400).json({ message: "Please enter password    " })
        } else if (!exist) {
            return res.status(400).json({ message: "Please sign up" })
        } else if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'worng password' })
        } else {
            const payload = {
                user: {
                    id: exist.id,
                },
            };
            jwt.sign(
                payload,
                "jwtSecret",
                { expiresIn: 30000 },
                async (err, token) => {
                    try {
                        if (err) throw err;
                        else {
                            await res.json({ message: "Login successfull", token });
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            );
            // return res.status(200).json({ message: "Login successfull" })
        }

    } catch (err) {
        console.log(err)
    }
}
