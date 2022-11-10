import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -  Mein Studio`;
  }, [title]);
};

export default useTitle;
