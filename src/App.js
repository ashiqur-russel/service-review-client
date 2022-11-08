import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <AnimatePresence initial={true} mode="wait">
        <RouterProvider router={router}></RouterProvider>
      </AnimatePresence>
    </div>
  );
}

export default App;
