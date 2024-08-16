export default function useGetCookie() {
  function getCookie(name) {
    const allCookies = document.cookie;
    const cookieArray = allCookies.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim().split("=");
      if (cookie[0] === name) {
        // need to return value or sth.
      }
    }
  }

  return { getCookie };
}
