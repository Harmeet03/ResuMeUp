import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const NotFound = () => {
    const to = useNavigate();
    
    return(
        <div className='flex flex-col min-h-screen'>
            <div className='justify-items-center py-10'>
                <img src={logo} className="w-40 sm:w-80 m-auto"/>
            </div>
            <div className='text-center flex flex-col lg:gap-8 gap-4 m-auto px-2'>
                <p className='text-blue lg:text-4xl sm:text-3xl text-2xl'> The page you are looking for does not exist. </p>
                <p className='text-foreground lg:text-2xl sm:text-xl text-lg'> Please check the URL or return to the homepage. </p>
                <button className='bg-blue text-white p-2 rounded-xl cursor-pointer w-50 m-auto' onClick={() => to('/')}> Go Back </button>
            </div>
        </div>
    )
}

export default NotFound;