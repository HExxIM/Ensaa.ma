import "./globals.css";
import { Inter } from "next/font/google";
import Head from 'next/head';

//components
import NavBar from "./Components/Sections/NavBar/NavBar";
import Footer from "./Components/Sections/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ensaa",
  description: "ADE Ensaa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href='/favicon.png' />
      </Head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
