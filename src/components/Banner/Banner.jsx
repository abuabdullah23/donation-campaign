import './Banner.css';
import bannerBg from '../../assets/images/banner-bg.jfif'
const Banner = () => {
    return (
        <div className='relative mb-16'>
            <img className='h-[260px] lg:h-[360px]  w-full object-cover opacity-[7%]' src={bannerBg} alt="banner bg" />

            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                <div className='flex flex-col gap-9 items-center '>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-center'>I Grow By Helping People In Need</h2>
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