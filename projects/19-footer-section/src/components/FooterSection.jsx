export default function FooterSection() {
  const footer = [
    {
      title: "Features",
    },
    {
      title: "Pricing",
    },
    {
      title: "About Us",
    },
    {
      title: "Contact",
    },
  ];
  const footerIcons = [
    {
      icon: "assets/youtube-line.svg",
      alt: "youtube",
      link: "https://tailwindcss.com/docs/justify-items",
    },
    {
      icon: "assets/instagram-line.svg",
      alt: "instagram",
      link: "#",
    },
    {
      icon: "assets/facebook-box-line.svg",
      alt: "facebook",
      link: "#",
    },
    {
      icon: "assets/github-line.svg",
      alt: "github",
      link: "#",
    },
    {
      icon: "assets/twitter-x-line.svg",
      alt: "twitter-x",
      link: "#",
    },
  ];
  return (
    <footer className="p-4 bg-gradient-148 font-noto-sans antialiased text-render-optimize h-screen">
      <div className=" bg-white h-full w-full flex flex-col justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          {footer.map((item) => (
            <button
              key={item.title}
              className="text-sm font-medium text-neutral-600 mb-8"
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex gap-4 justify-center items-center mb-4">
          {footerIcons.map((icon) => (
            <a key={icon.alt} href={icon.link}>
              <img src={icon.icon} alt={icon.alt} />
            </a>
          ))}
        </div>
        <p className="text-sm text-neutral-900 font-normal">
          © 2024 Abstractly, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
