export default function useDecision(setCloseBanner) {
  function setCookieConsent(marketing, analytics) {
    const expirationTime = 365 * 24 * 60 * 60;
    document.cookie = `essential=${true}; max-age=${expirationTime}; path=/`;
    document.cookie = `essential=${marketing}; max-age=${expirationTime}; path=/`;
    document.cookie = `essential=${analytics}; max-age=${expirationTime}; path=/`;
  }
  function handleAccept() {
    setCookieConsent(true, true);
    setCloseBanner(true);
  }
  function handleDecline() {
    setCookieConsent(false, false);
    setCloseBanner(true);
  }

  return { handleAccept, handleDecline, setCookieConsent };
}
