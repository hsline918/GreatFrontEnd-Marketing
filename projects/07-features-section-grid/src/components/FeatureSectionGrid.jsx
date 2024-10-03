// import Icons from "./Icons";
import {
  DownloadIcon,
  BrushIcon,
  CopyRightIcon,
  RefundIcon,
  TeamIcon,
  RefreshIcon,
} from "./Icons";

export default function FeatureSectionSideRight() {
  const featuresRight = [
    {
      title: "Infinite Download",
      description:
        "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
      icon: DownloadIcon,
      alt: "download-line",
    },
    {
      title: "Purely Handcrafted",
      description:
        " No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
      icon: BrushIcon,
      alt: "brush-line",
    },
    {
      title: "All Are Under licensed",
      description:
        "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
      icon: CopyRightIcon,
      alt: "copyright-line",
    },
    {
      title: "Cancel Anytime",
      description:
        "Subscribe at your own pace, and cancel when you feel it's enough.",
      icon: RefundIcon,
      alt: "refund-fill",
    },
    {
      title: "Empowering For Team",
      description:
        "We support multiple seats at once, requiring only a single payment.",
      icon: TeamIcon,
      alt: "team-line",
    },
    {
      title: "No Limitations",
      description:
        "Use as many as you want, from Dribble presentations to PowerPoint presentations.",
      icon: RefreshIcon,
      alt: "refresh-line",
    },
  ];
  return (
    <section className="p-4 font-noto-sans antialiased bg-gradient-148 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-12 py-12 px-3 bg-white rounded shadow-sm md:px-4 md:py-16 md:gap-16 3xl:p-24">
        <header className="flex flex-col gap-5">
          <div className="flex flex-col justify-center gap-3">
            <span className="font-semibold text-base text-center text-indigo-700">
              Premium abstract images
            </span>
            <span className="font-semibold text-3xl text-center text-neutral-900 md:text-5xl">
              Easy access to top quality images
            </span>
          </div>
          <span className="font-normal text-lg text-center text-neutral-600 md:text-xl md:whitespace-pre-line">
            In a world where storytelling constantly evolves, we lead with
            groundbreaking images
            <span className="3xl:block">
              {" "}
              designed for your presentation excellence.
            </span>
          </span>
        </header>
        <div className="">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-8 3xl:grid-cols-3 3xl:gap-y-12">
            {featuresRight.map((list) => (
              <div
                className="flex flex-col items-center gap-5"
                key={list.title}
              >
                <div className="w-12 h-12 rounded-full shadow-soft pl-3 pt-3">
                  <list.icon className="w-6 h-6" aria-label={list.alt} />
                </div>
                <div className="flex flex-col gap-2 w-full text-center">
                  <h3 className="font-semibold text-xl text-neutral-900">
                    {list.title}
                  </h3>
                  <p className="text-base text-neutral-600 font-normal md:whitespace-pre-line 3xl:whitespace-normal">
                    {list.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
