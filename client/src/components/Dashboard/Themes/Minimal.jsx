import {Phone, MapPin, Mail, Link, File} from 'lucide-react'

const Minimal = ({ formData }) => {
    const hasData = Object.values(formData).some(value => value.trim() !== '');

    return(
        <div className='bg-card md:w-2/3 sm:rounded-xl py-8 px-4 print:rounded-none print:py-2'>
            <div className='flex flex-col gap-3 pb-8'>
                <div className='flex flex-col gap-1'>
                    {
                        formData.fullName ? (
                            <h2 className='text-4xl font-bold'> {formData.fullName} </h2>
                        ) : (
                            <h2 className='text-lg font-bold text-gray-500'> Your Name </h2>
                        )
                    }
                    <h4 className='text-blue text-lg'> {formData.professionalTitle} </h4>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                    {
                        formData.email && (
                            <a href={`mailto:${formData.email}`} className='flex items-center gap-1'> <Mail size={16}/> {formData.email} </a>
                        )
                    }

                    {
                        formData.phoneNumber && (
                            <a href={`tel:${formData.phoneNumber}`} className='flex items-center gap-1'> <Phone size={16} fill='red' className='text-logo'/> {formData.phoneNumber} </a>
                        )
                    }

                    {
                        formData.linkedIn && (
                            <a href={`https://${formData.linkedIn}`} className='flex items-center gap-1'> <Link size={16}/> {formData.linkedIn} </a>
                        )
                    }

                    {
                        formData.location && (
                            <p className='flex items-center gap-1'> <MapPin size={16} className='text-logo' fill='red'/> {formData.location} </p>
                        )
                    }
                </div>
            </div>

            <hr className='border-2 border-blue rounded-full'/>

            {
                hasData ? (
                    <div className='flex flex-col gap-4 py-4'>
                        {
                            formData.summary && (                                
                                <div className='flex flex-col gap-1 text-sm'>
                                    <div className='flex items-center gap-4'>
                                        <h6 className='text-xs text-blue font-bold'> PROFILE </h6>
                                        <div className='w-full border border-gray'/>
                                    </div>
                                    <p className='whitespace-pre-wrap'> {formData.summary} </p>
                                </div>
                            )
                        }

                        {
                            formData.education && (                                
                                <div className='flex flex-col gap-1 text-sm'>
                                    <div className='flex items-center gap-4'>
                                        <h6 className='text-xs text-blue font-bold'> EDUCATION </h6>
                                        <div className='w-full border border-gray'/>
                                    </div>
                                    <p className='whitespace-pre-wrap'> {formData.education} </p>
                                </div>
                            )
                        }

                        {
                            formData.experience && (                                
                                <div className='flex flex-col gap-1 text-sm'>
                                    <div className='flex items-center gap-4'>
                                        <h6 className='text-xs text-blue font-bold'> EXPERIENCE </h6>
                                        <div className='w-full border border-gray'/>
                                    </div>
                                    <p className='whitespace-pre-wrap'> {formData.experience} </p>
                                </div>
                            )
                        }

                        {
                            formData.projects && (                                
                                <div className='flex flex-col gap-1 text-sm'>
                                    <div className='flex items-center gap-4'>
                                        <h6 className='text-xs text-blue font-bold'> PROJECTS </h6>
                                        <div className='w-full border border-gray'/>
                                    </div>
                                    <p className='whitespace-pre-wrap'> {formData.projects} </p>
                                </div>
                            )
                        }

                        {
                            formData.skills && (
                                <div className='flex flex-col gap-1 text-sm'>
                                    <div className='flex items-center gap-4'>
                                        <h6 className='text-xs text-blue font-bold'> SKILLS </h6>
                                        <div className='w-full border border-gray'/>
                                    </div>
                                    <div className='flex gap-1 flex-wrap'>
                                        {
                                            formData.skills.split(/[,\n]+/).map((skill, index) => (
                                                <p key={index} className='border border-blue text-blue bg-blue/10 px-1 rounded-full'> {skill.trim()} </p>
                                            ))
                                        }                        
                                    </div>
                                </div>
                            )
                        }

                        {
                            formData.certifications && (                                
                                <div className='flex flex-col gap-1 text-sm'>
                                    <div className='flex items-center gap-4'>
                                        <h6 className='text-xs text-blue font-bold'> CERTIFICATIONS </h6>
                                        <div className='w-full border border-gray-300'/>
                                    </div>
                                    <p className='whitespace-pre-wrap'> {formData.certifications} </p>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div className='flex items-center flex-col text-center font-bold text-gray-300 py-16'>
                        <File size={40}/>
                        <h4 className='text-2xl'> Start filling in your details </h4>
                        <p> Your resume will appear here in real-time </p>
                    </div>
                )
            }
        </div>
    )
}

export default Minimal