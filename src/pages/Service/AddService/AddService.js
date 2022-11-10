import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";

const AddService = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Service");
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const price = form.price.value;
    const message = form.message.value;
    const imgUrl = form.imgUrl.value;
    console.log(name, email, price, message, imgUrl);
    const service = {
      imgUrl: imgUrl,
      name: name,
      price: price,
      email,
      description: message,
      date: new Date(),
    };

    fetch("https://service-review-ashiqur-russel.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service added successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="container flex sm:flex-row justify-center">
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">Add a new service</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Service Name"
            className=" form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            required
          />

          <input
            name="imgUrl"
            type="text"
            placeholder="Image Url"
            className="  form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            required
          />
          <input
            name="price"
            type="text"
            placeholder="Price"
            className=" form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className=" form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className=" form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Description"
          required
        ></textarea>

        <input
          className="btn flex justify-center mx-auto mt-5"
          type="submit"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default AddService;
