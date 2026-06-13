import { Heart } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const to = useNavigate()
    return(
        <footer className='bg-background'>
            <div className='flex flex-col sm:flex-row justify-around items-center py-4 max-w-6xl mx-auto'>
                <img src={logo} className='w-80'/>
                <div className='flex flex-col sm:flex-row gap-8 text-xl'>
                    <p className='hover:underline cursor-pointer' onClick={() => to('/privacy-policy')}> Privacy </p>
                    <p className='hover:underline cursor-pointer' onClick={() => to('/terms-condition')}> Terms </p>
                </div>
            </div>

            <hr className='text-gray-800'/>
            
            <div className='flex flex-col gap-2 text-center sm:flex-row justify-between max-w-2xl mx-auto text-white'>
                <p> © 2026 ResuMeUp. All rights reserved. </p>
                <p className='flex gap-1 justify-center'> Made with <Heart fill='red' className='text-red-600'/> by Harmeet Singh. </p>
            </div>

            <hr className='text-gray-800'/>
            
            <div className='flex justify-center gap-8 text-xs text-foreground py-2'>
                <a target='__' href='https://linkedin.com/in/harmeetsinghdhanjal' className='cursor-pointer hover:underline'> LinkedIn </a>
                <a target='__' href='https://github.com/Harmeet03' className='cursor-pointer hover:underline'> GitHub </a>
                <a target='__' href='https://harmeets.dev' className='cursor-pointer hover:underline'> Portfolio </a>
            </div>
        </footer>
    )
}

export default Footer