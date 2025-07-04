import React from 'react';

export default function Details({ item, goBack }) {
    return (
        <div className="bg-gray-100  p-4">
            <button
                onClick={goBack}
                className=" px-4 py-2 bg-blue-500 text-white rounded">
                Back
            </button>
            {/* <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-8">
                <img src={item.image} alt={item.name} className="w-64 h-64 object-cover rounded shadow" />
                <div className="bg-white p-6 rounded shadow max-w-md">
                    <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
                    <p className="text-lg text-gray-700 mb-2">Category: {item.category}</p>
                    <p className="text-xl font-semibold mb-4">Price: ${item.price}</p>
                    <p className="text-gray-600">
                        This is a detailed view. Add your product description here or fetch additional details dynamically if required.
                    </p>
                </div>
            </div> */}

            <div class="flex p-12 m-12 bg-white rounded-lg  flex-col md:flex-row">
                <div class="w-1/2 h-120 object-fit flex justify-center mb-6 md:mb-0">
                    <img class="object-cover rounded-lg"
                        src={item.image} />
                </div>
                <div class="w-1/2 h-120 bg-white p-8 rounded-lg ">
                    <h1 class="text-5xl mb-6">{item.name}</h1>
                    <h2 class="text-3xl mb-4">Price: ${item.price}</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet error et illum magnam aut iure
                        necessitatibus vero corporis maxime id cupiditate quia perspiciatis facilis, in sapiente modi ipsa
                        cum assumenda molestias laborum neque asperiores. Illo ipsam rem consequatur consequuntur
                        repellendus in, unde aliquam? Voluptatem reprehenderit eius hic rem aut!</p>
                    <button class="mt-8 bg-white-400 border-2 h-12 w-16 ">1</button>
                    <button class="bg-red-500 text-white px-4 h-12 py-2 rounded">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
