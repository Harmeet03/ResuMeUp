import mongoose from "mongoose";
import { type } from "node:os";

const feedbackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        
        message: {
            type: String,
            required: true
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        }
    }, 
    
    {
        timestamps: true 
    }
);

export default mongoose.model("Feedback", feedbackSchema);