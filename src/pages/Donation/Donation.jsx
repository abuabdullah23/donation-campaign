import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../../utils/localStorage';
import DonationSingleCard from './DonationSingleCard';

const Donation = () => {
    const donationData = useLoaderData();
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedId = getStoredDonation();
        if (donationData.length > 0) {
            const donatedData = donationData.filter((d) => storedId.includes(d.id));
            setData(donatedData)
        }
    }, [donationData])

    const handleShowAllData = () => {
        setDataLength(data.length);
    }

    return (
        <div className='py-12 md:py-16 lg:py-20'>
            {
                data.length > 0
                    ? <>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mb-7'>
                            {
                                data.slice(0, dataLength).map((item) => <DonationSingleCard
                                    key={item.id}
                                    item={item}
                                />)
                            }
                        </div>
                        <div className={`flex justify-center mt-10 ${dataLength === data.length && 'hidden'}`}>
                            <button onClick={handleShowAllData} className='py-2 px-4 bg-[#009444] hover:bg-[#009419] rounded-md text-white text-lg font-semibold'>See All</button>
                        </div>
                    </>

                    : <>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col gap-5 items-center'>
                                <h2 className='text-2xl font-semibold'>You have not donate yet.</h2>
                                <Link to={'/'} className='w-fit py-2 px-4 rounded-md bg-[#e71212] hover:bg-[#fd2e2e] text-white text-lg font-semibold'>please donate</Link>
                            </div>
                        </div>
                    </>
            }
        </div>

    );
};

export default Donation;