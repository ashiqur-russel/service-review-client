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
        form.reset();

        handleUpdateUserProfile(name);
        logOut();
        toast.success("Sign up Successfully! You can login Now!", {
          position: toast.POSITION.TOP_CENTER,
        });

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
