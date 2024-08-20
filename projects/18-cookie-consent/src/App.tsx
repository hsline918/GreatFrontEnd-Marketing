import { useEffect, useState } from "react";
import "./App.css";
import CookieBanner from "./components/CookieBanner";
import useGetCookie from "./components/useGetCookie";
import React from "react";

export default function App() {
  const [closeBanner, setCloseBanner] = useState(false);
  const [marketingToggled, setMarketingToggled] = useState(false);
  const [analyticsToggled, setAnalyticsToggled] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    marketingToggled,
    analyticsToggled,
  });
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

  useEffect(() => {
    setCookieSettings({ marketingToggled, analyticsToggled });
  }, [marketingToggled, analyticsToggled]);

  useEffect(() => {
    const addedScripts: HTMLScriptElement[] = [];
    if (cookieSettings.marketingToggled) {
      addedScripts.push(addScript("marketing"));
    }
    if (cookieSettings.analyticsToggled) {
      addedScripts.push(addScript("analytics"));
    }

    return () => {
      addedScripts.forEach((script) => script.remove());
    };
  }, [cookieSettings]);

  function addScript(src: string): HTMLScriptElement {
    let script = document.createElement("script");
    script.src = `/scripts/${src}.js`;
    script.type = "text/javascript";
    script.onload = () => console.log(`${src} has been loaded successfully.`);
    document.head.appendChild(script);
    return script;
  }

  return (
    <div className="antialiased text-render-optimize bg-gradient-148 h-screen font-noto-sans">
      {showBanner && (
        <CookieBanner
          setCloseBanner={setCloseBanner}
          setMarketingToggled={setMarketingToggled}
          setAnalyticsToggled={setAnalyticsToggled}
        />
      )}
    </div>
  );
}
