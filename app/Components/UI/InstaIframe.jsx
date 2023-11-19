"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import  "../../Clubs/[slug]/page.module.css";
//svg
import loading from '../../../public/svg/loading3.svg';

export default function InstaIframe({club}){
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const handleIframeLoad = () => {
      setIframeLoaded(true);
    };
  
    return (
        <>
          {!iframeLoaded && (
            <Image
              width={147}
              src={loading}
              className="loading"
              alt="loading"
            />
          )}
          <iframe
            src={club.links.instagram + 'embed/'}
            allowtransparency="true"
            scrolling="no"
            frameBorder="0"
            onLoad={handleIframeLoad}
            style={{ display: iframeLoaded ? 'block' : 'none' }}
          ></iframe>
        </>
    );
}