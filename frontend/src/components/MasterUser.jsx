import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { tableHeadUser } from "@/data";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineSearch, AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import Preview from "@/components/Preview";
import Pagination from "@/components/Pagination";

const MasterUser = ({ result }) => {
  const [data, setData] = useState(result);
  const [preview, setPreview] = useState(false);
  const [image, setImage] = useState("");
  const router = useRouter();
  const handleSearch = () => {
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
    <div className="p-5 w-full px-9 relative overflow-x-scroll md:overflow-x-hidden">
      {preview ? <Preview preview={preview} setPreview={setPreview} image={image} /> : <></>}

      <div>
        <h1 className="font-semibold text-3xl text-[#180E4F]">Master User</h1>
        <div className="flex border items-center rounded-md border-gray-500 w-fit px-2 py-1 mt-3">
          <AiOutlineSearch className="text-xl" />
          <input type="text" className="rounded-md bg-transparent focus:outline-none" placeholder="Search User..." />
        </div>
      </div>
      <div className="w-full mt-5 ">
        <div className="w-full flex mb-5 justify-end ">
          <Link href={"/products/create"} className="bg-teal-custom text-white px-3 py-2 text-,d hover:bg-teal-600 rounded-md active:bg-green-900">
            Add new User
          </Link>
        </div>
        <table className="table-auto  mx-auto w-full text-center border-spacing-2  border-collapse" cellPadding={"12"}>
          <thead className="">
            <tr className="">
              {tableHeadUser.map((th) => (
                <td className="px-3 py-2  text-[#8F8F8F]" key={th.id}>
                  {th.name}
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y-8 divide-[#E8E8E8]">
            <tr className="bg-white bg rounded-lg shadow-lg ">
              <td className="">1</td>
              <td>Mas Rusdi</td>
              <td className="">Profil</td>
              <td className="">Admin</td>
              <td className="">rusdi@gmail.com</td>
              <td>081246888</td>
              <td className="">
                <div className="flex justify-center">
                  <Link href={`/products/edit}`} className="px-3 py-2 text-lg bg-blue-700  text-white rounded-md mx-1">
                    <AiOutlineEye />
                  </Link>
                  <button className="px-3 py-2 text-lg bg-red-700 text-white rounded-md mx-1">
                    <AiOutlineDelete />
                  </button>
                </div>
              </td>
            </tr>
            {/* {result.map((item, i) => {
        const [hover, setHover] = useState(false);
        return (
          <tr key={item._id}>
            <td className="p-3  ">{i + 1}</td>
            <td className="p-3  capitalize">{item.name}</td>
            <td className="p-3  capitalize">{item.category}</td>
            <td className="p-3  text-center relative">
              <div
                className="cursor-pointer"
                onMouseEnter={() => setHover((prev) => !prev)}
                onMouseLeave={() => {
                  setHover((prev) => !prev);
                }}
                onClick={handlePreview}
              >
                <div className={`${hover ? "flex" : "hidden"} w-full h-full  bg-black bg-opacity-50 absolute left-0 top-0  justify-center items-center`}>
                  <AiOutlineSearch className="text-3xl text-white" />
                </div>
                <img src={item.imageUrl} alt="" className="w-40 h-60 object-cover mx-auto" />
              </div>
            </td>
            <td>{item.price}</td>
            <td className="capitalize">{item.label}</td>
            <td className="capitalize">{item.status}</td>
            <td className="p-3  ">
              <div className="flex justify-center">
                <Link href={`/products/edit/${item._id}`} className="px-3 py-2 text-lg bg-blue-700  text-white rounded-md mx-1">
                  <FiEdit />
                </Link>
                <button className="px-3 py-2 text-lg bg-red-700 text-white rounded-md mx-1" onClick={() => handleDelete(item._id)}>
                  <AiOutlineDelete />
                </button>
              </div>
            </td>
          </tr>
        );
      })} */}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default MasterUser;
