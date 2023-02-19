import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex items-stretch ">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}
