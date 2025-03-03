import { Inter } from "next/font/google";
import "@app/globals.css";
import { i18n, type Locale } from "@root/i18n-config";
const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Welcome",
  description: "Portfolio of Li Shumeng",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <html lang={params.lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
