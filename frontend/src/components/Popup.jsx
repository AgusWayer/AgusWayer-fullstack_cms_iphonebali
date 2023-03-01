import React from "react";

const Popup = ({ message, setMessage }) => {
  return (
    <div className="bg-black bg-opacity-50  absolute w-full h-full flex justify-center items-center ">
      <div className="absolute z-10 bg-white w-3/12 px-7 py-5 rounded-lg text-center animate-popping-up">
        <p className="text-xl">{message}</p>
        <span className="bg-blue-gray-800 block w-full h-[1px] my-2"></span>
        <div className="text-end">
          <button className="bg-cyan-700 px-7 py-2 rounded-lg text-white hover:bg-cyan-400" onClick={() => setMessage("")}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
