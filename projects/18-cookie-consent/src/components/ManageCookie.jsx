import { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function ManageCookie({
  setCloseBanner,
  handleDecline,
  setCookieConsent,
}) {
  const [marketingToggled, setMarketingToggled] = useState(false);
  const [analyticsToggled, setAnalyticsToggled] = useState(false);

  function toggleAcceptAll() {
    setAnalyticsToggled(true);
    setMarketingToggled(true);
  }

  function handleSave() {
    setCookieConsent(marketingToggled, analyticsToggled);
    setCloseBanner(true);
  }

  return (
    <section className="w-[340px] flex flex-col justify-center gap-6 bg-white p-6">
      <div className="flex flex-col justify-center gap-1 self-stretch">
        <div className="flex justify-between gap-2 ">
          <span className="font-semibold text-base text-neutral-900">
            Essentials
          </span>
          <ToggleButton isChecked={true} isDisabled={true} />
        </div>
        <span className="font-normal text-sm text-neutral-600">
          These cookies are essential for the proper functioning of our services
          and cannot be disabled.
        </span>
      </div>
      <div className="flex flex-col justify-center gap-1 self-stretch">
        <div className="flex justify-between gap-2">
          <span className="font-semibold text-base text-neutral-900">
            Analytics
          </span>
          <ToggleButton
            isChecked={marketingToggled}
            setIsChecked={setMarketingToggled}
            isDisabled={null}
          />
        </div>
        <span className="font-normal text-sm text-neutral-600">
          These cookies collect information about how you use our services or
          potential errors you encounter. Based on this information we are able
          to improve your experience and react to any issues.
        </span>
      </div>
      <div className="flex flex-col justify-center gap-1 self-stretch">
        <div className="flex justify-between gap-2">
          <span className="font-semibold text-base text-neutral-900">
            Marketing
          </span>
          <ToggleButton
            isChecked={analyticsToggled}
            setIsChecked={setAnalyticsToggled}
            isDisabled={null}
          />
        </div>
        <span className="font-normal text-sm text-neutral-600">
          These cookies allow us to show you advertisements relevant to you
          through our advertising partners.
        </span>
      </div>

      <div className="flex flex-col gap-2 self-stretch">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center gap-1.5 basis-1/2 bg-indigo-700 px-4 py-2.5 rounded hover:bg-indigo-800">
            <div className="flex justify-center items-center px-0.5">
              <button
                className="font-medium text-base text-white"
                onClick={toggleAcceptAll}
              >
                Accept all
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1.5 basis-1/2  bg-white px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200">
            <div className="flex justify-center items-center px-0.5">
              <button
                className="font-medium text-base text-neutral-900"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 self-stretch bg-red-600 hover:bg-red-700 px-3.5 py-2.5 rounded">
          <div className="flex justify-center items-center px-0.5">
            <button
              className="font-medium text-sm text-white"
              onClick={handleDecline}
            >
              Decline all
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
