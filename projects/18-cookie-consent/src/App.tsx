import { useState } from "react";
import "./App.css";
import CookieBanner from "./components/CookieBanner";
import useGetCookie from "./components/useGetCookie";
import React from "react";

export default function App() {
  const [closeBanner, setCloseBanner] = useState<boolean>(false);
  const { getCookie } = useGetCookie();

  const previousEssentialConsent = Boolean(getCookie("essential"));
  const previousMarketingConsent = Boolean(getCookie("marketing"));
  const previousAnalyticsConsent = Boolean(getCookie("analytics"));

  const showBanner =
    !closeBanner &&
    !(
      previousEssentialConsent &&
      previousMarketingConsent &&
      previousAnalyticsConsent
    );

  return (
    <div className="antialiased text-render-optimize bg-gradient-148 h-screen font-noto-sans">
      {showBanner && <CookieBanner setCloseBanner={setCloseBanner} />}
    </div>
  );
}
