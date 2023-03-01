import React from "react";
import { useState, useEffect } from "react";

import { AiFillHome, AiOutlineMenuUnfold, AiOutlineMenuFold, AiOutlineCodeSandbox, AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";
const sidebarMenu = [
  {
    id: 1,
    icon: <AiFillHome />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    icon: <AiOutlineCodeSandbox />,
    title: "Master Products",
    link: "/products",
  },
  {
    id: 3,
    icon: <AiOutlineUser />,
    title: "Master User",
    link: "/user",
  },
];

const Sidebar = ({ hide, setHide, token, setToken }) => {
  const router = useRouter();

  const handleLogOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      setToken(false);
      return router.push("/");
    }
  };

  return (
    <>
      <div className={`shadow-md  flex-col w-fit  py-3 bg-[#14161D]  ${token ? "fixed" : "hidden"} z-20 top-0 left-0 h-screen text-white`}>
        {hide ? (
          <div className=" px-3 flex flex-col justify-between h-full  items-center w-16">
            <div>
              <div>
                <AiOutlineMenuUnfold className="text-3xl cursor-pointer" onClick={() => setHide((prev) => !prev)} />
              </div>
              <div className="mt-7">
                <ul className="text-center">
                  {sidebarMenu.map((menu) => (
                    <Link key={menu.id} href={menu.link}>
                      <li className="text-xl text-center flex justify-center my-7">{menu.icon}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div onClick={handleLogOut} className="cursor-pointer">
              <FiLogOut className="text-2xl" />
            </div>
          </div>
        ) : (
          <div className="w-52  relative flex flex-col justify-between h-full">
            <div>
              <div className="flex  justify-center  ">
                <section className="">
                  <div className="bg-slate-600 w-20 h-20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">A</span>
                  </div>
                  <p className="font-bold text-center text-xl">Admin</p>
                </section>
                <section className="absolute z-10 right-0 mr-2">
                  <AiOutlineMenuFold className="text-3xl cursor-pointer" onClick={() => setHide((prev) => !prev)} />
                </section>
              </div>
              <div className="flex justify-center mt-7">
                <ul className="text-center ">
                  {sidebarMenu.map((menu) => (
                    <Link key={menu.id} href={menu.link} className="mx-auto">
                      <li className="text-xl flex text-center items-center  my-7">
                        <span>{menu.icon}</span>
                        <span className="ml-3 text-sm">{menu.title}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-3 flex text-center mx-auto cursor-pointer" onClick={handleLogOut}>
              <FiLogOut className="text-2xl mr-3" />
              <p className="">Logout</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
