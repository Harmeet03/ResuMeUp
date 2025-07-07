import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const NotFound = () => {
    const to = useNavigate();
    
    return(
        <>
            <div className='justify-items-center py-10'>
                <img src={logo} className="w-25 sm:w-40 m-auto"/>
            </div>
            <div className='text-center flex flex-col lg:gap-16 sm:gap-8 gap-4 m-auto px-2'>
                <p className='text-gray-500 lg:text-6xl sm:text-5xl text-4xl'> The page you are looking for does not exist. </p>
                <p className='text-gray-500 lg:text-4xl sm:text-3xl text-2xl'> Please check the URL or return to the homepage. </p>
                <button className='bg-cyan-700 text-white p-2 rounded-xl cursor-pointer w-50 m-auto' onClick={() => to('/')}> Go Back </button>
            </div>
        </>
    )
}

export default NotFound;