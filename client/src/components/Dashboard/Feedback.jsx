import { useState } from "react";
import { feedback } from '../../services/feedbackAPI'

const Feedback = () => {

    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)

    const [form, setForm] = useState({
        name: '',
        message: ''
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
        try{
            const res = await feedback(form)
            console.log('Feedback sent:', res)
            setSent(true)
            setForm({ name: '', message: '' })
            setError(false)
        }
        catch(e){
            console.log('Feedback failed')
            setError(true)
            setSent(false)
        }
    }
    
    return(
        <>
            <div className="text-center py-20">
                <h1 className="text-6xl"> Feedback </h1> 
                <form className="flex flex-col gap-4 m-auto lg:w-1/2 px-10 pt-16" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={form.name} name="name" className="text-xl border border-gray-300 rounded p-2 bg-white p-4" placeholder="Your Name" type="textbox" required/>
                    <textarea onChange={handleChange} value={form.message} name="message" className="text-xl border border-gray-300 rounded p-2 bg-white p-4" placeholder="Your Message" type="textbox" required/>
                    <button className="bg-cyan-700 text-white p-4 rounded-xl cursor-pointer" type="submit"> SEND </button>
                    {error && !sent && (
                        <p className="text-center text-red-500 text-2xl"> Something went wrong! </p>
                    )}
                    {sent && !error && (
                        <p className="text-center text-green-500 text-2xl"> Thankyou for your feedback. It means a lot! </p>
                    )}
                </form>
            </div>
        </>
    )
}

export default Feedback;