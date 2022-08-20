import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineUp } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import TopCampaign from "./TopCampaign";
import { useSelector } from "react-redux";
function Navbar() {
  const [icon, setIcon] = useState(true);
  const handleIcon = () => {
    setIcon(!icon);
  };
  const [registerIcon, setRegisterIcon] = useState(true);
  const handleRegisterIcon = () => {
    setRegisterIcon(!registerIcon);
  };
  const cart = useSelector((state) => state.cart);

  // const getTotalQuantity = () => {
  //   let total = 0;
  //   cart.forEach((item) => {
  //     total += item.quantity;
  //   });
  //   return total;
  // };

  return (
    <div className="sticky top-0 z-50">
      <TopCampaign />
      <div className="bg-gray-200 ">
        <div className=" md:container md:mx-auto flex items-center justify-between py-4 ">
          <a href="/">
            <h3 className=" container mx-auto text-2xl">CLTKN</h3>
          </a>

          <ul
            className={
              icon
                ? "hidden md:flex gap-x-4"
                : "flex flex-col absolute bg-gray-300 mt-48 gap-y-8  p-8 justify-center items-center w-full transition-all z-50"
            }
          >
            <div className="relative ">
              <input type="checkbox" id="sortbox" className="hidden absolute" />
              <div onClick={handleRegisterIcon}>
                <label
                  htmlFor="sortbox"
                  className="flex items-center space-x-0.5 cursor-pointer"
                >
                  <FaUserAlt />
                  <span>Register/Login</span>
                  {registerIcon ? <AiOutlineDown /> : <AiOutlineUp />}
                </label>
              </div>

              <div
                id="sortboxmenu"
                className="absolute mt-1 right-1 top-full min-w-max shadow rounded hidden bg-gray-200 border border-gray-400 transition delay-75 ease-in-out -z-50"
              >
                <ul className="block text-gray-900 p-4">
                  <li>
                    <a href="/login">
                      <button className="block px-8 py-2 w-full focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  mb-2">
                        Login
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="/register">
                      <button className="block px-8 w-full py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mb-2">
                        Register
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink to="/cart">
              <div className="flex items-center gap-x-1 z-100 cursor-pointer">
                <BsFillCartFill size={18} />
                <li>Cart</li>
                <span>{`(${cart.length})` || "(0)"}</span>
              </div>
            </NavLink>
          </ul>
          <div
            className="sm:block md:hidden text-2xl mr-4 md:mr-0"
            onClick={handleIcon}
          >
            <i className={icon ? "fa-solid fa-bars" : "fa-solid fa-xmark"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
