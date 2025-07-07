import { errorHandler } from '../middleware/errorHandler.js';
import Feedback from '../models/Feedback.js';

export const feedback = async (req, res) => {
    try{
        const { name, message } = req.body;

        const feedback = await Feedback.create({
            name,
            message
        })

        res.status(201).json({ feedback, message: "Feedback Recieved." })
        console.log('Feedback received');
    }

    catch(e){
        errorHandler(e, req, res);
    }
}

export const getFeedback = async (req, res) => {
    try{
        const feedbacks = await Feedback.find({})
        res.status(200).json(feedbacks);
    }
    catch(e){
        errorHandler(e, req, res);
    }
}