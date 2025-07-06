import React from 'react'
import Items from './Items'
export default function ItemsList({ items }) {
  return (
    <>
      <div className="bg-white m-12 mt-0 mb-0  p-4 flex flex-wrap justify-center gap-z">
        {items && items.map(function (item, idx) {
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
