import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Popup from "./Popup";

function Login({ setToken }) {
  const router = useRouter();
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const hideWidth = '';
  const handleHidePassword = () => {
    setHidePass((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/login", { email, password });
    console.log(response);
    if (response.data.message == "Successfully Login") {
      const token = response.data.token;
      const encodeToken = Buffer.from(token).toString("base64");
      if (typeof window !== "undefined") {
        localStorage.setItem("token", encodeToken);
        setToken(true);
        return router.push("/dashboard");
      }
    }
    setMessage(response.data.message);
    //
  };
  return (
    <div className={`flex  justify-center items-center h-screen`}>
      {message && <Popup message={message} setMessage={setMessage} />}
      <div className="bg-[#F3F3F3] p-7 rounded-xl flex justify-center items-center flex-col shadow-lg">
        <div className=" w-24 h-24  flex justify-center items-center bg-[#29AB91] text-white rounded-full">
          <FaUserAlt className="text-5xl" />
        </div>
        <div className="text-center my-7 w-9/12">
          <h1 className=" text-4xl">LOGIN</h1>
          <p className="text-sm mt-3">Login to use Iphonebali Admin Dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col items-center">
          <div className="w-9/12">
            <label htmlFor="email" className="mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className=" bg-transparent border-2 border-[#999999] rounded-md px-2 w-full py-1 text-sm focus:outline-none focus:border-teal-500 placeholder:text-sm"
              placeholder="youremail@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-9/12 mt-9">
            <label htmlFor="password" className="mb-2 block">
              Password
            </label>
            <div className="border-2 border-[#999999] rounded-md flex items-center px-2 py-1">
              <input
                type={`${hidePass ? "password" : "text"}`}
                id="password"
                value={password}
                className=" bg-transparent   w-full  text-sm focus:outline-none placeholder:text-sm mr-3"
                placeholder="your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-xl" onClick={handleHidePassword}>
                {hidePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button type="submit" className="bg-teal-500 px-9 text-white rounded-md py-1">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
