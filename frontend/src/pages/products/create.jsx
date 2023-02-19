import React, { useState } from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import { optionData } from "@/data";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Create Product</h1>
      <div action="" className="my-6">
        <Input label="Product Name" color="teal" className="text-black" />
        <Input label="Price" color="teal" className="text-black" />
        <select name="" className=" border-b w-full px-4 py-2" id="">
          <option value="" selected hidden>
            Category
          </option>
          {optionData.map((option) => (
            <option key={option.id} value={option.name} className="py-3">
              {option.name}
            </option>
          ))}
        </select>
        <input type="file" name="" id="" />
        <input type="number" name="" id="" />
        <input type="text" name="" id="" />
        <select name="" id="">
          <option value="" selected hidden>
            Status
          </option>
        </select>
      </div>
    </div>
  );
};

export default Create;
