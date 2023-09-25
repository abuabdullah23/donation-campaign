import React, { useState } from 'react';
import Container from '../Container/Container';
import logo from '../../assets/images/Logo.png'
import { BsList } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const closeNavbar = () => {
        setShow(false)
    }

    const navOptions = [
        { id: 1, path: '/', title: 'Home' },
        { id: 2, path: '/donation', title: 'Donation' },
        { id: 3, path: '/statistics', title: 'Statistics' },
    ]

    return (
        <div>
            <Container>
                <div className='flex justify-between items-center'>
                    <img src={logo} className='h-[48px] md:h-[72px]' alt="logo" />
                    <nav className='hidden lg:block'>
                        <ul className='flex items-center gap-6'>
                            {
                                navOptions.map((nav) => <li key={nav.id}>
                                    <ActiveLink to={nav.path} >{nav.title}</ActiveLink>
                                </li>)
                            }
                        </ul>
                    </nav>
                    <div onClick={() => setShow(!show)} className='bg-gray-200 p-2 rounded-md cursor-pointer block lg:hidden'>
                        {
                            show ? <MdClose /> : <BsList />
                        }
                    </div>
                </div>
            </Container >

            {/* for responsive navbar: conditional rendering */}
            <div className='relative'>
                <nav className={`${show ? 'left-0' : '-top-[300px]'} absolute top-0 bg-slate-200 w-full transition-all duration-500 lg:hidden`}>
                    <ul className='flex flex-col items-center gap-3 p-5'>
                        {
                            navOptions.map((nav) => <li key={nav.id} onClick={closeNavbar}>
                                <ActiveLink to={nav.path} >{nav.title}</ActiveLink>
                            </li>)
                        }
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;