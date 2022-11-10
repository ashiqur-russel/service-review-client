import React, { useContext, useState, useEffect } from "react";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../../transitions";
import { CursorContext } from "../../contexts/CursorContext";
import Spinner from "../../componnets/Spinner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

//SRVICE

const Service = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [loading, setLoading] = useState(false);
  useTitle("Service");

  const [services, setServices] = useState([]);
  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setServices(data);
      })
      .then((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <motion.section
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          className="section bg-white"
        >
          <div className="container mx-auto h-full m-0">
            <div className="flex flex-col items-center text-center">
              <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
                What I do for clients
              </h2>
              <p className="subtitle">
                Everything I do I believe in challenging the status quo, I
                believe in thinking differently.I believe that everyone should
                have access to amazing photography, without having to spend a
                fortune.
              </p>
            </div>
            <div
              className="grid lg:grid-cols-4 gap-8"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              {services.map((service, idx) => {
                const { imgUrl, name, description, price, _id } = service;
                return (
                  <PhotoProvider>
                    <div
                      className="bg-secondary p-6 rounded-2xl"
                      key={service.id}
                    >
                      <div className="text-accent rounded-sm w-full h-50 flex justify-center items-center mb-4 text-[28px]">
                        <PhotoView src={imgUrl}>
                          <img
                            src={imgUrl}
                            alt=""
                            className="w-full h-50"
                            style={{ objectFit: "cover" }}
                          />
                        </PhotoView>
                      </div>
                      <h4 className="text-xl font-medium mb-2 text-white">
                        {name}
                      </h4>
                      <p className="text-white">
                        {description.length > 100
                          ? description.substring(0, 100 - 3) + "..."
                          : description}
                      </p>
                      <p className="text-white">Price: ${price}</p>
                      <Link to={`/services/${_id}`}>
                        {" "}
                        <p className=" border-0 p-3 mt-10 bg-white mx-auto text-center mb-0 hover:bg-slate-500">
                          Details
                        </p>
                      </Link>
                    </div>
                  </PhotoProvider>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Service;
