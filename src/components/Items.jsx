import React from 'react'

export default function Items(items) {
  return (
    <div className='bg-white p-6  w-84'>
      <img src={items.image} alt={items.name} className="w-64 h-64 object-fill" />
        <p className="text-gray-600 mt-2">{items.category}</p>
        <h2 className="text-xl font-bold mt-4">{items.name}</h2>
        <p className="text-lg font-semibold mt-2">${items.price}</p>
    </div>
  )
}
