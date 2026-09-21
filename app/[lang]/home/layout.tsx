import "@app/globals.css";
import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata = {
  title: "Home",
  description: "Portfolio of Li Shumeng",
};

export default async function HomeLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="h-screen content-between flex flex-col">
      <Navbar dictionary={dictionary} />
      {props.children}
      <Footer />
    </div>

  );
}
