import { useNavigate } from "react-router-dom"
import logo from '../assets/logo.png';
import { useState } from "react";
import { register } from "../services/authAPI";

const Sign_Up = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        
        try{
            const res = await register(form);
            console.log('Registration successful:', res);
            setError(false);
            setLoading(false);

            // Redirect based on role
            if(res.role === 'admin'){
                to('/admin')
                setLoading(false);

            }
            else{
                to('/dashboard')
                setLoading(false);
            }
        }
        catch(e){
            console.log('Registeration failed')
            setError(true);
            setLoading(false);
        }
    }

    const to = useNavigate()
    return(
        <>
            <div className="flex flex-row">
                <div className="w-1/2 min-h-screen sm:flex flex-col justify-center text-center gap-5 bg-[url('assets/design.png')] bg-cover text-white hidden">
                    <h1 className="text-5xl px-2"> Build Your Resume in Minutes </h1>
                    <p className="text-xl px-4"> Create a stunning resume with a live preview and download it instantly as PDF. </p>
                </div>
                <form className="flex flex-col justify-center m-auto h-screen" onSubmit={handleSubmit}>
                    <img src={logo} className="w-40 mb-4"/>
                    <h1 className="text-4xl mb-6"> Sign Up </h1>
                    <input required onChange={handleChange} type="textbox" name="name" value={form.name} className="border p-2 rounded" placeholder="Enter Name"/>
                    <input required onChange={handleChange} type="textbox" name="email" value={form.email} className="border p-2 border-t-0 rounded" placeholder="Enter Email"/>
                    <input required onChange={handleChange} type="password" name="password" value={form.password} className="border p-2 border-t-0 mb-4 rounded" placeholder="Enter Password"/>
                    <p className="mb-6"> <input required type="checkbox" name="Agree"/> I agree with <span onClick={() => {to('/terms-condition')}} className="underline cursor-pointer">Terms and conditions.</span> </p>
                    {error && <p className="text-red-500 mb-4"> Registration failed. Please try again. </p>}
                    {loading ? (
                        <div className="bg-cyan-700 text-white p-4 rounded-xl cursor-pointer mb-4 flex flex-row justify-center"> <span className="border rounded-full border-3 border-x-white border-cyan-700 w-6 h-6 animate-spin"/> </div>
                    ) : (
                        <button className="bg-cyan-700 text-white p-4 rounded-xl cursor-pointer mb-4" type="submit"> Get Started </button>
                    )}
                    <p className="text-center underline cursor-pointer" onClick={() => {to('/sign-in')}}> Sign In </p>
                    <span className="fa fa-arrow-left cursor-pointer" onClick={() => {to('/')}}> Back </span>

                </form>
            </div>
        </>
    )
}

export default Sign_Up