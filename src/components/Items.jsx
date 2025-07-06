import React from 'react';

export default function Items({ image, name, category, price, showDetails }) {
    const handleDetails = () => {
        showDetails.handleShowDetails({ image, name, category, price });
    };

    return (
        <div className='bg-white p-6 w-84 m-4 shadow rounded'>
            <img src={image} alt={name} className="w-64 h-64 object-cover rounded" />
            <p className="text-gray-600 mt-2">{category}</p>
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            <p className="text-lg font-semibold mt-2">${price}</p>
            <button
                onClick={handleDetails}
                className='bg-red-300 border-2 border-red-500 text-white px-4 py-1 rounded mt-2 hover:bg-red-400'>
                MORE DETAILS
            </button>
        </div>
    );
}
