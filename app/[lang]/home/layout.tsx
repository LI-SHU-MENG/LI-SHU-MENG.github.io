import { Inter } from "next/font/google";
import "@app/globals.css";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata = {
  title: "Home",
  description: "Portfolio of Li Shumeng",
};

export default function HomeLayout({ children }) {
  return (
    <div className="h-screen content-between flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>

  );
}
