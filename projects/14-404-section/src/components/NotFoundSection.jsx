export default function FooterSection() {
  return (
    <section className="p-4 font-noto-sans antialiased h-[50.75rem] bg-gradient-148 md:h-[64rem] 3xl:h-[48rem]">
      <div className="bg-cover bg-center bg-section-404 h-[43.5rem] w-full flex flex-col justify-center py-12 px-3 md:py-16 md:px-4 md:bg-md-section-404  md:h-[62rem] 3xl:p-24 3xl:h-[46rem] 3xl:bg-3xl-section-404">
        <div className="">
          <span className="text-base font-semibold text-indigo-700 mb-2 md:mb-3">
            Not found
          </span>
          <h1 className="text-4xl md:text-5xl 3xl:text-6xl font-semibold text-neutral-900 mb-5 md:mb-6">
            We can&apos;t find the page
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 font-normal mb-8 md:mb-16">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <button className="text-base md:text-lg font-medium bg-indigo-700 hover:bg-indigo-800 text-white px-5 py-3 md:px-6 md:py-4 rounded w-full md:w-auto shadow-soft">
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}
