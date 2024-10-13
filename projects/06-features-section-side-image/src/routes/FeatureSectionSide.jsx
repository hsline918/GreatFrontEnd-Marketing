import {
  HdLineIcon,
  WaterPercentLineIcon,
  RainbowLineIcon,
} from "../components/Icons";
import { useLocation } from "react-router-dom";

export default function FeatureSectionSideRight() {
  const { pathname } = useLocation();
  const isImageRight = pathname === "/right"; //isImageRight is a boolean
  const featuresRight = [
    {
      title: "5K resolution support",
      description:
        "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
      icon: HdLineIcon,
      alt: "hd-line",
    },
    {
      title: "From water to glass",
      description:
        "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.",
      icon: WaterPercentLineIcon,
      alt: "water-percent-line",
    },
    {
      title: "Portrait or landscape",
      description:
        "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper \nor captivating Instagram reels and stories.",
      icon: RainbowLineIcon,
      alt: "rainbow-line",
    },
  ];
  const featuresLeft = [
    {
      title: "Faster downloads",
      description:
        "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a \nsmooth download experience.",
      icon: HdLineIcon,
      alt: "hd-line",
    },
    {
      title: "Convenience for teams",
      description:
        "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.",
      icon: WaterPercentLineIcon,
      alt: "water-percent-line",
    },
    {
      title: "Royalty-free licensing",
      description:
        "Our straightforward, royalty-free licensing means your chosen images are yours to innovate \nwith, without the hassle of \nnegotiating usage rights for \nevery new project.",
      icon: RainbowLineIcon,
      alt: "rainbow-line",
    },
  ];
  const features = isImageRight ? featuresRight : featuresLeft;
  return (
    <section className="p-4 font-noto-sans antialiased bg-gradient-148 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-12 py-12 px-3 bg-white rounded shadow-sm md:px-4 3xl:p-24">
        <header className="flex flex-col gap-5">
          <div className="flex flex-col justify-center gap-3">
            <span className="font-semibold text-base text-center text-indigo-700">
              {isImageRight ? "High quality images" : "Best-in-class support"}
            </span>
            <span className="font-semibold text-3xl text-center text-neutral-900 md:text-5xl">
              {isImageRight
                ? "For designers, by designers"
                : "Convenience and licensing that empowers"}
            </span>
          </div>
          <span className="font-normal text-lg text-center text-neutral-600 md:text-xl md:pb-4 md:whitespace-pre-line">
            {isImageRight
              ? "Unleash boundless creativity with a large repository"
              : "In a world where storytelling constantly evolves, "}
            <span
              className={`${isImageRight ? "md:block 3xl:inline" : "md:block"}`}
            >
              {" "}
              {isImageRight
                ? "of images optimized for designers"
                : "don't let licensing and poor support hold you down."}
            </span>
          </span>
        </header>
        <div
          className={`flex flex-col gap-12 3xl:flex-row 3xl:gap-8
            ${isImageRight ? "" : "flex-col-reverse 3xl:flex-row-reverse"}`}
        >
          <div className="flex flex-col gap-10 3xl:w-[37rem]">
            {features.map((list) => (
              <div className="flex gap-5" key={list.title}>
                <div className="w-12 h-12 rounded-full shadow-soft pl-3 pt-3">
                  <list.icon alt={list.alt} className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2 py-[0.625rem] w-[15.69rem] md:w-[39.75rem]">
                  <h3 className="font-semibold text-lg text-neutral-900">
                    {list.title}
                  </h3>
                  <p
                    className={`text-base text-neutral-600 font-normal whitespace-pre-line  3xl:whitespace-normal ${
                      isImageRight
                        ? "md:whitespace-pre-line"
                        : "md:whitespace-normal"
                    }`}
                  >
                    {list.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <picture className="w-full">
            <source
              media="(min-width: 1440px)"
              srcSet={
                isImageRight
                  ? "./assets/3xl_unsplash.png"
                  : "./assets/3xl_unsplash_left.png"
              }
              type="image/png"
            />
            <source
              media="(min-width: 768px)"
              srcSet={
                isImageRight
                  ? "./assets/md_unsplash.png"
                  : "./assets/md_unsplash_left.png"
              }
              type="image/png"
            />
            <img
              src={
                isImageRight
                  ? "./assets/unsplash.png"
                  : "./assets/unsplash_left.png"
              }
              alt="feature-image"
              className="rounded-lg shadow-xl md:h-[24.38rem] md:w-[44rem] 3xl:mt-0 3xl:w-[37rem] 3xl:h-[24.62rem]"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
