import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.svg';
import Navbar from '../components/Home/Navbar';
import { useNavigate } from 'react-router-dom';
import DemoCard from '../components/Home/Cards/DemoCard';
import WhyCard from '../components/Home/Cards/WhyCard';
import Footer from '../components/Home/Footer';

const Home = () => {
    const to = useNavigate()

    return(
        <div className='text-foreground'>
            <Navbar/> 

            <main className='bg-background text-foreground min-h-screen'>
                <div className='flex w-full max-w-7xl mx-auto md:mt-19'>
                    <div className='flex flex-col gap-4 w-full md:w-1/2 px-8 py-40 md:py-50'>
                        <h1 className='text-6xl font-bold'> Build <span className='text-blue'>ATS-Friendly</span> Resumes in Minutes </h1>
                        <p className='text-xl text-foreground/40'> Stand out with a professionally designed resume that passes every applicant tracking system. No design skills needed. </p>
                        <button className='flex items-center cursor-pointer p-4 rounded-xl w-50 gap-2 bg-blue text-white' onClick={() => to('/sign-in')}> Create Resume free <ArrowRight size={20}/> </button>
                    </div>
    
                    <div className='w-1/2 flex justify-center items-center hidden md:flex'>
                        <DemoCard/>
                    </div>
                </div>   
    
                <hr/>
    
                <div className='bg-black py-16 px-4'>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-8 text-center'>
                            <h4 className='text-sm font-bold text-blue'> WHY RESUMEUP </h4>                    
                            <h2 className='text-4xl font-bold'> Everything You Need to Land the Job </h2>
                            <p className='text-foreground/40 text-xl max-w-lg mx-auto'> From first draft to download — a seamless experience designed for modern job seekers. </p>
                        </div>
                        
                        <div className='max-w-5xl mx-auto'>
                            <WhyCard/>
                        </div>
                    </div>
                </div>   
    
                <hr/>
    
                <div className='py-16 px-4'>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-8 text-center'>
                            <h4 className='text-sm font-bold text-blue'> HOW IT WORKS </h4>                    
                            <h2 className='text-4xl font-bold'> Three Steps to Your Dream Job </h2>
                            <p className='text-foreground/40 text-xl max-w-lg mx-auto'> Simple, fast, and designed for everyone — from freshers to senior executives. </p>
                        </div>
                    </div>
    
                    <div className='flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto text-center py-10'>
                        <div className='flex flex-col gap-2 items-center'>
                            <span className='bg-blue rounded-full px-4 py-2 text-xl font-bold'> 1 </span>
                            <h4 className='text-2xl font-bold'> Fill Your Details </h4>
                            <p className='text-sm text-foreground/40'> Enter your experience, education, and skills using our smart guided form. </p>
                        </div>
                        
                        <span> <ArrowRight className='rotate-90 sm:rotate-0'/> </span>
    
                        <div  className='flex flex-col gap-2 items-center'>
                            <span className='bg-blue rounded-full px-4 py-2 text-xl font-bold'> 2 </span>
                            <h4 className='text-2xl font-bold'> Choose a Template </h4>
                            <p className='text-sm text-foreground/40'> Pick from our professionally designed, ATS-tested resume templates. </p>
                        </div>
    
                        <span> <ArrowRight className='rotate-90 sm:rotate-0'/> </span>
    
                        <div  className='flex flex-col gap-2 items-center'>
                            <span className='bg-blue rounded-full px-4 py-2 text-xl font-bold'> 3 </span>
                            <h4 className='text-2xl font-bold'> Download PDF </h4>
                            <p className='text-sm text-foreground/40'> Export your resume as a polished PDF and start applying immediately. </p>
                        </div>
                    </div>
                </div>   
    
                <hr/>
    
                <div className='bg-black py-16 px-4'>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-8 text-center'>
                            <h4 className='text-sm font-bold text-blue'> TEMPLATES </h4>                    
                            <h2 className='text-4xl font-bold'> Professionally Designed Layouts </h2>
                            <p className='text-foreground/40 text-xl max-w-lg mx-auto'> Each template is crafted to impress — choose the one that fits your industry. </p>
                        </div>
                        
                        <div className='max-w-5xl mx-auto'>
    
                        </div>
                    </div>
                </div>     
                
                <div className='py-10 bg-black'>
                    <div className='flex flex-col gap-8 items-center text-center rounded-xl max-w-5xl mx-auto py-10 bg-blue/40'>
                        <h4 className='text-sm font-bold text-blue'> START FREE TODAY </h4>                    
                        <h2 className='text-4xl font-bold'> Ready to Land Your Dream Job? </h2>
                        <p className='text-foreground/40 text-xl'> Join 12,000+ professionals who built their resume with ResuMeUp. No credit card required. </p>
                        <button className='bg-foreground py-2 px-6 rounded-xl text-blue font-bold'> Launch Builder </button>
                    </div>
                </div>
    
            </main>
            
            <Footer/>
        </div>
    )
}

export default Home