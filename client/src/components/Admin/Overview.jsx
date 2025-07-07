import { useEffect, useState } from "react"
import { getFeedback } from "../../services/feedbackAPI"
import { useNavigate } from 'react-router-dom';

const Overview = () => {
    const to = useNavigate();

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
            <div className="bg-gray-100">
                <h1 className="text-center bg-gray-200 text-xl"> Admin Portal. Visit <span className="underline cursor-pointer" onClick={() => {to('/dashboard')}}> User Dashboard </span></h1>
                <div className="py-50 bg-gradient-to-r from-green-500 to-red-600 text-white">
                    <h1 className="text-7xl text-center"> Feedback Responses </h1>
                </div>
                <div className="px-10 py-10 lg:w-250 m-auto">
                    {feedbacks.map((feedback) => (
                        <div key={feedback._id} className="border border-gray-300 rounded-2xl p-5 mb-4 bg-white">
                            <h1 className="text-4xl font-bold"> {feedback.name} </h1>
                            <p className="pt-5 text-xl"> {feedback.message} </p>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex flex-row justify-center gap-4 items-center">
                            <span className="border-3 border-gray-100 border-y-cyan-700 w-6 h-6 rounded-full animate-spin"/>
                            <p className="text-2xl"> Fetching feedbacks... </p>
                        </div>
                    )}

                    {none && (
                        <p className="text-center text-4xl"> No feedbacks so far. </p>
                    )}
                    
                    {error && (
                        <p className="text-center text-4xl text-red-500"> Something went wrong. </p>
                    )}
                </div>
            </div>

        </>
    )
}

export default Overview