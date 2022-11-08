import React from "react";

const Spinner = () => {
  return (
    <div class="flex justify-center items-center">
      <div
        class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 bg-red-900"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
