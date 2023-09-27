import Container from '../Container/Container';
import logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink'

const Navbar = () => {
    return (
        <nav className='bg-white sticky top-0 z-10 drop-shadow-sm'>
            <Container>
                <div className="navbar flex items-center justify-between">
                    <Link to={'/'}>
                        <img className="h-11" src={logo} alt="logo" />
                    </Link>
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-6 px-1 text-base text-black font-medium">
                            <li><ActiveLink to={'/'}>Home</ActiveLink></li>
                            <li><ActiveLink to={'/donations'}>Donations</ActiveLink></li>
                            <li><ActiveLink to={'/statistics'}>Statistics</ActiveLink></li>
                        </ul>

                    </div>

                    <div className="dropdown p-0 -md:mr-8 lg:hidden">
                        <div className="drawer lg:hidden">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="drawer-button text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        className="inline-block w-5 h-5 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-60 md:w-80 h-full bg-base-200 text-base-content">
                                    <li><ActiveLink to={'/'}>Home</ActiveLink></li>
                                    <li><ActiveLink to={'/donations'}>Donations</ActiveLink></li>
                                    <li><ActiveLink to={'/statistics'}>Statistics</ActiveLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </nav >
    );
};

export default Navbar;