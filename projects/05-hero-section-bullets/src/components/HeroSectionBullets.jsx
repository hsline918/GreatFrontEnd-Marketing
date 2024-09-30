export default function HeroSectionSimple() {
  const bullets = [
    {
      description: "Minimum 5K image resolution",
    },
    {
      description: "Various format variants available",
    },
    {
      description: "Retina display support",
    },
  ];
  return (
    <section className="p-4 font-noto-sans antialiased bg-gradient-148 h-[50.75rem] md:h-auto flex items-center justify-center">
      <div className="w-full flex flex-col gap-12 py-[3.88rem] px-4 bg-white rounded shadow-sm md:gap-8 md:py-16 3xl:px-24 3xl:flex-row 3xl:py-[6.5rem] 3xl:justify-center 3xl:items-center">
        <div className="3xl:w-[30.5rem]">
          <h1 className="text-4xl font-semibold text-balance text-neutral-900 mb-8 md:text-5xl md:mb-16 3xl:text-6xl">
            Premium abstract images
          </h1>
          <p className="text-left mb-8 md:text-xl md:mb-16">
            <div className="flex flex-col gap-5">
              {bullets.map((list) => (
                <div className="flex gap-3" key={list.description}>
                  <img src="./assets/check-fill.svg" alt="check-fill"></img>
                  <p className="text-lg text-neutral-600 font-normal">
                    {list.description}
                  </p>
                </div>
              ))}
            </div>
          </p>
          <div className="flex flex-row-reverse gap-4 md:gap-8 md:flex-row">
            <button className="text-neutral-900 bg-white shadow-soft py-3 px-5 rounded border-[0.5px] border-neutral-200 text-base font-medium grow md:grow-0 md:px-6 md:py-4 md:w-[13.31rem] md:text-lg 3xl:w-[10.97rem]">
              Learn more
            </button>
            <button className="text-white bg-indigo-700 hover:bg-indigo-800 shadow-soft py-3 px-5 rounded text-base font-medium grow md:grow-0 md:px-6 md:py-4 md:w-[13.31rem] md:text-lg 3xl:w-[10.97rem]">
              See pricing
            </button>
          </div>
        </div>
        <div className="bg-cover bg-center bg-hero-bullets h-[16.5rem] w-[19.44rem] rounded-lg md:bg-md-hero-bullets md:h-[32.875rem] md:w-[44rem] 3xl:w-[43.5rem]"></div>
      </div>
    </section>
  );
}
