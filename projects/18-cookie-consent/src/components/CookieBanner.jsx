import Controls from "./Controls";
import useDecision from "./useDecision";

export default function CookieBanner({ setCloseBanner }) {
  const { handleAccept, handleDecline, setCookieConsent } =
    useDecision(setCloseBanner);

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:px-8 md:py-6 3xl:py-6 3xl:px-28 bg-white flex flex-col gap-6 z-10">
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold text-neutral-900">
          We use cookies
        </p>
        <p className="text-sm text-neutral-600">
          We use cookies to enhance your browsing experience and improve our
          website's performance. By continuing to use this site, you consent to
          the use of cookies. To learn more about how we use cookies and your
          options, please read our{" "}
          <a
            href="https://tailwindui.com/components/marketing/elements/banners"
            className="text-sm text-indigo-700 3xl:underline"
          >
            cookie policy.
          </a>
        </p>
      </div>
      <Controls
        setCloseBanner={setCloseBanner}
        handleAccept={handleAccept}
        handleDecline={handleDecline}
        setCookieConsent={setCookieConsent}
      />
    </div>
  );
}
