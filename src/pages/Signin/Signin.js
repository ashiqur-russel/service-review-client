import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import googleImg from "../../img/google.svg";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { setAuthToken } from "../../token/auth";
const Signin = () => {
  const [error, setError] = useState("");
  const { providerLogin, signIn, setLoading } = useContext(AuthContext);
  //Provider
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  //navigate
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/services";
  useTitle("Login");
  //Google Sign In Method
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          toast.success("Logged in Successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
          setAuthToken(user);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => setError(error));
  };

  //Github Sign in

  const handleGithubSignIn = () => {
    providerLogin(gitHubProvider)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          navigate(from, { replace: true });
          toast.success("Logged in Successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }

        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  //Signin with email
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        if (user.uid) {
          setAuthToken(user);
          navigate(from, { replace: true });
          toast.success("Logged in Successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
            <div className="mt-12 grid gap-6 ">
              <button
                onClick={handleGoogleSignIn}
                className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200"
              >
                <div className="flex gap-4 justify-center">
                  <img src={googleImg} className="w-5" alt="" />
                  <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                    with Google
                  </span>
                </div>
              </button>
              {/*  <button
                onClick={handleGithubSignIn}
                disabled
                className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700"
              >
                <div className="flex gap-4 items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span className="block w-max font-medium tracking-wide text-sm text-white">
                    with Github
                  </span>
                </div>
              </button> */}
            </div>

            <div role="hidden" className="mt-12 border-t">
              <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
                Or
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 py-6">
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
                <button className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                  <span className="font-semibold text-white text-lg">
                    Login
                  </span>
                </button>
                <span className="text-sm tracking-wide text-blue-600">
                  New here? Create new account{" "}
                  <Link to="/signup" type="reset" className="w-max p-3 -ml-3">
                    <button className="btn-secondary bg-slate-500 text-white rounded-sm m-2">
                      Signup
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

export default Signin;
