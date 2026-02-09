import { useNavigate } from "react-router-dom"

const Terms = () => {
    const to = useNavigate()

    return(
        <>
            <div className="py-10 px-4 lg:w-250 sm:m-auto">
                <span className="cursor-pointer fa fa-arrow-left mb-8" onClick={() => {to('/dashboard')}}> Back </span>
                <h1 className="sm:text-4xl font-bold mb-4 text-3xl"> 📄 Terms & Conditions - ResuMeUp </h1>
                <p className="text-xl mb-4"> Last updated: June 12, 2025 </p>
                <p className="text-2xl mb-4"> Welcome to ResuMeUp. <br/> By accessing or using our website, you agree to be bound by the following Terms and Conditions. </p>
                <div className="text-xl">
                    <h1 className="font-bold"> 1. Use of the Website </h1>
                    <p className="mb-8"> You must be at least 13 years old to use this service.<br/> You agree not to misuse the platform or attempt to access unauthorized data. </p>
                    
                    <h1 className="font-bold"> 2. Account Registration </h1>
                    <p className="mb-8"> 
                        You may need to register with your email and password to use certain features.<br/>
                        You are responsible for maintaining the confidentiality of your login credentials.<br/>
                        You agree to provide accurate and complete information during registration.
                    </p>

                    <h1 className="font-bold"> 3. User Data & Privacy </h1>
                    <p className="mb-8">
                        We collect limited personal data such as name, email, and encrypted password.<br/>
                        Your information is stored securely and is not shared with third parties without your consent.<br/>
                        By using this platform, you agree to our <span className="underline text-cyan-700 cursor-pointer" onClick={() => {to('/privacy-policy')}}>Privacy Policy.</span> 
                    </p>

                    <h1 className="font-bold"> 4. Intellectual Property </h1>
                    <p className="mb-8">  
                        The ResuMeUp platform and its content are protected by copyright and may not be reused or copied without permission.<br/>
                        Resumes generated are your personal content and remain your property.
                    </p>

                    <h1 className="font-bold"> 5. Limitation of Liability </h1>
                    <p className="mb-8">
                        We do our best to maintain uptime and data security, but we do not guarantee the website will be error-free or uninterrupted.<br/>
                        ResuMeUp is not responsible for any loss arising from the use of the site.
                    </p>

                    <h1 className="font-bold"> 6. Changes to These Terms </h1>
                    <p className="mb-8">
                        We may update these Terms from time to time. Continued use of the service after changes means you accept the new terms.
                    </p>

                    <h1 className="font-bold"> 7. Contact Us </h1>
                    <p>
                        If you have any questions, contact us at: <a className="text-blue text-cyan-700 underline" href="mailto:harmeet.dhanjal2003@gmail.com">harmeet.dhanjal2003@gmail.com</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Terms