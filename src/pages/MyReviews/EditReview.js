import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const EditReview = () => {
  const { id } = useParams();
  const review = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useTitle("Edit Review");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const review = {
      comment: message,
      date: new Date(),
    };
    fetch(
      `https://service-review-ashiqur-russel.vercel.app/reviews-all/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          navigate("/my-reviews");
        } else {
          toast.err(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Update your review for {review[0]?.service_name} Service
          </label>
          <textarea
            defaultValue={review[0]?.comment}
            name="message"
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
        </form>
      </div>
    </div>
  );
};

export default EditReview;
