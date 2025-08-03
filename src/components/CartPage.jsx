import React, { useState, useEffect } from "react";
import CartList from "./CartList"
import CartTotal from "./CartTotal";

function CartPage({ cartData, updateCart }) {
    const [localCart, setLocalCart] = useState(cartData);

    useEffect(function () {
        setLocalCart(cartData);
    }, [cartData]);

    function updateMyCart() {
        updateCart(localCart);
    }

    function clearMyCart() {
        const newCart = {};
        updateCart(newCart);
        setLocalCart(newCart);
    }

    return (
        <>
        <div className="flex flex-col bg-white mx-40 mt-8 ">
            <div className="pt-20 px-20">
                <CartList
                    cartData={cartData}
                    localCart={localCart}
                    setLocalCart={setLocalCart}
                    updateCart={updateCart} />
            </div>
            <div className="flex flex-row gap-4 mr-20 justify-end">
                {Object.keys(localCart).length > 0 ? (
                    <>
                        <button className="text-white bg-red-500 px-4 py-2 rounded-lg my-4 self-end font-medium" onClick={clearMyCart}>
                            Clear Cart
                        </button>
                        <button className="text-white bg-red-500 px-4 py-2 rounded-lg my-4 self-end  font-medium" onClick={updateMyCart}>
                            Update Cart
                        </button>
                    </>
                ) : (
                    <p className="my-4 text-gray-600 font-medium">No items in cart. <a href="/" className="text-red-500 underline">Continue shopping</a></p>
                )}
            </div>
        </div>
        <CartTotal cartData={cartData} />
        </>
    );
}
export default CartPage; 