import React, { useState, useEffect } from "react";
import axios from "axios";

const search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:5000/products/search/${search.toLowerCase()}`
    );
    setData(response.data);
  };
  useEffect(() => {
    if (search.length > 3) {
      fetchData();
      console.log(data);
    }
  }, [search]);
  return (
    <div className="p-3">
      <div>
        <h1 className="font-bold text-2xl">Master Products</h1>
        <input
          type="text"
          className="border border-gray-500 px-3 py-1 rounded-md mt-3"
          value={search}
          placeholder="Search Products..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div>
          <ul>{data ? <li>{data?.name}</li> : <li>No Data</li>}</ul>
        </div>
      </div>
    </div>
  );
};

export default search;
