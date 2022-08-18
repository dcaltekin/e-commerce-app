import React from "react";

function LifeQuality() {
  return (
    <div>
      <section className="py-8 leading-7 text-gray-900 bg-gray-100 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl  px-10 mx-auto border-solid lg:px-12">
          <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div className="box-border flex-1 text-center border-solid sm:text-left">
              <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                Boost Your Life Quality
              </h2>
              <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                Our service will help you maximize and boost your life quality.
              </p>
            </div>
            <a
              href="#products"
              className=" inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-indigo-600 border border-indigo-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl"
            >
              Let's Start Shopping
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LifeQuality;
