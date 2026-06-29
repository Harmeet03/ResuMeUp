import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react'

import logo from '../../assets/logo.svg';

import { profile } from '../../services/userAPI';
import { logout } from '../../services/authAPI'


const Navbar = () => {
    const to = useNavigate();
    const [data, setData] = useState('');
    const [open, setOpen] = useState(false)

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

    const handleLogout = async () => {
        try{
            const res = await logout();
            console.log("Logout successful");
            to('/');
        }
        catch(e){
            console.error("Error during logout:", e);
        }
    }

    return(
        <nav className='border-b border-foreground py-2 bg-background fixed top-0 left-0 w-full z-50 print:hidden'>
            <div className='flex items-center justify-around max-w-7xl mx-auto'>
                <div>
                    <img src={logo} className='w-50 sm:w-full'/>
                </div>

                <div className='flex gap-8 sm:gap-16 items-center'>
                    <span onClick={() => setOpen(!open)} className='text-[16px] sm:text-lg cursor-pointer text-foreground transition hover:text-white'> Profile  </span>
                    <LogOut className='cursor-pointer text-foreground hover:text-white transition' onClick={handleLogout}/>
                </div>
            </div>

            <div className={`
                    fixed right-4 top-20 px-4 py-8 flex flex-col gap-4 text-foreground rounded-xl bg-blue font-bold z-50 transition duration-500
                    ${open ? 'translate-x-0' : 'translate-x-80'}`
                }
            >
                <p className='text-sm text-white'> {data.name} </p>
                <p className='text-xs'> {data.email} </p>
            </div>
        </nav>
    )
}

export default Navbar;