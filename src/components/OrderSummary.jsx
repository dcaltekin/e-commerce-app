import React from "react";
import { useSelector } from "react-redux";

function OrderSummary() {
  const cart = useSelector((state) => state.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <div className="w-full lg:w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          {cart.length} Items
        </span>
        <span className="font-semibold text-sm">
          {getTotal().totalPrice.toFixed(2)}$
        </span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        {getTotal().totalPrice >= 100 ? (
          <div>
            <div className="block p-2 text-center rounded-lg text-white w-full  text-sm bg-indigo-500">
              Free Shipping
            </div>
          </div>
        ) : (
          <div>
            <span className="text-sm">
              If you add{" "}
              <span className="text-red-500 font-bold">
                {100 - getTotal().totalPrice.toFixed(0) + 1}$
              </span>{" "}
              more, shipping is free!
            </span>
            <select className="block p-2 text-gray-600  text-sm mt-4">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
        )}
      </div>
      <div className="py-10">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full"
        />
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
        Apply
      </button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>
            {getTotal().totalPrice >= 100
              ? getTotal().totalPrice.toFixed(2)
              : 10 + getTotal().totalPrice}
            $
          </span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
