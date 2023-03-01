import MasterProduct from "@/components/MasterProduct";
import axios from "axios";
import React from "react";

const products = ({ result }) => {
  const layoutProduct = {
    title: "Master Products",
    searchPlaceHolder: "Search Products",
    sort: ["Nama Product", "Category", "Stock", "Status"],
    tHead: ["No", "Nama Product", "Category", "Image", "Stock", "Price", "Status", "Action"],
  };
  return (
    <div>
      <MasterProduct />
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
