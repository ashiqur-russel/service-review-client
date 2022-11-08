import React, { useContext } from "react";
// import images
import WomanImg from "../../img/contact/woman.png";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../../transitions";
import { CursorContext } from "../../contexts/CursorContext";
// import context

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <h1 className="h1 text-center">LET'S TALK</h1>
        <p className="mb-12 text-center">
          If you have a request regarding a photoshoot, whether it’s an
          expedition <br /> to Antarctica, scouting locations in the wilderness
          of Sweden or a magical <br /> wedding - I would be happy to create
          something with you.
        </p>
        <div className="flex flex-col lg:flex-row h-full items-center  justify-start gap-x-8 text-center lg:text-left">
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Your message"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send it
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
