import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      {/*  <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  type="text"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Login
                </button>
                <Link
                  href="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div> */}

      <div class="container h-screen m-auto">
        <div class="relative h-full ml-auto lg:w-6/12 mx-auto">
          <div class="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
            <form action="" class="space-y-6 py-6">
              <div>
                <input
                  type="name"
                  name="name"
                  placeholder="Your Name"
                  class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>

              <div class="flex flex-col items-end">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
                <button type="reset" class="w-max p-3 -mr-3">
                  <span class="text-sm tracking-wide text-blue-600">
                    Forgot password ?
                  </span>
                </button>
              </div>

              <div>
                <button class="btn w-full px-6 py-3 rounded-xl transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                  <span class=" font-semibold text-white text-lg">Sign Up</span>
                </button>
                <span class="text-sm tracking-wide text-blue-600">
                  Already have an account?{" "}
                  <Link to="/signin" type="reset" class="w-max p-3 -ml-3">
                    <button className="btn-secondary bg-slate-500 text-white rounded-sm m-2">
                      Signin
                    </button>{" "}
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
