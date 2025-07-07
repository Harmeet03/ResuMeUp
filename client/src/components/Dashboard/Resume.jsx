import ResumeForm from "./ResumeForm"
import ResumePreview from "./ResumePreview"
import { useEffect, useState } from "react";
import { profile } from '../../services/userAPI'
import { useNavigate } from 'react-router-dom';

const Resume = () => {
    const to = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        professionalTitle: '',
        email: '',
        phoneNumber: '',
        education: '',
        experience: '',
        skills: '',
        certifications: '',
        link: ''
    });

    const [admin, setAdmin] = useState(false)

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
        <>
            {admin && (<p className="text-center bg-gray-200 text-xl"> You're admin. Visit <span className="underline cursor-pointer" onClick={() => {to('/admin')}}> Admin Portal </span> </p>)}
            <div className="flex lg:flex-row flex-col p-4 sm:p-10 gap-10">
                <ResumeForm formData={formData} handleChange={handleChange}/>
                <ResumePreview formData={formData}/>
            </div>
        </>
    )
}

export default Resume