import React, { useState, useEffect } from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import { optionData } from "@/data";
import axios from "axios";
import { Editor, EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";

const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleEditorChange = (newState) => {
    setEditorState(newState);
  };
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
    <div className="p-5 w-full px-9 relative overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold">Create Product</h1>
      <form action="" className="my-6 grid md:grid-cols-2" onSubmit={handleSubmit}>
        <div className="product-name">
          <span className="block font-semibold text-lg mb-3">Product Name</span>
          <input type="text" className="text-black px-4 py-1 rounded-md bg-transparent border-[#8D8D8D] border-[1px] " onChange={handleName} value={name} placeholder="Product Name" />
        </div>
        <div>
          <span className="block font-semibold text-lg mb-3">Product Category</span>
          <select name="" className="text-black px-4 py-1 rounded-md bg-transparent border-[#8D8D8D] border-[1px] w-3/5" id="" onChange={handleCategory} value={category}>
            <option value="" defaultValue hidden>
              Category
            </option>
          </select>
        </div>

        <input type="file" name="" id="" onChange={handleImage} />
        <div>
          <span className="block font-semibold text-lg mb-3">Product Stock</span>
          <input type="number" name="" id="" className="text-black px-4 py-1 rounded-md bg-transparent border-[#8D8D8D] border-[1px] w-3/5" placeholder="Product Stock" />
        </div>
        <div>
          <span className="block font-semibold text-lg mb-3">Product Price</span>
          <input type="number" name="" id="" className="text-black px-4 py-1 rounded-md bg-transparent border-[#8D8D8D] border-[1px] w-3/5" placeholder="Product Price" />
        </div>
        <div>
          <span className="block font-semibold text-lg mb-3">Product Status</span>
          <select name="" className="text-black px-4 py-1 rounded-md bg-transparent border-[#8D8D8D] border-[1px] w-3/5" id="" onChange={handleCategory} value={category}>
            <option value="" defaultValue hidden>
              Status
            </option>
          </select>
        </div>
        <div>
          <Editor editorState={editorState} onChange={handleEditorChange} />
        </div>
        <button className="px-4 py-2 bg-teal-700" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
