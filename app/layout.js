import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Logo from "@components/Logo";
import Sidebar from "@components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Li Shumeng",
  description: "Portfolio of Li Shumeng",
  lang: "en",
  tab: "Bibliography",
};

export default function RootLayout({ children }) {
  return (
    <html lang={metadata.lang}>
      <body className={inter.className}>

        {/* if current page is home */}
      <div className="h-screen content-between flex flex-col">
        <Navbar />
        <div className="flex flex-col sm:flex-row">
            <Sidebar active="CV"/>
            {children}
        </div>
        <Footer />
      </div>
      </body>
    </html>
  );
}
