import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../Review/Review";

const SignleService = () => {
  const singleService = useLoaderData();
  const { imgUrl, name, description, price, _id } = singleService;
  console.log(singleService);

  return (
    <>
      <div className="flex lg:flex-row justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={imgUrl}
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-700 text-base mb-4">{description}</p>
            <p className="text-gray-700 text-base mb-4">
              Special Price: ${price}
            </p>
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex:row justify-center">
        <Review _id={_id}></Review>
      </div>
    </>
  );
};

export default SignleService;
