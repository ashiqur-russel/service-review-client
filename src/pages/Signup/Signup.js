import React, { useContext, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
const Signup = () => {
  const [error, setError] = useState("");
  const {
    createUser,
    updateUserProfile,

    logOut,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/service";
  //Form Data submit for Registration
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password < 6) {
      setError("Please Enter atleast 6 characetr password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();

        handleUpdateUserProfile(name);
        logOut();
        toast.success("Sign up Successfully! You can login Now!");
        navigate("/signin");
        console.log(user);
      })
      .catch((e) => {
        setError(e);
        console.error(e);
        console.log(e.message);
      });
  };
  //function for update user profile

  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

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

      <div className="container h-screen m-auto">
        <div className="relative h-full ml-auto lg:w-6/12 mx-auto">
          <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
            <form onSubmit={handleSubmit} className="space-y-6 py-6">
              <div>
                <input
                  type="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>

              <div className="flex flex-col items-end">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
                <button type="reset" className="w-max p-3 -mr-3">
                  <span className="text-sm tracking-wide text-blue-600">
                    Forgot password ?
                  </span>
                </button>
              </div>

              <div>
                <button className="btn w-full px-6 py-3 rounded-xl transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                  <span className=" font-semibold text-white text-lg">
                    Sign Up
                  </span>
                </button>
                <span className="text-sm tracking-wide text-blue-600">
                  Already have an account?{" "}
                  <Link to="/signin" type="reset" className="w-max p-3 -ml-3">
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
