import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewTable from "./ReviewTable";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Mein Review");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://service-review-ashiqur-russel.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("review-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .then((err) => console.log(err));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    console.log("Review delete clicked", id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this order"
    );

    if (proceed) {
      fetch(
        `https://service-review-ashiqur-russel.vercel.app/reviews-all/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("review-token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully!", {
              position: toast.POSITION.TOP_CENTER,
            });
            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
          }
        })
        .then((err) => console.log(err));
    }
  };

  const handleEdit = (id) => {
    console.log("Rveiwe Edit clicked", id);
    navigate(`/reviews/edit/${id}`);
  };

  return (
    <div className="overflow-x-auto w-full table-div">
      <table className="table-auto w-full mt-10 mb-10 border-gray border-sky-900 ">
        <thead>
          <tr className="border-sky-900">
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Service Name</th>
            <th>Review</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, idx) => (
            <ReviewTable
              key={review.id}
              review={review}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            ></ReviewTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
