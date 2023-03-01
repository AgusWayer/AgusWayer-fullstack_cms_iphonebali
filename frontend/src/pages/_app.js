import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [hide, setHide] = useState(true);
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("token")) {
        return setToken(true);
      }
    }
    if (!token) {
      setToken(false);
      router.push("/");
    }
  }, [token]);

  return (
    <div className={` bg-[#E8E8E8] relative font-poppins ${token ? (hide ? "ml-16" : "ml-52") : ""}`}>
      <Sidebar hide={hide} setHide={setHide} token={token} setToken={setToken} />
      <Component {...pageProps} token={token} setToken={setToken} />
    </div>
  );
}
