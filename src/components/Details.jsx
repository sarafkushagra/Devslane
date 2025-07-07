import React from 'react';
import { Link , useParams } from 'react-router-dom';
import allData from './allData';
export default function Details({ item }) {
    const param = useParams();
    const itemId = param.id;

    console.log(itemId);

    let itemdisplay ;

    for (let i = 0; i < allData.length; i++) {
        const p = allData[i];
        if (p.id == itemId) {
            itemdisplay = p;
            break;
        }
    }
    return (
        <div className="fixed inset-0 bg-gray-100  flex items-center justify-center z-50">
            <div className="flex bg-white rounded-lg shadow-lg w-4/5 h-3/4">
                <div className="flex items-center justify-center w-1/2 h-full p-8">
                    <img
                        src={itemdisplay.image}
                        alt={itemdisplay.name}
                        className="object-contain rounded-lg w-full h-full max-h-[400px] max-w-[400px] bg-gray-50"
                    />
                </div>
                <div className="w-1/2 h-full p-8 flex flex-col">
                    <div>
                        <h1 className="text-5xl mb-6">{itemdisplay.name}</h1>
                        <h2 className="text-3xl mb-4">Price: ${itemdisplay.price}</h2>
                        <p className="mb-8">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet error et illum magnam aut iure
                            necessitatibus vero corporis maxime id cupiditate quia perspiciatis facilis, in sapiente modi ipsa
                            cum assumenda molestias laborum neque asperiores.
                        </p>
                        <div className="flex gap-4 mb-2 ">
                            <button className="bg-white border-2 h-12 w-16">1</button>
                            <button className="bg-red-500 text-white px-4 h-12 py-2 rounded">Add to Cart</button>
                        </div>
                    </div> <Link to='/'>
                    <button className="self-start mt-2 px-6 py-2 bg-blue-500 text-white rounded"
                    >
                     Back  
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}
