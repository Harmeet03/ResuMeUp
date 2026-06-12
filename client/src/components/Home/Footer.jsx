import { Heart } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const to = useNavigate()
    return(
        <footer className='bg-background'>
            <div className='flex justify-around items-center py-4 max-w-6xl mx-auto'>
                <img src={logo} className='w-80'/>
                <div className='flex gap-8 text-xl'>
                    <p onClick={() => to('/privacy-policy')}> Privacy </p>
                    <p onClick={() => to('/terms-condition')}> Terms </p>
                </div>
            </div>
            <hr className='text-gray-800'/>
            <div className='flex justify-between max-w-2xl mx-auto text-white'>
                <p> © 2026 ResuMeUp. All rights reserved. </p>
                <p className='flex gap-1'> Made with <Heart fill='red' className='text-red-600'/> from India. Good luck! </p>
            </div>
        </footer>
    )
}

export default Footer