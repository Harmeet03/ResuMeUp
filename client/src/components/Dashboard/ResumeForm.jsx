const ResumeForm = ({ formData, handleChange }) => {
    return(
        <>
            <div className="rounded-2xl bg-gray-100 lg:w-1/2">
                    <h1 className="text-4xl text-center pt-8"> Resume Form </h1>
                    <form className="flex flex-col gap-2 m-auto w-2/3 py-16">
                        <p className="text-2xl"> Full Name </p>
                        <input className="border border-gray-300 rounded p-2 bg-white" type="textbox" required name="fullName" value={formData.fullName} onChange={handleChange}/>
                        <p className="text-2xl"> Professional Title </p>
                        <input className="border border-gray-300 rounded p-2 bg-white" type="textbox" required name="professionalTitle" value={formData.professionalTitle} onChange={handleChange}/>
                        <p className="text-2xl"> Email </p>
                        <input className="border border-gray-300 rounded p-2 bg-white" type="textbox" required name="email" value={formData.email} onChange={handleChange}/>
                        <p className="text-2xl"> Phone Number </p>
                        <input className="border border-gray-300 rounded p-2 bg-white" type="number" required name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                        <p className="text-2xl"> Education </p>
                        <input className="border border-gray-300 rounded p-2 bg-white" type="textbox" required name="education" value={formData.education} onChange={handleChange}/>
                        <p className="text-2xl"> Experience </p>
                        <input className="border border-gray-300 rounded p-2 bg-white" type="textbox" required name="experience" value={formData.experience} onChange={handleChange}/>
                        <p className="text-2xl"> Skills </p>
                        <input className="border border-gray-300 rounded p-2 bg-white" type="textbox" required name="skills" value={formData.skills} onChange={handleChange}/>
                        <p className="text-2xl"> Certifications </p>
                        <input className="border border-gray-300 rounded p-2 bg-white" type="textbox" required name="certifications" value={formData.certifications} onChange={handleChange}/>
                        <p className="text-2xl"> GitHub/LinkedIn Link (Any One) </p>
                        <input className="border border-gray-300 rounded p-2 bg-white" type="textbox" required name="link" value={formData.link} onChange={handleChange}/>
                    </form>
                </div>
        </>
    )
}

export default ResumeForm;