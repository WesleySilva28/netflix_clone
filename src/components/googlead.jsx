import { useEffect } from "react";

function GoogleAd({ adSlot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client=""https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8687909333130659"
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

export default GoogleAd;
