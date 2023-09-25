import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../../utils/localStorage';

const Donation = () => {
    const donationData = useLoaderData();
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedId = getStoredDonation();
        if (donationData.length > 0) {
            const donatedData = donationData.filter((d) => storedId.includes(d.id));
            setData(donatedData)
        }
    }, [donationData])

    return (
        <div>
            Donation Page: {data.length}
        </div>
    );
};

export default Donation;