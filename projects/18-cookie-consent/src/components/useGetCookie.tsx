export default function useGetCookie() {
  function getCookie(name: string) {
    const allCookies = document.cookie;
    const cookieArray = allCookies.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim().split("=");
      if (cookie[0] === name) {
        // return cookie[1].toLowerCase() === "true";
      }
    }
    // return false;
  }

  return { getCookie };
}
