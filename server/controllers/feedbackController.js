import { errorHandler } from '../middleware/errorHandler.js';
import Feedback from '../models/Feedback.js';

export const feedback = async (req, res) => {
    try{
        const { name, message, rating } = req.body;

        const feedback = await Feedback.create({
            name,
            message,
            rating
        })

        console.log('Feedback received');

        return res.status(201).json({ 
            message: "Feedback recieved. Thankyou, it means a lot." 
        })
    }

    catch(e){
        errorHandler(e, req, res);
    }
}

export const getFeedback = async (req, res) => {
    try{
        const feedbacks = await Feedback.find({})
        return res.status(200).json(feedbacks);
    }
    catch(e){
        errorHandler(e, req, res);
    }
}