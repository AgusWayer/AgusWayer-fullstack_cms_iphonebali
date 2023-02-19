import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Preview({ preview, setPreview, image }) {
  const handlePreview = () => {
    setPreview((prev) => !prev);
  };
  return (
    <div className="relative">
      <div className="fixed flex  w-full h-full z-20 left-0   bottom-0 p-5">
        <div className="text-white">
          <AiOutlineClose
            className="text-3xl cursor-pointer"
            onClick={handlePreview}
          />
        </div>
        <div className="mx-auto">
          <img src={image} alt="" className="w-full h-full " />
        </div>
      </div>

      <div className="block bg-black bg-opacity-50 w-full h-full  z-10 left-0 top-0 fixed"></div>
    </div>
  );
}

export default Preview;
