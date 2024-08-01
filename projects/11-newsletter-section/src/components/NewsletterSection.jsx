import ResponsiveImage from "./ResponsiveImage";
export default function NewsletterSection() {
  return (
    <section className="m-4 py-8 md:py-16 3xl:py-24 px-3 md:px-4 3xl:px-24 bg-white rounded-md shadow-soft ">
      <figure className="flex flex-col items-center 3xl:grid 3xl:grid-cols-2 3xl:items-center 3xl:justify-items-center gap-4 md:gap-16 3xl:gap-8">
        <figcaption className="flex flex-col gap-12">
          <blockquote className="flex flex-col gap-8 md:gap-16">
            <div className="text-3xl md:text-5xl text-neutral-900 font-semibold">
              Get the finest curated abstracts delivered weekly to your inbox
            </div>
            <div className="flex flex-col gap-5">
              <figure className="flex gap-3">
                <img
                  src="./assets/check-fill.svg"
                  alt="check-fill"
                  aria-label="check-fill"
                />
                <figcaption className="text-lg font-normal text-neutral-600">
                  Exclusive access to new abstract images and collections
                </figcaption>
              </figure>
              <figure className="flex gap-3">
                <img
                  src="./assets/check-fill.svg"
                  alt="check-fill"
                  aria-label="check-fill"
                />
                <figcaption className="text-lg font-normal text-neutral-600">
                  Unlock special promotions only for subscribers
                </figcaption>
              </figure>
              <figure className="flex gap-3">
                <img
                  src="./assets/check-fill.svg"
                  alt="check-fill"
                  aria-label="check-fill"
                />
                <figcaption className="text-lg font-normal text-neutral-600">
                  Regular doses of artistic inspiration
                </figcaption>
              </figure>
            </div>
          </blockquote>
          <form className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-3 md:gap-4">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your email"
                autoComplete="username"
                className="text-ellipsis text-sm bg-neutral-50 py-[0.625rem] px-[0.875rem] rounded ring-1 ring-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 md:w-[20.875rem]"
              />
              <p className="text-base font-normal text-neutral-600">
                We only send you the best! No spam.
              </p>
            </div>
            <button
              type=""
              className="text-white bg-indigo-700 hover:bg-indigo-800 shadow-soft py-[0.625rem] px-[0.875rem] rounded md:w-[6.125rem] md:h-[2.5rem] text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </figcaption>
        <ResponsiveImage
          smallSrc="./assets/Image.png"
          mediumSrc="./assets/Image-md.png"
          largeSrc="./assets/Image-3xl.png"
          alt="Abstract art image: Flowing white and light beige lines intertwine on a dark background, creating an elegant wave-like texture. Multiple images of similar style are displayed in a stacked arrangement, highlighting diverse abstract art designs."
          className="pr-2 md:pr-0 md:mr-4 bg-cover md:rounded-xl w-[19.4375rem] h-[18.0153rem] md:w-[43rem] md:h-[38rem] 3xl:w-[37rem] 3xl:h-[38rem] 3xl:mr-0"
          ariaLabel="Abstract art image: Flowing white and light beige lines intertwine on a dark background, creating an elegant wave-like texture. Multiple images of similar style are displayed in a stacked arrangement, highlighting diverse abstract art designs."
        />
      </figure>
    </section>
  );
}
