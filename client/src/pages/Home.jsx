import logo from '../assets/logo.png';
import resume from '../assets/resume.png';
import preview from '../assets/preview.png';
import pdf from '../assets/pdf.png';
import details from '../assets/details.png';
import customize from '../assets/customize.png';
import downlaod from '../assets/download.png';
import sample from '../assets/sample.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const to = useNavigate()
    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className='justify-items-center py-10'>
                <img src={logo} className="w-40 m-auto"/>
            </div>
            <div className="text-center py-5">
                <h1 className="px-2 text-4xl sm:text-5xl font-bold"> Build Your Resume in Minutes </h1>
                <p className="text-lg sm:text-xl my-6 px-4 sm:w-100 m-auto"> Create a stunning resume with a live preview and download it instantly as PDF. </p>
                <button className="bg-cyan-700 text-white p-4 rounded-xl cursor-pointer" onClick={() => {to('/sign-in')}}> Get Started </button>
            </div>

            <div className="grid sm:grid-cols-3 p-10 gap-5 justify-items-center text-center lg:w-250 m-auto grid-cols-2">
                <div className='justify-items-center'>
                    <img src={resume} className='w-20'/>
                    <h1 className="text-xl font-bold"> Easy Resume Form </h1>
                    <p className="text-lg"> Fill out your details quickly </p>
                </div>
                <div className='justify-items-center'>
                    <img src={preview} className='w-20'/>
                    <h1 className="text-xl font-bold"> Live Preview </h1>
                    <p className="text-lg"> See your resume as you type </p>
                </div>
                <div className='justify-items-center'>
                    <img src={pdf} className='w-20'/>
                    <h1 className="text-xl font-bold"> PDF Download </h1>
                    <p className="text-lg"> Instant export to a professional-looking PDF </p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:w-250 gap-10 m-auto py-10'>
                <div>
                    <h1 className='text-2xl font-bold text-center'> How It Works </h1>
                    <div className='text-center flex flex-row gap-1 sm:gap-5 p-10 items-center justify-center'>
                        <div className='justify-items-center'>
                            <img src={details} className='w-20 h-20'/>
                            <h1> Fill in your details </h1>
                        </div>
                        <span className='fa fa-arrow-right'/>
                        <div className='justify-items-center'>
                            <img src={customize} className='w-20 h-20'/>
                            <h1> Customize your resume </h1>
                        </div>
                        <span className='fa fa-arrow-right'/>
                        <div className='justify-items-center'>
                            <img src={downlaod} className='w-20 h-20'/>
                            <h1> Download and share </h1>
                        </div>
                    </div>
                    <p className='text-gray-600 text-center text-xl'> "This saved me hours! <br/> Loved the clean design." <br/> - Harmeet Singh </p>
                </div>
                <div className='justify-items-center'>
                    <img src={sample} className='w-75 m-auto'/>
                </div>
            </div>

            <div className='text-center py-10'>
                <h1 className='text-3xl font-bold my-6 px-4'> Start Building Your Resume Now! </h1>
                <button className='bg-cyan-700 text-white p-4 rounded-xl cursor-pointer' onClick={() => {to('/sign-in')}}> Launch Builder </button>
            </div>

            <footer className='flex flex-rows gap-10 justify-center py-5'>
                <a href="mailto:harmeet.dhanjal2003@gmail.com"> Contact </a>
                <a onClick={() => to('/terms-condition')} className='cursor-pointer'> Terms </a>
                <a onClick={() => to('/privacy-policy')} className='cursor-pointer'> Privacy </a>
            </footer>
        </>
    )
}

export default Home