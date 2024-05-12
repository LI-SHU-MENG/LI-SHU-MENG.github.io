import { Inter } from "next/font/google";
import "@app/globals.css";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Logo from "@components/Logo";
import Sidebar from "@components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Li Shumeng",
  description: "Portfolio of Li Shumeng",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="h-screen content-between flex flex-col">
                    <Navbar />
                    <div className="flex"><Sidebar /> {children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
