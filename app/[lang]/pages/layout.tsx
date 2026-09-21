import "@app/globals.css";
import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

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
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Navbar dictionary={dictionary} />

      <div className="flex-1 w-full">
        <main className="w-full">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
