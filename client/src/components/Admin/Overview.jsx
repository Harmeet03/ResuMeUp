import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import { Star } from 'lucide-react'

import { getFeedback } from "../../services/feedbackAPI"
import useTitle from '../../hooks/useTitle'

const Overview = () => {
    const to = useNavigate();
    
    useTitle('Admin Dashboard | ResuMeUp')

    const [feedbacks, setFeedbacks] = useState([]);
    const [none, setNone] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchFeedback = async () => {
        try{
            const res = await getFeedback()
            console.log('Feedback Recieved:', res)
            setFeedbacks(res)
            setNone(false);
            setError(false);
            setLoading(false);
            
            if(res.length === 0){
                setNone(true);
                setError(false);
                setLoading(false);
            }
        }
        catch(e){
            console.log('Feedback Fetch Failed:', e)
            setNone(false);
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFeedback()
    }, [])

    return(
        <>
            <div className="bg-background">
                <h1 className="text-center text-sm py-1"> 
                    Visit <span className="text-foreground cursor-pointer" onClick={() => {to('/dashboard')}}> User Dashboard </span>
                </h1>
                
                <div className="py-8 bg-gradient-to-r from-blue to-black text-white">
                    <h1 className="text-7xl text-center"> User Feedbacks </h1>
                </div>

                <div className="px-10 py-10 lg:w-250 m-auto">
                    {
                        feedbacks.map((feedback) => (
                            <div key={feedback._id} className="rounded-2xl px-5 py-2 mb-4 bg-gray flex flex-col">
                                
                                <div className="flex justify-around items-center text-xs text-logo font-bold">
                                    <p> {new Date(feedback.createdAt).toLocaleDateString()} </p>
                                    <p> {new Date(feedback.createdAt).toLocaleTimeString()} </p>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <h1 className="text-4xl font-bold"> {feedback.name} </h1>
                                    <p className="text-blue flex items-center text-2xl"> 
                                        {feedback.rating} <Star size={24} fill="blue" className="text-blue"/> 
                                    </p>
                                </div>
                                
                                <p className="pt-5 text-xl text-foreground"> {feedback.message} </p>

                            </div>
                        ))
                    }

                    {
                        loading && (
                            <div className="flex flex-row justify-center gap-4 items-center">
                                <span className="border-3 border-transparent border-y-blue w-6 h-6 rounded-full animate-spin"/>
                                <p className="text-2xl"> Fetching feedbacks... </p>
                            </div>
                        )
                    }

                    {
                        none && (
                            <p className="text-center text-lg"> No feedbacks so far. </p>
                        )
                    }
                    
                    {
                        error && (
                            <p className="text-center text-lg text-red-500"> Something went wrong. </p>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Overview