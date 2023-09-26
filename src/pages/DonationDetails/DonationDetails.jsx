import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { saveDonation } from '../../utils/localStorage';

const DonationDetails = () => {
    const allData = useLoaderData();
    const { id } = useParams();
    const data = allData.find((d) => d.id === parseInt(id))

    const { id: dataId, image, title, price, description, text_color } = data;

    const handleDonation = () => {
        saveDonation(dataId);
        toast.success('You have added donation successfully');
    }

    return (
        <div className='my-12'>
            <div className='w-full relative rounded-md'>
                <img className='w-full h-[300px] lg:h-[400px] object-cover rounded-md' src={image} alt="donation image" />
                <div className='absolute bg-[#0B0B0B80] w-full bottom-0 py-6 px-5 rounded-b-md'>
                    <button
                        onClick={() => handleDonation()}
                        style={{ backgroundColor: text_color }}
                        className='text-white text-lg font-semibold py-2 px-3 w-fit rounded'> Donate ${price}</button>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-5'>
                <h2
                    className='text-2xl font-bold'
                >{title}</h2>
                <p className='text-justify'><strong>Description:</strong> {description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;