import React, { useContext } from "react";
// import components
import Socials from "./Socials";
import MobileNav from "./MobileNav";

import Logo from "../img/header/ç-ar-logo.png";
// import link
import { Link, useNavigate } from "react-router-dom";
import { CursorContext } from "../contexts/CursorContext";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate(); //Logout functionality
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => console.error(err));
  };

  return (
    <header className="w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={"/"}
          className="max-w-[200px]"
        >
          <img src={Logo} alt="" width={60} />
        </Link>

        {/* nav - initially hidden - show on desktop mode */}
        <nav
          className="hidden xl:flex gap-x-12 font-semibold"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/service"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Services
          </Link>

          <Link
            to={{
              pathname: "/about",
              hash: "#about",
              state: { fromDashboard: true },
            }}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>

          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
          {user ? (
            <Link
              onClick={handleLogOut}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Logout
            </Link>
          ) : (
            <Link
              to={"/signin"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
      {/* socials */}
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
