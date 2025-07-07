import { errorHandler } from "../middleware/errorHandler.js";
import generateToken from "../utils/generateToken.js"
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res) => {
    let { name, email, password } = req.body;
    const role = email === process.env.ADMIN_EMAIL ? 'admin' : 'user';
    
    try{
        const existingUser = await User.findOne({ email });
        
        if(existingUser){
            return res.status(400).json({ message: 'User already exists.' })
        }

        const safePassword = await bcrypt.hash(password, 16);
        
        const user = await User.create({
            name,
            email,
            password: safePassword,
            role
        })

        generateToken(res, user._id, user.role);

        res.status(201).json({
            name: user.name,
            role: user.role
        })

        password = undefined; // Clear password from response
        console.log('User registered successfully:', user.name, '\nRole:', user.role);
    }
    catch(e){
        errorHandler(e, req, res);
    }

}

export const login = async (req, res) => {
    let { email, password } = req.body;

    try{
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({ message: 'No user found.' })
        }

        let isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid credentials.' })
        }

       const token = generateToken(res, user._id, user.role);

        res.status(200).json({
            user: user.name,
            role: user.role
        })
        
        password = undefined; // Clear password from response
        console.log('User logged in successfully:', user.name, '\nRole:', user.role);

    }
    catch(e){
        errorHandler(e, req, res);
    }
}

export const logout = async (req, res) => {
    try{
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: rocess.env.NODE_ENV === 'production' ? 'None' : 'Lax',
        });
        res.status(200).json({ message: 'Logged out successfully.' }) 
    }
    catch(e){
        errorHandler(e, req, res);
    }
}