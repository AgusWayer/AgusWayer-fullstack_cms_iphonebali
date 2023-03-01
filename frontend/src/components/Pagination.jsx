import React from "react";

const Pagination = () => {
  return (
    <div className="border-t-[#C8C8C8] border-t-[1px] mt-7 pt-3">
      <div className="grid-cols-3 grid">
        <section className="flex">
          <p>Show only</p>
          <select name="" id="" className="border mx-5">
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <p>Data</p>
        </section>
        <section></section>
        <section className=" text-end">
          <button className="px-4 py-1 bg-[#39A1EA] text-white rounded-md">Download</button>
        </section>
      </div>
    </div>
  );
};

export default Pagination;
