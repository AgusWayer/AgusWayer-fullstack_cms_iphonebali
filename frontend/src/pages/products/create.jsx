import React, { useState, useEffect } from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import { optionData } from "@/data";
import axios from "axios";

const Create = ({ fetchCategory, fetchLabel, fetchStatus }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [label, setLabel] = useState("");
  const [status, setStatus] = useState("");
  // const [formValues, setFormValues] = useState({
  //   name: "",
  //   category: "",
  //   image: "",
  //   price: "",
  //   label: "",
  //   status: "",
  // });
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/webp", "image/png", "image/gif", "image/tiff", "image/bmp", "image/svg", "image/heif"];
    if (!allowedTypes.includes(file.type)) {
      alert("file must be image!");
      return (e.target.value = "");
    }
    setImage(file);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleLabel = (e) => {
    setLabel(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  // const handleInputChange = (e) => {
  //   // const { name, value, type, files } = e.target;
  //   // if (type == "file") {
  //   //   const allowedTypes = ["image/jpeg", "image/webp", "image/png", "image/gif", "image/tiff", "image/bmp", "image/svg", "image/heif"];
  //   //   if (!allowedTypes.includes(files[0].type)) {
  //   //     alert("file must be image!");
  //   //     return (e.target.value = "");
  //   //   }
  //   //   const reader = new FileReader();
  //   //   reader.onload = () => {
  //   //     setFormValues((prev) => ({ ...prev, [name]: reader.result }));
  //   //   };
  //   //   reader.readAsDataURL(files[0]);
  //   //   console.log(files);
  //   //   console.log(`reader : ${reader}`);
  //   // } else {
  //   //   setFormValues((prev) => ({ ...prev, [name]: value }));
  //   // }
  // };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("image", image);
      formData.append("price", price);
      formData.append("label", label);
      formData.append("status", status);
      const response = await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product Uploaded!");
      // console.log(formData);
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + "," + pair[1]);
      // }
    } catch (error) {
      console.log("Product Failed to Uplaod!", error);
    }
  };
  useEffect(() => {
    console.log(image);
  }, [image]);
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Create Product</h1>
      <form action="" className="my-6" onSubmit={handleSubmit}>
        <Input label="Product Name" color="teal" className="text-black" onChange={handleName} value={name} />
        <select name="" className=" border-b w-full px-4 py-2" id="" onChange={handleCategory} value={category}>
          <option value="" defaultValue hidden>
            Category
          </option>
          {fetchCategory.map((data) => (
            <option value={data.category} key={data._id}>
              {data.category}
            </option>
          ))}
        </select>
        <input type="file" name="" id="" onChange={handleImage} />
        <Input label="Price" color="teal" className="text-black" onChange={handlePrice} value={price} />
        <select name="" id="" onChange={handleLabel} value={label}>
          <option value="" defaultValue hidden>
            Label
          </option>
          {fetchLabel.map((item) => (
            <option value={item.label} key={item._id}>
              {item.label}
            </option>
          ))}
        </select>
        <select name="" id="" onChange={handleStatus} value={status}>
          <option value="" defaultValue hidden>
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
