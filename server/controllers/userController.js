import { errorHandler } from "../middleware/errorHandler.js";

export const getUser = async (req, res) => {
   try{
        const { _id, name, email, role } = req.user;
        res.status(200).json({
            _id,
            name,
            email,
            role
        });
    } 
    catch(e){
        errorHandler(e, req, res);
        res.status(500).json({ message: 'Server error' });
    }
}