import React from "react";

const ReviewTable = ({ review, handleDelete, handleEdit }) => {
  const { service_name, date, comment, _id } = review;

  return (
    <tr className="text-center border-sky-900">
      <th>
        <label>
          <button
            className=" btn-circle btn-outline bg-gray-500"
            onClick={() => handleDelete(_id)}
          >
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
        <button className="btn-ghost btn-xs" onClick={() => handleEdit(_id)}>
          Edit
        </button>
      </th>
    </tr>
  );
};

export default ReviewTable;
