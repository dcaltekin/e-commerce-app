import React from "react";
import { useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartDesign() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto mt-10">
          <div className="flex flex-col md:flex-row shadow-md my-10">
            <div className="w-full  bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {cart.length > 0 ? cart.length + " Items" : "No Items Added"}
                </h2>
              </div>

              <div className="flex mt-10 mb-5 justify-between">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-7/12">
                  Product Details
                </h3>

                <h3 className="font-semibold  text-gray-600 text-xs uppercase ml-4 w-2/12 text-center">
                  Price
                </h3>
              </div>
              {cart.length > 0
                ? cart?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center  hover:bg-gray-100 -mx-8 px-6 py-5"
                    >
                      {" "}
                      <div className="flex w-full flex-col md:flex-row">
                        <div className="w-20">
                          <img className="h-24" src={item.image} alt="" />
                        </div>
                        <div className="flex flex-col gap-y-2 justify-between ml-0 mt-2 md:mt-0 md:ml-4 flex-grow ">
                          <span className="font-bold text-sm">
                            {item.title}
                          </span>
                          <span className="text-red-600 capitalize text-xs font-semibold">
                            {item.category}
                          </span>
                          <button
                            onClick={() => dispatch(removeItem(item.id))}
                            className="flex justify-start font-semibold hover:text-red-500 text-gray-500 text-xs"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-center  mr-8">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="text-3xl text-gray-600 w-3"
                        >
                          -
                        </button>

                        <input
                          className="mx-2 border text-center w-8"
                          type="text"
                          value={item.quantity}
                        />

                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="text-3xl text-gray-600 w-3"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-center font-semibold text-sm w-1/5">
                        {item.price}$
                      </span>
                    </div>
                  ))
                : "There is no item here. Go to Homepage for the shopping!"}

              <a
                href="#"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a>
            </div>

            <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items 3</span>
                <span className="font-semibold text-sm">590$</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
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
                  <span>$600</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDesign;
