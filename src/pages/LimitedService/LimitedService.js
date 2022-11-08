import React, { useContext, useEffect, useState } from "react";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../../transitions";
import { CursorContext } from "../../contexts/CursorContext";
import { Link } from "react-router-dom";
//import { useLoaderData } from "react-router-dom";

//SRVICE

const LimitedService = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data))
      .then((err) => console.log(err));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">
            Just another thing that stands us apart from most photographers, we
            offer a wide range of payment plans to get your services paid in a
            manner that doesn’t kill your budget or your bank account.
          </p>
        </div>
        <div
          className="grid lg:grid-cols-3 gap-8"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {service.map((service, idx) => {
            const { imgUrl, name, price } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl " key={idx}>
                <div className="text-accent rounded-sm w-full h-75 flex justify-center items-center mb-10 mx-auto text-[28px]">
                  <img src={imgUrl} alt="" className="w-full h-50" />
                </div>
                <h4 className="text-xl font-medium mb-2 text-white">{name}</h4>
                <p className="text-white">Price: {price}</p>
              </div>
            );
          })}
        </div>
        <Link to="/services">
          {" "}
          <button className="btn text-center mx-auto mt-10">
            EXPLORE ALL SERVICES
          </button>
        </Link>
      </div>
    </motion.section>
  );
};

export default LimitedService;
