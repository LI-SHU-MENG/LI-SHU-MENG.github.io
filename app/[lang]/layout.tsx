import { Inter } from "next/font/google";
import "@app/globals.css";
const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Welcome",
  description: "Portfolio of Li Shumeng",
};

export default function RootLayout({ children }) {
  return (
    <html>
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
