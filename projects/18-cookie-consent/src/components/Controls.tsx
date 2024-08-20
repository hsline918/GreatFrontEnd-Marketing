import { useState } from "react";
import ManageCookie from "./ManageCookie";
import React from "react";

interface ControlsProps {
  setCloseBanner: React.Dispatch<React.SetStateAction<boolean>>;
  handleAccept: () => void;
  handleDecline: () => void;
  setCookieConsent: (marketing: boolean, analytics: boolean) => void;
  setMarketingToggled: React.Dispatch<React.SetStateAction<boolean>>;
  setAnalyticsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls({
  setCloseBanner,
  handleAccept,
  handleDecline,
  setCookieConsent,
  setMarketingToggled,
  setAnalyticsToggled,
}: ControlsProps) {
  const [manage, setManage] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row-reverse md:gap-4 md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <button
            className="text-base font-medium px-4 md:px-[1.125rem] 3xl:px-[2.5rem] py-[0.625rem] rounded bg-indigo-700 text-white hover:bg-indigo-800 hover:outline-1"
            onClick={handleAccept}
          >
            Allow cookies
          </button>
          <button
            className="text-base font-medium border-[0.0313rem] shadow-soft border-neutral-200 px-4 md:px-[1.125rem] 3xl:px-[1.875rem] py-[0.625rem] rounded bg-white text-neutral-900"
            onClick={() => setManage(true)}
          >
            Manage cookies
          </button>
        </div>
        <button
          className="text-sm font-medium px-4 py-[0.625rem] rounded text-white bg-red-600 hover:bg-red-700"
          onClick={handleDecline}
        >
          Decline all
        </button>
      </div>
      {manage ? (
        <div className="fixed inset-0 h-screen bg-opacity-70 bg-neutral-950">
          <div className="flex h-screen justify-center items-center z-20">
            <ManageCookie
              setCloseBanner={setCloseBanner}
              handleDecline={handleDecline}
              setCookieConsent={setCookieConsent}
              setMarketingToggled={setMarketingToggled}
              setAnalyticsToggled={setAnalyticsToggled}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
