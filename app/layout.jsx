import "./globals.css";
import Head from "next/head";

//components
import NavBar from "./Components/Sections/NavBar/NavBar";
import Footer from "./Components/Sections/footer/Footer";

export const metadata = {
  title: "Ensaa",
  description: "ADE Ensaa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
