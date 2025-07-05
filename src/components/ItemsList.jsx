import React from 'react'
import Items from './Items'
export default function ItemsList({ image, name, category, price, showDetails }) {
  return (
    <>
      <div className="bg-white m-12 mb-0 flex justify-end ">
        <label for="category" className=" text-black font-semibold "></label>
        <select name="category" id="category" className='mr-12 mt-4 border-4' >
          <option value="all">All</option>
          <option value="footwear">Footwear</option>
          <option value="cups">Cups</option>
          <option value="shirts">Shirts</option>
          <option value="headphones">Headphones</option>
        </select>
      </div>
      <div className="bg-white m-12 mt-0 mb-0  p-4 flex flex-wrap justify-center gap-z">
        <div className='flex flex-wrap gap-2'>
          {/* {items.map(function(item) { */}
          <Items name={name}
            category={category}
            price={price}
            image={image}
            showDetails={showDetails}
          />
        </div>
        <div className="bg-white flex m-12 pb-20  p-4 mt-0  gap-2">
          <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">1</button>
          <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">2</button>
          <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">3</button>
        </div>


      </div>
    </>
  );
}
