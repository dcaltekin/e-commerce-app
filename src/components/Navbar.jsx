import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  const [icon, setIcon] = useState(true);
  const handleIcon = () => {
    setIcon(!icon);
  };
  const [registerIcon, setRegisterIcon] = useState(true);
  const handleRegisterIcon = () => {
    setRegisterIcon(!registerIcon);
  };
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex items-center justify-around py-4 ">
        <h3 className="text-2xl">Logo</h3>

        <input
          type="text"
          placeholder="Search..."
          required
          className="w-5/12 ml-0 lg:ml-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  pl-6 p-2"
        />
        <ul
          className={
            icon
              ? "hidden md:flex gap-x-4"
              : "flex flex-col absolute bg-gray-300 mt-48 gap-y-8  p-8 justify-center items-center w-full transition-all"
          }
        >
          <div class="relative">
            <input type="checkbox" id="sortbox" class="hidden absolute" />
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
              className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-200 border border-gray-400 transition delay-75 ease-in-out -z-10"
            >
              <ul class="block text-gray-900 p-4">
                <li>
                  <Link to="login">
                    <button className="block px-8 py-2 w-full focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  mb-2">
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="register">
                    <button className="block px-8 w-full py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mb-2">
                      Register
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-x-1 z-100">
            <BsFillCartFill size={18} />
            <li>Cart</li>
          </div>
        </ul>
        <div className="sm:block md:hidden" onClick={handleIcon}>
          <i className={icon ? "fa-solid fa-bars" : "fa-solid fa-xmark"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
