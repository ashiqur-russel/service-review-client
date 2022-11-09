import React, { useState, useEffect } from "react";

const ReviewTable = ({ review }) => {
  const { service_name, email, date, service_id, comment } = review;

  return (
    <tr className="text-center">
      <th>
        <label>
          <button className=" btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-24 h-24"></div>
          </div>
          <div>
            <div className="font-bold">{service_name}</div>
          </div>
        </div>
      </td>
      <td>
        {comment}
        <br />
      </td>
      <td>{date}</td>
      <th>
        <button className="btn-ghost btn-xs">Edit</button>
      </th>
    </tr>
  );
};

export default ReviewTable;
