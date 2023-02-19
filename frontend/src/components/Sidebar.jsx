import React from "react";
import { useState } from "react";
import { BiArrowFromRight, BiArrowFromLeft } from "react-icons/bi";
import { AiFillHome, AiOutlineLaptop } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import Link from "next/link";
const sidebarMenu = [
  {
    icon: <AiFillHome />,
    title: "Dashboard",
    link: "/",
  },
  {
    icon: <AiOutlineLaptop />,
    title: "Master Products",
    link: "/products",
  },
  {
    icon: <HiOutlineNewspaper />,
    title: "Article",
    link: "/article",
  },
];

const Sidebar = () => {
  const [hide, setHide] = useState(true);
  return (
    <>
      <div className="shadow-md flex flex-col w-fit  py-3 bg-white">
        {hide ? (
          <div className=" px-3 ">
            <div>
              <BiArrowFromLeft
                className="text-4xl cursor-pointer"
                onClick={() => setHide((prev) => !prev)}
              />
            </div>
            <div className="">
              <ul className="text-center">
                {sidebarMenu.map((menu) => (
                  <Link key={menu.icon} href={menu.link}>
                    <li className="text-xl text-center flex justify-center my-3">
                      {menu.icon}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="w-52  relative">
            <div className="flex  justify-center  ">
              <section className="">
                <div className="bg-slate-600 w-20 h-20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">A</span>
                </div>
                <p className="font-bold text-center text-xl">Admin</p>
              </section>
              <section className="absolute z-10 right-0 mr-2">
                <BiArrowFromRight
                  className="text-3xl cursor-pointer"
                  onClick={() => setHide((prev) => !prev)}
                />
              </section>
            </div>
            <div className="flex justify-center mt-3">
              <ul className="text-center ">
                {sidebarMenu.map((menu) => (
                  <Link key={menu.icon} href={menu.link} className="mx-auto">
                    <li className="text-xl flex text-center items-center  my-3">
                      <span>{menu.icon}</span>
                      <span className="ml-3 text-sm">{menu.title}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
