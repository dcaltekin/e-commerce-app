import React from "react";

function RegisterForm() {
  return (
    <div>
      <section className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-center items-center my-8 container mx-auto">
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="flex flex-col   w-full h-full p-10 lg:p-12 xl:p-16">
                <h4 className="w-full text-3xl font-bold">Register</h4>
                <p className="text-lg text-gray-500">
                  or, if you have an account you can{" "}
                  <a href="/login" className="text-blue-600 underline">
                    login
                  </a>
                </p>
                <div className="relative w-full mt-10 space-y-8">
                  <div className="relative">
                    <label className="font-medium text-gray-900">Name</label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">Email</label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">
                      Password
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative">
                    <a
                      href="#_"
                      className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                    >
                      Create Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterForm;
