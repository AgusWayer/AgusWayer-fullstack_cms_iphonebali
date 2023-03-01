import Pagination from "@/components/Pagination";
import React from "react";
import { FaWallet, FaBoxes } from "react-icons/fa";
import { PieChart } from "react-minimal-pie-chart";

const Dashboard = () => {
  const profitProducts = [
    {
      id: 1,
      icon: <FaWallet />,
      bgcolor: "bg-red-500",
      content: "profit",
      amount: "Rp.122.000.000",
    },
    {
      id: 2,
      icon: <FaBoxes />,
      bgcolor: "bg-green-600",
      content: "stock",
      amount: "52",
    },
  ];
  const chartData = [
    { title: "Macbook", value: 30, color: "#F16647" },
    { title: "iPhone", value: 10, color: "#FEB557" },
    { title: "AirPods", value: 20, color: "#29AB91" },
    { title: "iPads", value: 20, color: "#405189" },
    { title: "Aksesoris", value: 20, color: "#39A1EA" },
  ];
  return (
    <div className="px-5 py-3 overflow-x-scroll">
      <h1 className="font-semibold text-3xl mb-4">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-3">
        {profitProducts.map((item) => (
          <div className="bg-white rounded-lg px-6 py-7 shadow-lg">
            <section className={`${item.bgcolor} w-12 h-12 flex justify-center items-center rounded-full shadow-md text-white text-2xl font-bold`}>{item.icon}</section>
            <p className="mt-3 text-gray-600">Total {item.content}</p>
            <h1 className="mt-1 text-2xl font-semibold">{item.amount}</h1>
          </div>
        ))}
        <div className="bg-white rounded-lg px-6 py-7 shadow-lg text-center">
          <h1 className="text-2xl font-semibold mb-4">Persentase Stok</h1>
          <div className="flex justify-center">
            <div className="w-1/2 md:w-4/12  ">
              <PieChart data={chartData} totalValue="100" lineWidth="40" />
            </div>
          </div>
          <div className="my-4">
            {chartData.map((item) => (
              <section className="flex my-3">
                <span className={`bg-[${item.color}] block px-7 rounded-md text-white w-20`}>
                  <p>{item.value}</p>
                </span>
                <span className="block ml-5">
                  <p>{item.title}</p>
                </span>
              </section>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg px-10 py-7 shadow-lg ">
          <h1 className="text-xl font-semibold">Detail Produk</h1>
          <div className="w-full mt-4">
            <table className="w-full " cellPadding="7">
              <thead>
                <tr className="">
                  <th className="text-start">Product</th>
                  <th className="text-end">Stok</th>
                </tr>
              </thead>
              <tbody>
                {chartData.map((data) => (
                  <tr className="border-b border-black">
                    <td className="text-start">{data.title}</td>
                    <td className="text-end">{data.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white md:col-span-2 rounded-lg px-8 py-7 shadow-lg">
          <h1 className="text-xl font-semibold">Riwayat Penambahan Produk</h1>
          <div className="mt-5">
            <table className="w-full" cellPadding={"17"}>
              <thead>
                <tr>
                  <td className="text-center">Tanggal</td>
                  <td className="text-center">Nama Produk</td>
                  <td className="text-center">Harga Produk</td>
                  <td className="text-center">Jumlah Produk</td>
                </tr>
              </thead>
              <tbody>
                <tr className="shadow rounded-lg">
                  <td className="text-center">21/10/2023</td>
                  <td className="text-center">Macbook M2 Pro 512GB</td>
                  <td className="text-center">Rp.50.000.000</td>
                  <td className="text-center">50</td>
                </tr>
                <tr className="shadow rounded-lg">
                  <td className="text-center">21/10/2023</td>
                  <td className="text-center">Macbook M2 Pro 512GB</td>
                  <td className="text-center">Rp.50.000.000</td>
                  <td className="text-center">50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" w-full ">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
