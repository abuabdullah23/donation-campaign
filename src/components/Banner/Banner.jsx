import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex items-center justify-center px-5 py-16 md:py-20 lg:py-32'>
                <div className='flex flex-col gap-9 items-center'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>I Grow By Helping People In Need</h2>
                    <div className='3/4 flex items-center'>
                        <input className='rounded-l-md py-2 px-4 border-[1px] border-[#DEDEDE] focus:outline-[#FF444A]' type="text" placeholder='Search here....' />
                        <button className='rounded-r-md py-2 px-4 border-[1px] border-[#FF444A] text-white bg-[#FF444A] hover:bg-[#e6363c]'>Search</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;