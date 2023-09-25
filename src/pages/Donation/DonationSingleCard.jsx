import React from 'react';
import { Link } from 'react-router-dom';

const DonationSingleCard = ({ item }) => {
    const { id, image, title, category, card_bg, category_bg, text_color, price } = item;

    return (
        <div
            style={{ backgroundColor: card_bg }}
            className='w-full rounded-md' >

            <div className='flex items-center h-full'>
                <img className='w-1/3 h-full rounded-l-md object-cover' src={image} alt="image" />
                <div className='p-4 flex flex-col gap-1 md:gap-2'>
                    <h3
                        style={{ backgroundColor: category_bg, color: text_color }}
                        className='w-fit py-1 px-2 rounded text-sm font-medium'>{category}</h3>

                    <h2
                        style={{ color: text_color }}
                        className='text-lg font-semibold'>{title}</h2>

                    <h3 style={{ color: text_color }} className='text-base font-semibold' >${price}.00</h3>

                    <Link
                        to={`/donation/details/${id}`}
                        className='w-fit py-1 px-3 rounded text-white' style={{ backgroundColor: text_color }}>View Details</Link>
                </div>
            </div>
        </div >
    );
};

export default DonationSingleCard;