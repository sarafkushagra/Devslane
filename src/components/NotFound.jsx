import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="fixed w-full h-full mt-20 flex flex-col items-center">
            <img
                className="w-full h-2/5 object-contain"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVxeMu625hqvn3x9wn8qBRoynvOnxAB7ec6w&s"
                alt="not found"
            />
            <h1 className='text-red-500 font-medium text-3xl'>Page not found !!</h1>
            <button className='text-white bg-red-500 py-2 px-4 rounded-lg mt-2'>
                <Link to={"/"}>Go to Home</Link>
            </button>
        </div>
    );
}