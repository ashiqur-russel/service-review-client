import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewTable from "./ReviewTable";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setReviews(data);
      })
      .then((err) => console.log(err));
  }, [user?.email]);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full mt-10 mb-10">
        <thead>
          <tr className="">
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
            <ReviewTable key={review._id} review={review}></ReviewTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
