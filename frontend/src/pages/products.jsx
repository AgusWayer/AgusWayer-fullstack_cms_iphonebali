import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { tableHead } from "@/data";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import Link from "next/link";
import Preview from "@/components/Preview";

const products = ({ result }) => {
  const [data, setData] = useState(result);
  const [preview, setPreview] = useState(false);
  const [image, setImage] = useState("");
  const router = useRouter();
  const handleRouting = () => {
    router.push("/search");
  };
  const handlePreview = (e) => {
    setPreview((prev) => !prev);
    const elementSibling = e.target.nextElementSibling?.getAttribute("src");
    const image = e?.target?.getAttribute("src");
    setImage(elementSibling || image);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:5000/products/${id}`);
    alert("Product Deleted!");
    location.reload();
  };

  return (
    <div className="p-5 w-full px-9 relative">
      {preview ? (
        <Preview preview={preview} setPreview={setPreview} image={image} />
      ) : (
        <></>
      )}

      <div>
        <h1 className="font-bold text-2xl">Master Products</h1>
        <input
          type="text"
          className="border border-gray-500 px-3 py-1 rounded-md mt-3"
          placeholder="Search Products..."
          onFocus={handleRouting}
        />
      </div>
      <div className="w-full mt-5 ">
        <div className="w-full flex justify-end ">
          <Link
            href={"/products/create"}
            className="bg-green-700 text-white px-3 py-2 text-xl hover:bg-green-600 rounded-md active:bg-green-900"
          >
            <IoIosAdd />
          </Link>
        </div>
        <table
          className="table-auto border mx-auto w-full text-center "
          border={"10px"}
        >
          <thead className="bg-cyan-800 text-white">
            <tr className="">
              {tableHead.map((th) => (
                <th className="px-3 py-2 border" key={th.id}>
                  {th.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.map((item, i) => {
              const [hover, setHover] = useState(false);
              return (
                <tr key={item._id}>
                  <td className="p-3 border ">{i + 1}</td>
                  <td className="p-3 border capitalize">{item.name}</td>
                  <td className="p-3 border capitalize">{item.category}</td>
                  <td className="p-3 border text-center relative">
                    <div
                      className="cursor-pointer"
                      onMouseEnter={() => setHover((prev) => !prev)}
                      onMouseLeave={() => {
                        setHover((prev) => !prev);
                      }}
                      onClick={handlePreview}
                    >
                      <div
                        className={`${
                          hover ? "flex" : "hidden"
                        } w-full h-full  bg-black bg-opacity-50 absolute left-0 top-0  justify-center items-center`}
                      >
                        <AiOutlineSearch className="text-3xl text-white" />
                      </div>
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="w-40 h-60 object-cover mx-auto"
                      />
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td className="capitalize">{item.label}</td>
                  <td className="capitalize">{item.status}</td>
                  <td className="p-3 border ">
                    <div className="flex justify-center">
                      <Link
                        href={`/products/edit/${item._id}`}
                        className="px-3 py-2 text-lg bg-blue-700  text-white rounded-md mx-1"
                      >
                        <FiEdit />
                      </Link>
                      <button
                        className="px-3 py-2 text-lg bg-red-700 text-white rounded-md mx-1"
                        onClick={() => handleDelete(item._id)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default products;

export async function getServerSideProps() {
  const response = await axios.get(`http://localhost:5000/products/`);
  const result = response.data;
  return {
    props: {
      result,
    },
  };
}
