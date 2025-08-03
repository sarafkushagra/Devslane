import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { getProductData } from './api'; // ✅ import your API function

export default function CartTotal({ cartData }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids = Object.keys(cartData);

    const promises = ids.map(id => getProductData(id));

    Promise.all(promises).then(products => {
      setItems(products);
      setLoading(false);
    });
  }, [cartData]);

  // ✅ Calculate total from fetched product data and cart quantity
  function totalAmount() {
    return items.reduce((total, item) => {
      const quantity = cartData[item.id] || 0;
      return total + item.price * quantity;
    }, 0).toFixed(2);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='flex  justify-end bg-white  rounded-lg shadow-md'>

    
    <div className="my-8 w-full sm:w-[60%] lg:w-[30%] border-2 border-gray-400">
      <div className="border-b-2 border-gray-400 p-3">
        <h3 className="font-medium text-gray-700 text-lg">Cart Totals</h3>
      </div>

      <div className="flex justify-between items-center px-4 py-2 border-b-2 border-gray-300">
        <p className="text-gray-700 font-medium">Subtotal</p>
        <p>${totalAmount()}</p>
      </div>

      <div className="flex justify-between items-center px-4 py-2 border-b-2 border-gray-300">
        <p className="text-gray-700 font-medium">Total</p>
        <p>${totalAmount()}</p>
      </div>

      <div className="px-4 py-4">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition-all duration-300">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
    </div>
  );
}
