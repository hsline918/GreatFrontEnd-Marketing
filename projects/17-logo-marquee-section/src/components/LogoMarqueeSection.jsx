import CombinedLogo from "./CombinedLogo";
import Marquee from "react-fast-marquee";

export default function LogoMarqueeSection() {
  const logos = [
    {
      iconOnly: false,
      icon: "./assets/sort-number-desc-1.svg",
      text: "./assets/wan-nain.svg",
      textWidth: "7.3125rem",
      textHeight: "1.75rem",
      alt: "Wan Nain",
      spacing: "0.5625rem",
    },
    {
      iconOnly: false,
      icon: "./assets/funds-fill.svg",
      text: "./assets/robin-wood.svg",
      textWidth: "7.5625rem",
      textHeight: "1.75rem",
      alt: "Robinwood",
      spacing: "0.3125rem",
    },
    {
      iconOnly: false,
      icon: "./assets/swap-2-fill.svg",
      text: "./assets/swapdo.svg",
      textWidth: "7.3125rem",
      textHeight: "1.75rem",
      alt: "SWAPDO",
      spacing: "0.5625rem",
    },
    {
      iconOnly: false,
      icon: "./assets/copper-diamond-fill.svg",
      text: "./assets/diamond.svg",
      textWidth: "7.375rem",
      textHeight: "1.75rem",
      alt: "DIAMOND",
      spacing: "0.5rem",
    },
    {
      iconOnly: false,
      icon: "./assets/car-fill.svg",
      text: "./assets/air-car.svg",
      textWidth: "4.875rem",
      textHeight: "1.75rem",
      alt: "Air Car",
      spacing: "1.625rem",
    },
    {
      textOnly: true,
      text: "./assets/makro-hard.svg",
      textWidth: "9.9375rem",
      textHeight: "2.375rem",
      alt: "MAKRO HARD",
      spacing: 0,
    },
  ];

  return (
    <div className="m-4 px-4 bg-white grow flex flex-col justify-center gap-8">
      <p className="text-base font-medium text-neutral-600 text-center">
        Used by teams that you love
      </p>
      <section className="py-6">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {logos.map((logo, index) => (
            <CombinedLogo
              key={index}
              icon={logo.icon}
              text={logo.text}
              textWidth={logo.textWidth}
              textHeight={logo.textHeight}
              altText={logo.alt}
              spacing={logo.spacing}
              textOnly={logo.textOnly}
            />
          ))}
        </Marquee>
      </section>
    </div>
  );
}
