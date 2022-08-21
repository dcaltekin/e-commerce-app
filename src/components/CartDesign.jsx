import React from "react";
import { useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { IoIosTrash } from "react-icons/io";
import OrderSummary from "./OrderSummary";

function CartDesign() {
  const cart = useSelector((state) => state.cart);

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
                          <a href={`product/${item.id}`}>
                            <img className="h-24" src={item.image} alt="" />
                          </a>
                        </div>
                        <div className="flex flex-col gap-y-2 justify-between ml-0 mt-2 md:mt-0 md:ml-4 flex-grow ">
                          <span className="font-bold text-sm">
                            <a href={`product/${item.id}`}>{item.title}</a>
                          </span>
                          <span className="text-red-600 capitalize text-xs font-semibold">
                            {item.category}
                          </span>
                          <button
                            onClick={() => dispatch(removeItem(item.id))}
                            className="flex w-8 justify-start font-semibold hover:text-red-500 text-gray-500 text-xs"
                          >
                            <IoIosTrash size={25} />
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
                href="/home"
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
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDesign;
