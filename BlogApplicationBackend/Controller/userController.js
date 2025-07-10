import User from "../Model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: './config.env' });

const JWT_SECRET = process.env.JWT_SECRET

export const register = async (req, res) => {
    try {
        const { email, password, firstName, lastName, dateOfBirth } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({email, password: hashedPassword, firstName, lastName, dateOfBirth});
        res.status(201).json({message: "User has been registered successfully"});
    } catch(error){
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email, password);
        // Check if user exists
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "Invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: "Invalid email or password"});
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });


        res.status(200).json({ token, user: { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName, dateOfBirth: user.dateOfBirth } });
    } catch(error){
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}