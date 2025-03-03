import { Inter } from "next/font/google";
import "@app/globals.css";
import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";


export const metadata = {
  title: "Li Shumeng",
  description: "Portfolio of Li Shumeng",
};

export default async function PagesLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  const { children } = props;

  return (
      <div className="h-screen content-between flex flex-col">
        <Navbar/>
        <div className="flex flex-col sm:flex-row gap-10">
            <Sidebar dictionary={dictionary}/>
            {children}
        </div>
        <Footer/>
      </div>
  );
}
