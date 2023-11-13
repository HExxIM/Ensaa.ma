import Image from "next/image";

import "./stylings/not-found.css";
//svg
import ErrorIllustration from "../public/images/ErrorIllustration.webp";

export default function NotFound() {
  return (
    <div className="ErrorContainerStyle">
      <Image
        src={ErrorIllustration}
        alt="Error 404"
        className="ErrorIllustrationStyle"
      />
      <div className="ErrorTexts">
        <h1>ERROR 404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}
