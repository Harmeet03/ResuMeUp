import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { profile } from '../services/userAPI';
import { useState, useEffect } from 'react';

const Footer = () => {
    const to = useNavigate();
    const [data, setData] = useState('');

    const getProfile = async () => {
        try{
            const userProfile = await profile();
            setData(userProfile);
            console.log("Profile fetched successfully.");
        }
        catch(err){
            console.error("Error fetching profile:", err);
        }
    }

    useEffect(() => {
        getProfile();
    }, [])

    return(
        <>
            <footer className='flex flex-col items-center gap-5 p-8 border-t border-gray-300'>
                <div className=''>
                    <img src={logo} className="w-40"/>
                </div>
                <div className='flex flex-row justify-center gap-10'>
                    <a href='mailto:harmeet.dhanjal2003@gmail.com' className='cursor-pointer'> Contact </a>
                    <p onClick={() => {to('/terms-condition')}} className='cursor-pointer'> Terms </p>
                    <p onClick={() => {to('/privacy-policy')}} className='cursor-pointer'> Privacy </p>
                </div>
                <div className='border-y p-2 border-gray-400'>
                    <p> This website is for demonstration of my skills purpose only. No copyright intended </p>
                </div>
                <div>
                    <p> <b><i>Logged in as:</i></b> {data.email} </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;