export default function useDecision(
  setCloseBanner: (value: boolean) => void,
  setAnalyticsToggled: (value: boolean) => void,
  setMarketingToggled: (value: boolean) => void
) {
  function setCookieConsent(marketing: boolean, analytics: boolean) {
    const expirationTime = 365 * 24 * 60 * 60;
    document.cookie = `essential=${true}; max-age=${expirationTime}; path=/`;
    document.cookie = `essential=${marketing}; max-age=${expirationTime}; path=/`;
    document.cookie = `essential=${analytics}; max-age=${expirationTime}; path=/`;
  }
  function handleAccept() {
    setCookieConsent(true, true);
    setAnalyticsToggled(true);
    setMarketingToggled(true);
    setCloseBanner(true);
  }
  function handleDecline() {
    setCookieConsent(false, false);
    setAnalyticsToggled(false);
    setMarketingToggled(false);
    setCloseBanner(true);
  }

  return { handleAccept, handleDecline, setCookieConsent };
}
