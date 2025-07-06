import React from 'react'
import Items from './Items'
export default function ItemsList({ items}) {
  return (
    <>
      {/* <div className="bg-white m-12 mb-0 flex justify-end ">
        <label for="category" className=" text-black font-semibold "></label>
        <select name="category" id="category" className='mr-12 mt-4 border-4' >
          <option value="all">All</option>
          <option value="footwear">Footwear</option>
          <option value="cups">Cups</option>
          <option value="shirts">Shirts</option>
          <option value="headphones">Headphones</option>
        </select>
      </div> */}
      <div className="bg-white m-12 mt-0 mb-0  p-4 flex flex-wrap justify-center gap-z">
        {/* <div className='flex flex-wrap gap-2'> */}
        {items && items.map(function(item, idx) { 
          return (
            <Items 
              key={idx}
              name={item.name}
              category={item.category}
              price={item.price}
              image={item.image}
              showDetails={item.showDetails}
            />
          );
        })}
      </div>
    </>
  );
}
