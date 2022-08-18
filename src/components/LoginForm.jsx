import React from "react";

function LoginForm() {
  return (
    <div>
      <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row container justify-center">
            <div className="w-full  md:w-3/5">
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 className="mb-6 text-2xl font-medium text-center">
                  Sign in to your Account
                </h3>
                <input
                  type="text"
                  name="email"
                  className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  name="password"
                  className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Password"
                />
                <div className="block">
                  <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">
                    Login
                  </button>
                </div>
                <p className="w-full mt-4 text-sm text-center text-gray-500">
                  Don't have an account?{" "}
                  <a href="/register" className="text-blue-500 underline">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
