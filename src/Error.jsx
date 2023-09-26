import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='px-16 py-12 lg:py-20 gap-5'>
            <div className='text-center w-full p-5 flex items-center justify-center'>
                <div>
                    <h2 className='text-7xl font-bold mb-10 text-[#ff5100]'>Oops!</h2>
                    <h3 className='text-3xl font-semibold mb-10'>Sorry, an unexpected error has occurred.</h3>
                    <Link to='/' className='bg-red-500 hover:bg-red-400 py-3 px-6 rounded-md text-white text-xl font-bold'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;