import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import Banner from '../../../components/Banner/Banner';

const DonationCard = () => {
    const [donation, setDonation] = useState([]);

    // search method
    const [searchValue, setSearchValue] = useState('');
    const [filteredDonation, setFilteredDonation] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => {
                setDonation(data)
                setFilteredDonation(data);
            })
    }, [])

    // Filter the donation data by search value
    useEffect(() => {
        if (searchValue) {
            const filteredData = donation.filter((item) =>
                item.category.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredDonation(filteredData);
        } else {
            setFilteredDonation(donation);
        }
    }, [searchValue, donation]);


    return (
        <>
            <Banner searchValue={searchValue} setSearchValue={setSearchValue} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-7'>
                {
                    filteredDonation.map((item) => <SingleCard
                        key={item.id}
                        item={item}
                    />)
                }
            </div>
        </>
    );
};

export default DonationCard;