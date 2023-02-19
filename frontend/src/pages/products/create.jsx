import React, { useState, useEffect } from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import { optionData } from "@/data";
import axios from "axios";

const Create = ({ fetchCategory, fetchLabel, fetchStatus }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    label: "",
    status: "",
  });
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type == "file") {
      const file = e.target.files[0];
      const allowedTypes = ["image/jpeg", "image/webp", "image/png", "image/gif", "image/tiff", "image/bmp", "image/svg", "image/heif"];
      if (!allowedTypes.includes(file.type)) {
        alert("file must be image!");
        return (e.target.value = "");
      }
      console.log(file);
      setFormValues((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("category", formValues.category);
    formData.append("image", formValues.image);
    formData.append("price", formValues.price);
    formData.append("label", formValues.label);
    formData.append("status", formValues.status);
    try {
      const response = await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product Uplaoded!");
    } catch (error) {
      console.log("Product Failed to Uplaod!", error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Create Product</h1>
      <form action="" className="my-6" onSubmit={handleSubmit}>
        <Input label="Product Name" color="teal" className="text-black" onChange={handleInputChange} />
        <select name="" className=" border-b w-full px-4 py-2" id="" onChange={handleInputChange}>
          <option value="" defaultValue hidden>
            Category
          </option>
          {fetchCategory.map((data) => (
            <option value={data.category} key={data._id}>
              {data.category}
            </option>
          ))}
        </select>
        <input type="file" name="" id="" onChange={handleInputChange} />
        <Input label="Price" color="teal" className="text-black" onChange={handleInputChange} />
        <select name="" id="" onChange={handleInputChange}>
          <option value="" selected hidden>
            Label
          </option>
          {fetchLabel.map((item) => (
            <option value={item.label} key={item._id}>
              {item.label}
            </option>
          ))}
        </select>
        <select name="" id="" onChange={handleInputChange}>
          <option value="" selected hidden>
            Status
          </option>
          {fetchStatus.map((item) => (
            <option key={item._id} value={item.status}>
              {item.status}
            </option>
          ))}
        </select>

        <button className="px-4 py-2 bg-teal-700" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;

export async function getServerSideProps() {
  const responsefetchCategory = await axios.get("http://localhost:5000/category");
  const fetchCategory = responsefetchCategory.data;
  const responsefetchLabel = await axios.get("http://localhost:5000/label");
  const fetchLabel = responsefetchLabel.data;
  const responsefetchStatus = await axios.get("http://localhost:5000/status");
  const fetchStatus = responsefetchStatus.data;
  return {
    props: {
      fetchCategory,
      fetchLabel,
      fetchStatus,
    },
  };
}
