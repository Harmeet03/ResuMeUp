import { useNavigate } from "react-router-dom"
import {ArrowLeft} from 'lucide-react'
import logo from '../assets/logo.svg';

const Privacy = () => {
    const to = useNavigate()

    return(
        <>
            <div className="py-10 px-4 lg:w-250 sm:m-auto">
                <span className="cursor-pointer fa fa-arrow-left mb-8 fixed top-5 left-2 rounded-full bg-blue" onClick={() => {to('/dashboard')}}> <ArrowLeft/> </span>
                <div className="flex justify-center mb-8">
                    <img src={logo}/>
                </div>
                <h1 className="sm:text-6xl font-bold mb-4 text-3xl text-blue"> 📜 Privacy Policy </h1>
                <p className="text-xl mb-4"> Last updated: June 12, 2025 </p>
                <p className="text-sm mb-4 text-foreground"> At ResuMeUp, we respect your privacy and are committed to protecting the personal information you share with us. </p>
                <div className="text-xl">
                    <h1 className="font-bold text-foreground"> 1. Information We Collect </h1>
                    <p className="mb-8 text-[16px]"> 
                        We collect the following user data when you sign up or use our platform:
                        Name <br/>
                        Email address <br/>
                        Encrypted password <br/>
                        Resume data
                    </p>
                    
                    <h1 className="font-bold text-foreground"> 2. How We Use Your Data </h1>
                    <p className="mb-8 text-[16px]"> 
                        We use your data to: <br/>
                        Allow you to create, edit, and download resumes<br/>
                        Send important notifications<br/>
                        Improve our platform's experience<br/>
                        We do not sell or share your data with any third party.
                    </p>

                    <h1 className="font-bold text-foreground"> 3. Data Storage & Security </h1>
                    <p className="mb-8 text-[16px]">
                        Your personal data is stored securely. Passwords are encrypted using industry-standard hashing techniques. We take reasonable measures to protect your information.
                    </p>

                    <h1 className="font-bold text-foreground"> 4. Cookies and Analytics </h1>
                    <p className="mb-8 text-[16px]">  
                        We do not use cookies or third-party analytics tools at this time.
                    </p>

                    <h1 className="font-bold text-foreground"> 5. Your Rights </h1>
                    <p className="mb-8 text-[16px]">
                        You may request to update or delete your data at any time by contacting us at: <a className="text-blue text-cyan-700 underline" href="mailto:harmeet.dhanjal2003@gmail.com">harmeet.dhanjal2003@gmail.com</a>
                    </p>

                    <h1 className="font-bold text-foreground"> 6. Changes to This Policy </h1>
                    <p className="mb-8 text-[16px]">
                        We may update this Privacy Policy. If changes are made, we will update the “Last updated” date above.
                    </p>

                    <h1 className="font-bold text-foreground"> 7. Contact Us </h1>
                    <p className="mb-8 text-[16px]">
                        If you have any questions, contact us at: <a className="text-blue text-cyan-700 underline" href="mailto:harmeet.dhanjal2003@gmail.com">harmeet.dhanjal2003@gmail.com</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Privacy