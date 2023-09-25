import React from 'react';

const SingleCard = ({ item }) => {
    const { id, image, title, category, card_bg, category_bg, text_color, description, price } = item;

    console.log(card_bg);
    return (
        <div
            style={{ backgroundColor: `${card_bg}` }}
            className='w-full rounded-md cursor-pointer hover:scale-[103%] transition-all'>

            <img src={image} className='h-[172px] w-full object-cover rounded-t-md' alt="card image" />

            <div className='p-4 flex flex-col gap-2'>
                <h3
                    style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }}
                    className='w-fit py-1 px-2 rounded text-sm font-medium'>{category}</h3>

                <h2
                    style={{ color: `${text_color}` }}
                    className='text-lg font-semibold'>{title}</h2>
            </div>
        </div>
    );
};

export default SingleCard;