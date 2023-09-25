import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const DonationCard = () => {
    const [donation, setDonation] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-7'>
            {
                donation.map((item) => <SingleCard
                    key={item.id}
                    item={item}
                />)
            }
        </div>
    );
};

export default DonationCard;