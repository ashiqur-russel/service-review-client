import React, { useContext } from "react";
// import components
import Logo from "../img/header/logo.svg";
// import link
import { Link } from "react-router-dom";
import { CursorContext } from "../contexts/CursorContext";
// import cursor context

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

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
          <img src={Logo} alt="" />
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
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Porftolio
          </Link>
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}

      {/* mobile nav */}
    </header>
  );
};

export default Header;
