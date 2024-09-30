export default function HeroSectionSimple() {
  return (
    <section className="p-4 font-noto-sans antialiased bg-gradient-148 h-[50.75rem] md:h-auto flex items-center justify-center">
      <div className="w-full flex flex-col gap-12 py-[6.5rem] px-3 bg-gradient-176 rounded shadow-md items-center justify-center md:px-4 md:gap-8 md:py-[5.69rem] 3xl:px-24 3xl:flex-row 3xl:py-[6.5rem] ">
        <div className="3xl:w-[30.5rem]">
          <h1 className="text-4xl font-semibold text-left text-neutral-900 mb-4 md:text-5xl md:mb-6 3xl:text-6xl">
            Well crafted abstract images
          </h1>
          <p className="text-left text-lg font-normal text-neutral-600 mb-8 md:text-xl md:mb-16 3xl:mb-16">
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>
          <div className="flex gap-4 md:gap-8">
            <button className="text-neutral-900 bg-white shadow-soft py-3 px-5 rounded border-[0.5px] border-neutral-200 text-base font-medium grow md:grow-0 md:px-6 md:py-4 md:w-[13.31rem] md:text-lg 3xl:w-[10.97rem]">
              Learn more
            </button>
            <button className="text-white bg-indigo-700 hover:bg-indigo-800 shadow-soft py-3 px-5 rounded text-base font-medium grow md:grow-0 md:px-6 md:py-4 md:w-[13.31rem] md:text-lg 3xl:w-[10.97rem]">
              See pricing
            </button>
          </div>
        </div>
        <div className="bg-cover bg-center bg-hero-section h-[16.5rem] w-[19.94rem] rounded-lg md:bg-md-hero-section md:h-[32.875rem] md:w-[44rem] 3xl:w-[43.5rem]"></div>
      </div>
    </section>
  );
}
