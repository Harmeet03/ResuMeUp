import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { profile } from '../services/userAPI';
import { logout } from '../services/authAPI'
import { useState, useEffect } from 'react';

const Navbar = () => {
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
        <>
            <div className='flex flex-row sm:justify-around px-2 justify-between items-center py-4 border-b border-gray-300'>
                <div>
                    <img src={logo} className='w-25 sm:w-30'/>
                </div>
                <p className='sm:text-4xl text-2xl'> {data.name} </p>
                <div>
                    <button className='bg-cyan-700 text-white sm:px-4 sm:py-2 sm:rounded-xl text-sm px-2 py-1 rounded-sm cursor-pointer' onClick={handleLogout}> Log Out </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;