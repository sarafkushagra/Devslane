import React,{memo} from 'react';
import Items from './Items';
function ItemsList({ products }) {
    return (
        <div className='flex flex-wrap justify-center sm:grid grid-cols-3 place-items-center gap-2 space-y-2 md:space-y-0' >
            {products && products.map(function (item) {
                return (
                    <Items
                        key={item.id}
                        {...item}
                    />
                );
            })}
        </div>
    );
}
export default memo(ItemsList);