import { useState } from 'react';

import { File, GraduationCap, Medal, Rocket, Settings, ShoppingBag, User } from 'lucide-react'

const Form = ({ formData, handleChange }) => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)
    const [open7, setOpen7] = useState(false)

    return(
        <div className="print:hidden flex flex-col gap-2 md:w-1/3">

            <div>
                <span onClick={() => setOpen1(!open1)} className={`flex cursor-pointer items-center p-4 gap-2 text-xl bg-card/90 ${open1 ? 'rounded-t-xl' : 'rounded-xl'}`}>
                    <User/>
                    <h4> Personal Information </h4>
                </span>

                <hr className={`border-foreground ${open1 ? 'block' : 'hidden'}`}/>

                <form className={`bg-card rounded-b-xl p-4 flex flex-col gap-2 ${open1 ? 'block' : 'hidden'}`}>
                    <h5 className='text-gray-500 text-xs font-bold'> FULL NAME </h5>
                    <input className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='fullName' value={formData.fullName} placeholder='John Doe'/>
                    <h5 className='text-gray-500 text-xs font-bold'> JOB TITLE </h5>
                    <input className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='professionalTitle' value={formData.professionalTitle} placeholder='Software Engineer'/>

                    <div className='flex gap-2 justify-around'>
                        <div>
                            <h5 className='text-gray-500 text-xs font-bold'> EMAIL </h5>
                            <input className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='email' value={formData.email} placeholder='john@doe.com'/>
                        </div>
                        <div>
                            <h5 className='text-gray-500 text-xs font-bold'> PHONE </h5>
                            <input className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='number' onChange={handleChange} name='phoneNumber' value={formData.phoneNumber} placeholder='+91 9898989898'/>
                        </div>
                    </div>

                    <div className='flex gap-2 justify-around'>
                        <div>
                            <h5 className='text-gray-500 text-xs font-bold'> LINKEDIN </h5>
                            <input className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='linkedIn' value={formData.linkedIn} placeholder='linkedin.com/in/your_name'/>
                        </div>
                        <div>
                            <h5 className='text-gray-500 text-xs font-bold'> LOCATION </h5>
                            <input className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='location' value={formData.location} placeholder='Delhi, India'/>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <span onClick={() => setOpen2(!open2)} className={`flex cursor-pointer items-center p-4 gap-2 text-xl bg-card/90 ${open2 ? 'rounded-t-xl' : 'rounded-xl'}`}>
                    <File/>
                    <h4> Professional Summary </h4>
                </span>
                
                <hr className={`border-foreground ${open2 ? 'block' : 'hidden'}`}/>

                <form className={`bg-card rounded-b-xl p-4 flex flex-col gap-2 ${open2 ? 'block' : 'hidden'}`}>
                    <h5 className='text-gray-500 text-xs font-bold'> SUMMARY </h5>
                    <textarea className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='summary' value={formData.summary} placeholder='A result-driven software engineer with 4+ years of experience...'/>
                </form>
            </div>

            <div>
                <span onClick={() => setOpen3(!open3)} className={`flex cursor-pointer items-center p-4 gap-2 text-xl bg-card/90 ${open3 ? 'rounded-t-xl' : 'rounded-xl'}`}>
                    <GraduationCap/>
                    <h4> Education </h4>
                </span>
                
                <hr className={`border-foreground ${open3 ? 'block' : 'hidden'}`}/>

                <form className={`bg-card rounded-b-xl p-4 flex flex-col gap-2 ${open3 ? 'block' : 'hidden'}`}>
                    <h5 className='text-gray-500 text-xs font-bold'> EDUCATION DETAILS </h5>
                    <textarea className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='education' value={formData.education} placeholder={"B.Tech Computer Science — IIT Delhi\n2018 – 2022 | CGPA: 8.9/10"}/>
                </form>
            </div>

            <div>
                <span onClick={() => setOpen4(!open4)} className={`flex cursor-pointer items-center p-4 gap-2 text-xl bg-card/90 ${open4 ? 'rounded-t-xl' : 'rounded-xl'}`}>
                    <ShoppingBag/>
                    <h4> Experience </h4>
                </span>
                
                <hr className={`border-foreground ${open4 ? 'block' : 'hidden'}`}/>

                <form className={`bg-card rounded-b-xl p-4 flex flex-col gap-2 ${open4 ? 'block' : 'hidden'}`}>
                    <h5 className='text-gray-500 text-xs font-bold'> WORK EXPERIENCE </h5>
                    <textarea className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='experience' value={formData.experience} placeholder={"Software Engineer — Google\nJan 2022 – Present\n• Built scalable microservices...\n• Reduced latency by 40%..."}/>
                </form>
            </div>

            <div>
                <span onClick={() => setOpen5(!open5)} className={`flex cursor-pointer items-center p-4 gap-2 text-xl bg-card/90 ${open5 ? 'rounded-t-xl' : 'rounded-xl'}`}>
                    <Rocket/>
                    <h4> Projects </h4>
                </span>
                
                <hr className={`border-foreground ${open5 ? 'block' : 'hidden'}`}/>

                <form className={`bg-card rounded-b-xl p-4 flex flex-col gap-2 ${open5 ? 'block' : 'hidden'}`}>
                    <h5 className='text-gray-500 text-xs font-bold'> PROJECTS </h5>
                    <textarea className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='projects' value={formData.projects} placeholder={"ResumeAI — AI-powered resume builder\nReact, Node.js, OpenAI API\n• Generated 10k+ resumes in launch month"}/>
                </form>
            </div>

            <div>
                <span onClick={() => setOpen6(!open6)} className={`flex cursor-pointer items-center p-4 gap-2 text-xl bg-card/90 ${open6 ? 'rounded-t-xl' : 'rounded-xl'}`}>
                    <Settings/>
                    <h4> Skills </h4>
                </span>
                
                <hr className={`border-foreground ${open6 ? 'block' : 'hidden'}`}/>

                <form className={`bg-card rounded-b-xl p-4 flex flex-col gap-2 ${open6 ? 'block' : 'hidden'}`}>
                    <h5 className='text-gray-500 text-xs font-bold'> Skills {'(COMMA SEPERATED)'} </h5>
                    <textarea className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='skills' value={formData.skills} placeholder="React, TypeScript, Node.js, Python, AWS, Docker"/>
                </form>
            </div>

            <div>
                <span onClick={() => setOpen7(!open7)} className={`flex cursor-pointer items-center p-4 gap-2 text-xl bg-card/90 ${open7 ? 'rounded-t-xl' : 'rounded-xl'}`}>
                    <Medal/>
                    <h4> Certifications </h4>
                </span>
                
                <hr className={`border-foreground ${open7 ? 'block' : 'hidden'}`}/>

                <form className={`bg-card rounded-b-xl p-4 flex flex-col gap-2 ${open7 ? 'block' : 'hidden'}`}>
                    <h5 className='text-gray-500 text-xs font-bold'> CERTIFICATIONS </h5>
                    <textarea className='w-full px-4 py-2 bg-black/10 rounded-lg focus:outline-none focus:border focus:border-foreground' type='textbox' onChange={handleChange} name='certifications' value={formData.certifications} placeholder={"AWS Solutions Architect — Amazon, 2023\nGoogle Cloud Professional — Google, 2022"}/>
                </form>
            </div>
        </div>
    )
}

export default Form;