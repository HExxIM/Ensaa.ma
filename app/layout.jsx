import "./globals.css";
import Head from "next/head";

//components
import NavBar from "./Components/Sections/NavBar/NavBar";
import Footer from "./Components/Sections/footer/Footer";

//images
import og_image from "../public/images/og/og_image_FB.jpg";

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
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta property="og:image" content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhelpx.adobe.com%2Fca_fr%2Fphotoshop%2Fusing%2Fconvert-color-image-black-white.html&psig=AOvVaw2HgtVPtegGow7kFk0dwtuG&ust=1700503118875000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCym_TR0IIDFQAAAAAdAAAAABAE" />
      </Head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
