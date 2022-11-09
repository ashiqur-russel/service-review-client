import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewTable from "./ReviewTable";

const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .then((err) => console.log(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log("Order delete clicked", id);
    const proceed = window.confirm(
      "Are you sure, you want to delete this order"
    );

    if (proceed) {
      fetch(`http://localhost:5000/reviews-all/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
          }
        })
        .then((err) => console.log(err));
    }
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
          {reviews.map((review) => (
            <ReviewTable
              key={review._id}
              review={review}
              handleDelete={handleDelete}
            ></ReviewTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
