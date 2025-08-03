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

    return (
        <div className="flex flex-col bg-white mx-40 my-10">
            <div className="pt-20 px-20">
                <CartList
                    cartData={cartData}
                    localCart={localCart}
                    setLocalCart={setLocalCart}
                    updateCart={updateCart} />
                    <CartTotal cartData={cartData} />
            </div>
            <button className="text-white bg-red-500 px-4 py-2 rounded-lg my-4 self-end mx-20 font-medium" onClick={updateMyCart}>Update Cart</button>
        </div>
    );
}
export default CartPage; 