import React, { useState, useContext } from "react";

// import link
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
// import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
// import motion
import { motion } from "framer-motion";

// menu variants
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate(); //Logout functionality
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => console.error(err));
  };

  return (
    <nav className="text-primary xl:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary  font-bold text-3xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link
                  to={"/my-reviews"}
                  className="text-[#696c6d] hover:text-primary transition"
                >
                  My Reviews
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to={"/add-service"}
                  className="text-[#696c6d] hover:text-primary transition"
                >
                  Add Service
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLogOut}
                  className="text-[#696c6d] hover:text-primary transition"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                to={"/signin"}
                className="text-[#696c6d] hover:text-primary transition"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
