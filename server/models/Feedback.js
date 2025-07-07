import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }, 
    
    {
        timestamps: true 
    }
);

export default mongoose.model("Feedback", feedbackSchema);