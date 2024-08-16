import { useState } from "react";
import "./App.css";
import CookieBanner from "./components/CookieBanner";
import useGetCookie from "./components/useGetCookie";

export default function App() {
  const [closeBanner, setCloseBanner] = useState(false);
  const { getCookie } = useGetCookie();

  const previousEssentialConsent = getCookie("essential");
  const previousMarketingConsent = getCookie("marketing");
  const previousAnalyticsConsent = getCookie("analytics");

  const showBanner =
    !closeBanner &&
    !(
      previousEssentialConsent &&
      previousMarketingConsent &&
      previousAnalyticsConsent
    );

  return (
    <div class="antialiased text-render-optimize bg-gradient-148 h-screen font-noto-sans">
      {showBanner && <CookieBanner setCloseBanner={setCloseBanner} />}
    </div>
  );
}
