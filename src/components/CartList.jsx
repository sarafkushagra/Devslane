import React from "react";
import CartRow from "./CartRow"

function CartList({ cartData, updateCart, localCart, setLocalCart }) {
    
    return (
        <>
            <div className="flex border-2 border-gray-200 font-bold text-gray-700 text-center bg-stone-100 py-2">
                <div className="flex-[0.5]">&nbsp;</div>
                <div className="flex-[0.5]">&nbsp;</div>
                <div className="flex-[3]">Product</div>
                <div className="flex-[1]">Price</div>
                <div className="flex-[1]">Quantity</div>
                <div className="flex-[1]">Subtotal</div>
            </div>

            <CartRow
                cartData={cartData}
                localCart={localCart}
                setLocalCart={setLocalCart}
                updateCart={updateCart} />
        </>
    );
}
export default CartList;