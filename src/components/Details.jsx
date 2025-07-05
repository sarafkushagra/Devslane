import React from 'react';

export default function Details({ item, goBack }) {
    return (
        <div className="bg-gray-100  p-4">
            <button
                onClick={goBack}
                className=" px-4 py-2 bg-blue-500 text-white rounded">
                Back
            </button>

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
                        cum assumenda molestias laborum neque asperiores.</p>
                    <button class="mt-8 bg-white-400 border-2 h-12 w-16 ">1</button>
                    <button class="bg-red-500 text-white px-4 h-12 py-2 rounded">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
