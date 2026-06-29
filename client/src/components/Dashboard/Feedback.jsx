import { useState } from "react";
import { Star } from 'lucide-react'

import { feedback } from '../../services/feedbackAPI'

const Feedback = () => {

    const [error, setError] = useState('')
    const [sent, setSent] = useState('')
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        message: '',
        rating: 0
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try{
            if(form.rating === 0){
                setError('Please select a rating.')
                return;
            }
            const res = await feedback(form)
            console.log('Feedback sent:', res)
            setForm({ name: '', message: '', rating: 0 })
            setSent(res?.message || 'Thank you for your feedback. It means a lot!')
            setError('')
        }
        catch(e){
            console.log('Feedback failed')
            setError(e.response?.data?.message || "Failed to sent!")
            setSent('')
        }
        finally{
            setLoading(false)
        }
    }
    
    return(
        <div className="py-20 px-4 print:hidden">
            <div className="max-w-2xl mx-auto">
                <div className="text-left py-4">
                    <h1 className="text-6xl text-foreground font-bold"> Feedback </h1> 
                    <p className="text-foreground"> We'd love to hear what you think about ResuMeUp. </p>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={form.name} name="name" className="focus:outline-none focus:border-2 focus:border-blue text-xl text-foreground font-bold border border-gray-500 rounded p-2 bg-white/20 p-4" placeholder="Your Name" type="textbox" required/>
                    
                    <textarea onChange={handleChange} value={form.message} name="message" className="focus:outline-none focus:border-2 focus:border-blue text-sm text-white border border-gray-500 rounded p-2 bg-white/20 p-4" placeholder="Tell us what you think..." type="textbox" required/>
                    
                    <div className="flex gap-2">
                        {
                            [1, 2, 3, 4, 5].map((star) => (
                                <button 
                                    key={star} onClick={
                                        () => {
                                                setForm((prev) => ({...prev, rating: star})); 
                                                setError('')
                                            }
                                    }
                                    className={`cursor-pointer text-foreground hover:text-blue`} type="button"
                                >
                                    <Star fill={`${star <= form.rating ? 'blue' : 'none'}`}/>
                                </button>
                            ))
                        }    
                    </div>

                    {
                        loading ? (
                            <button className="bg-blue/40 text-white font-bold p-4 rounded-lg sm:w-1/2 cursor-not-allowed" type="submit" disabled> Sending... </button>
                        ) : (
                            <button className="bg-blue text-white font-bold p-4 rounded-lg sm:w-1/2 cursor-pointer" type="submit"> Send </button>
                        )
                    }

                    {
                        error && (
                            <p className="text-center text-red-500 text-2xl border py-2 bg-red-500/20 rounded-xl"> {error} </p>
                        )
                    }

                    {
                        sent && (
                            <p className="text-center text-green-500 text-xl border py-2 bg-green-500/20 rounded-xl mt-4 px-2"> {sent} </p>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default Feedback;