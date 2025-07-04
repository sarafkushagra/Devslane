import React from 'react';

export default function Details({ item, goBack }) {
    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <button 
                onClick={goBack} 
                className="m-4 px-4 py-2 bg-blue-500 text-white rounded">
                Back
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-8">
                <img src={item.image} alt={item.name} className="w-64 h-64 object-cover rounded shadow" />
                <div className="bg-white p-6 rounded shadow max-w-md">
                    <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
                    <p className="text-lg text-gray-700 mb-2">Category: {item.category}</p>
                    <p className="text-xl font-semibold mb-4">Price: ${item.price}</p>
                    <p className="text-gray-600">
                        This is a detailed view. Add your product description here or fetch additional details dynamically if required.
                    </p>
                </div>
            </div>
        </div>
    );
}
