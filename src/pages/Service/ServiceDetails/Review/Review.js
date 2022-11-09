import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const Review = ({ _id }) => {
  console.log(_id);
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .then((err) => console.log(err));
  }, [_id]);

  return (
    <div className="p-10 w-full bg-gray-100 m-5">
      {reviews.length < 1 ? (
        <div>
          <h2>No Reviews</h2>
        </div>
      ) : (
        reviews.map((review, idx) => (
          <div className=" w-full lg:max-w-full" key={idx}>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2"></div>
                <p className="text-gray-700 text-base">{review.comment}</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="/ben.png"
                  alt=""
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">
                    {review.user_name}
                  </p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            for="exampleFormControlTextarea1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Give A Review
          </label>
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your Review"
          ></textarea>
          <button className="btn mt-5">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
