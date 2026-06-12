import logo from '../../assets/logo.svg';
import { NavLink} from 'react-router-dom';
import { X, Menu } from 'lucide-react'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto'
    }, [open])

    return(
        <nav className='fixed top-0 w-full bg-background flex items-center justify-around border-b border-foreground py-2 z-50'>
            <img src={logo} alt='ResuMeUp'/>

            <div className='hidden sm:flex gap-8'>
                <NavLink to={'/sign-in'}> Login </NavLink>
                <NavLink to={'/sign-up'}> Register </NavLink>
                <NavLink to={'/about'}> Who am I? </NavLink>
            </div>

            <button onClick={() => setOpen(!open)} className='sm:hidden'>
                {
                    open ? <X/> : <Menu/>
                }
            </button>

            <div className={
                `h-screen bg-black/80 font-bold text-4xl fixed top-19 p-8 sm:hidden flex flex-col gap-16 w-full
                ${open ? 'block' : 'hidden'}`
            }>
                <NavLink to={'/sign-in'}> Login </NavLink>
                <NavLink to={'/sign-up'}> Register </NavLink>
                <NavLink to={'/about'}> Who am I? </NavLink>
                <NavLink to={'/terms-condition'}> Terms of service </NavLink>
                <NavLink to={'/privacy-policy'}> Privacy policy </NavLink>
            </div>
            
        </nav> 
    )
}

export default Navbar