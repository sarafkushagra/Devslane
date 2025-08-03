import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import { CiCircleRemove } from "react-icons/ci";


function CartRow({ cartData, updateCart,localCart,setLocalCart }) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        const ids = Object.keys(cartData);
        const promises = ids.map(function (id) {
            return getProductData(id);
        });

        Promise.all(promises).then(function (products) {
            setItems(products)
            setLoading(false);
        });
    }, [cartData]);

    function handleRemove(event) {
        const productId = event.currentTarget.getAttribute("productid");
        const newCart = { ...cartData };
        delete newCart[productId];
        updateCart(newCart);
        setLoading(true);
    }

    function handleChange(event) {
        const newQuantity = +event.target.value;
        const productId = event.target.getAttribute("productid");
        const newLocalCart = { ...localCart, [productId]: newQuantity };
        setLocalCart(newLocalCart);
    }


    if (loading) {
        return <Loading />
    }

    return (
        <>
            {items.map(function (item) {
                return (
                    <div key={item.id} className="flex border-2 border-gray-200 font-medium text-center gap-4">
                        <div className="flex flex-[0.5] items-center justify-center">
                            <button productid={item.id} onClick={handleRemove} className="text-4xl text-gray-300 hover:text-red-500"><CiCircleRemove /></button>
                        </div>
                        <div className="flex flex-[4] items-center">
                            <img src={item.thumbnail} alt={item.title} className="w-24 mr-16" />
                            <span className="text-red-500 font-semibold text-lg">{item.title}</span>
                        </div>
                        <div className="flex flex-[1] items-center justify-center font-bold text-gray-700">${item.price.toFixed(2)}</div>
                        <div className="flex flex-[1] items-center justify-center">
                            <input
                                productid={item.id}
                                className="w-12 border-1 border-gray-300 font-normal text-gray-700 px-2 h-8"
                                type="number"
                                value={localCart[item.id]}
                                onChange={handleChange} /></div>
                        <div className="flex flex-[1] items-center justify-center font-bold text-gray-700">${(localCart[item.id] * item.price).toFixed(2)}</div>
                    </div>
                );
            })}
        </>
    )
}

export default CartRow;