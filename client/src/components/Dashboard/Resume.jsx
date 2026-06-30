import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Printer } from 'lucide-react'

import { profile } from '../../services/userAPI'

import Form from "./Form"
import Preview from "./Preview"
import Minimal from './Cards/Minimal'
import Professional from './Cards/Professional'

const Resume = () => {
    const to = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        professionalTitle: '',
        email: '',
        phoneNumber: '',
        linkedIn: '',
        location: '',

        summary: '',

        education: '',
        
        experience: '',
        
        projects: '',

        skills: '',
        
        certifications: '',
    });

    const [admin, setAdmin] = useState(false)

    const [theme, setTheme] = useState(false)

    const checkAdmin = async () => {
        try{
            const res = await profile();
            if(res.role === 'admin'){
                setAdmin(true);
            }
            else{
                setAdmin(false);
            }
        }
        catch(e){
            console.error("Error checking admin status:", e);
            setAdmin(false);
        }
    }

    useEffect(() => {
        checkAdmin();
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <div className="max-w-7xl mx-auto">
            {
                admin && (
                    <p className="print:hidden text-center text-sm"> 
                        Visit <span className="text-foreground cursor-pointer" onClick={() => {to('/admin')}}> Admin Portal </span> 
                    </p>
                )
            }
            
            <div className='text-white flex items-center gap-8 text-lg pt-4 px-4 justify-center print:hidden'>
                <div className={`p-2 cursor-pointer ${theme === 'Minimal' ? 'border' : 'border-0'}`} onClick={() => setTheme('Minimal')}>
                    <Minimal/>
                    <p className='text-xs'> Minimal </p>
                </div>

                <div className={`p-2 cursor-pointer ${theme === 'Professional' ? 'border' : 'border-0'}`} onClick={() => setTheme('Professional')}>
                    <Professional/>
                    <p className='text-xs'> Professional </p>
                </div>
            </div>
            
            <div className="flex md:flex-row flex-col p-4 sm:py-4 gap-2 min-h-screen text-black w-full">
                <Form formData={formData} handleChange={handleChange}/>
                <Preview formData={formData} theme={theme}/>
            </div>

            <span className=" hover:bg-blue duration-300 fixed bottom-5 right-2 sm:bottom-10 sm:right-10 cursor-pointer rounded-full p-1 sm:p-2 z-40 bg-white print:hidden" onClick={() => window.print()}> 
                <Printer size={40} className="text-black"/> 
            </span>
        </div>
    )
}

export default Resume