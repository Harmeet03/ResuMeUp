import { useRef, useState } from 'react';
import downloadPDF from '../../utils/downloadPDF'

const ResumePreview = ({ formData }) => {

    const resumeRef = useRef();
    const [empty, setEmpty] = useState(false);

    return(
        <>
            <div className="rounded-2xl lg:w-1/2">
                <h1 className="text-4xl text-center pt-8"> Resume Preview </h1>
                <div className="p-10" ref={resumeRef} style={{ backgroundColor: 'white', minHeight: '900px'}}>
                    <h1 className="text-3xl"> {formData.fullName} </h1>
                    <p className="text-xl py-2"> {formData.professionalTitle} </p>
                    <h1 className="text-3xl py-2" style={{ color: '#6B7280' }}> Email </h1>
                    <p className="text-xl py-2 mx-2"> {formData.email} </p>
                    <h1 className="text-3xl py-2" style={{ color: '#6B7280' }}> Phone Number </h1>
                    <p className="text-xl py-2 mx-2"> {formData.phoneNumber} </p>
                    <h1 className="text-3xl py-2" style={{ color: '#6B7280' }}> Education </h1>
                    <p className="text-xl py-2 mx-2"> {formData.education} </p>
                    <h1 className="text-3xl py-2" style={{ color: '#6B7280' }}> Experience </h1>
                    <p className="text-xl py-2 mx-2"> {formData.experience} </p>
                    <h1 className="text-3xl py-2" style={{ color: '#6B7280' }}> Skills </h1>
                    <p className="text-xl py-2 mx-2"> {formData.skills} </p>
                    <h1 className="text-3xl py-2" style={{ color: '#6B7280' }}> Certifications </h1>
                    <p className="text-xl py-2 mx-2"> {formData.certifications} </p>
                    <h1 className="text-3xl py-2" style={{ color: '#6B7280' }}> Link </h1>
                    <a className="text-xl py-2 mx-2 underline cursor-pointer" href={formData.link} target="_blank"> {formData.link} </a>
                    {empty && (
                        <p className='text-xl text-center'> Kindly fill every detail first </p>
                    )}
                </div>
                <button className="bg-cyan-700 text-white p-4 rounded-xl cursor-pointer w-3/4 m-auto block" onClick={
                    () => {
                        if(Object.values(formData).some(value => value === '' || value === null || value === undefined)){
                            setEmpty(true);
                        }
                        else{
                            downloadPDF(resumeRef, 'My_Resume.pdf');
                            setEmpty(false);
                        }
                    }
                }> Download PDF </button>
            </div>
        </>
    )
}

export default ResumePreview;