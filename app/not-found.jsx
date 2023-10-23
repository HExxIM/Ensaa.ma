"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

//svgs
import ErrorIllustration from "../public/images/ErrorIllustration.webp";

export default function NotFound() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const ErrorContainerStyle = {
    padding: "8vh 5vw ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    height: "100vh",
  };
  const ErrorIllustrationStyle = {
    opacity: "0.3",
    scale: windowWidth <= 650 ? "0.5" : "1.07",
    transform: "translateX(2%)",
    margin: windowWidth <= 650 ? "-20vh 0" : "0vh 0",
  };

  const Error404TextStyle = {
    allText: {
      position: "absolute",
      textAlign: "center",
      fontFamily: "var(--font-primary)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
    },
    h1: {
      background: "var(--light-glow)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "600",
      fontSize: windowWidth <= 650 ? "4rem" : "7rem",
    },
    p: {
      color: "#fff",
      fontSize: windowWidth <= 650 ? "2rem" : "3rem",
      fontWeight: "200",
      textTransform: "capitalize",
    },
  };

  return (
    <div style={ErrorContainerStyle}>
      <Image
        src={ErrorIllustration}
        alt="Error 404"
        style={ErrorIllustrationStyle}
      />
      <div style={Error404TextStyle.allText}>
        <h1 style={Error404TextStyle.h1}>ERROR 404</h1>
        <p style={Error404TextStyle.p}>Page not found</p>
      </div>
    </div>
  );
}
