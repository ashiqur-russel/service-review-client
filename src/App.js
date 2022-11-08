import { RouterProvider } from "react-router-dom";
import React, { useContext } from "react";

import "./App.css";
import { router } from "./routes/Routes";
import { AnimatePresence } from "framer-motion";
import { CursorContext } from "./contexts/CursorContext";
import { motion } from "framer-motion";

function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <div className="max-w-screen mx-auto">
      <AnimatePresence initial={true} mode="wait">
        <RouterProvider router={router}></RouterProvider>
        <motion.div
          variants={cursorVariants}
          animate={cursorBG}
          className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        ></motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
