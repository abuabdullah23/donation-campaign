import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png'
import { BsList } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import ActiveLink from '../ActiveLink/ActiveLink';
import Container from '../Container/Container';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-white sticky top-0 z-10 drop-shadow-sm'>
            <Container>
                <div onClick={() => setOpen(!open)} className='py-2 md:hidden flex items-center gap-5'>
                    <span>{
                        open === true ?
                            <MdClose className="h-6 w-6" />
                            : <BsList className="h-6 w-6" />
                    }</span>
                    <Link to={'/'} onClick={() => setOpen(!open)}>
                        <img src={logo} className='h-[36px] md:h-[56px]' alt="logo" />
                    </Link>
                </div>

                <div className={`bg-white rounded-md md:flex md:justify-between md:items-center absolute md:static duration-1000 mt-6 pl-10 pe-10 pb-3 md:mt-0 md:pt-3 w-full ${open ? 'top-4' : '-top-[384px]'}`}>
                    <Link to={'/'} onClick={() => setOpen(!open)}>
                        <img src={logo} className='h-[36px] md:h-[56px]' alt="logo" />
                    </Link>

                    <ul onClick={() => setOpen(!open)} className='py-1 sm:hidden  md:flex gap-5 text-base font-normal'>
                        <li className='my-3'>
                            <ActiveLink to='/'>Home</ActiveLink>
                        </li>
                        <li className='my-3'>
                            <ActiveLink to='/donations'>Donations</ActiveLink>
                        </li>
                        <li className='my-3'>
                            <ActiveLink to='/statistics'>Statistics</ActiveLink>
                        </li>
                    </ul>
                </div>
            </Container>

        </nav>
    );
};

export default Navbar;