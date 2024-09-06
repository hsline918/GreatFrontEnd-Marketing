import React from "react";
export default function PricingSingle() {
  const lists: { description: string }[] = [
    {
      description: "128 available credits for all images",
    },
    {
      description: "Up to 3 users",
    },
    {
      description: "24 hour response time",
    },
    {
      description: "Advanced analytics",
    },
  ];

  return (
    <section className="p-4 bg-gradient-148 font-noto-sans antialiased text-render-optimize h-screen">
      <div className="px-3 md:px-4 py-12 md:py-16 3xl:p-24 bg-white rounded-md shadow-lg">
        <blockquote className="text-center mb-16">
          <p className="text-indigo-700 font-semibold text-base mb-3">
            One time purchase
          </p>
          <h1 className="text-neutral-900 font-semibold text-3xl md:text-5xl mb-5">
            Pay as you need
          </h1>
          <p className="text-neutral-600 font-normal text-lg md:text-xl md:px-8">
            We offer one-time purchases with credits, for you to use as needed.
            Always active.
          </p>
        </blockquote>
        <div className="3xl:flex 3xl:gap-8 3xl:">
          <blockquote className="mb-8 md:mb-12 3xl:mb-0 3xl:self-center 3xl:w-[43.5626rem]">
            <h2 className="text-neutral-900 font-semibold text-2xl md:text-4xl mb-8 md:mb-16">
              Unlock creativity once, enjoy forever
            </h2>
            <div className="flex flex-col gap-5">
              {lists.map((list, index) => (
                <div className="flex gap-3" key={index}>
                  <img src="./assets/check-fill.svg" alt="check-fill"></img>
                  <p className="text-lg text-neutral-600 font-normal">
                    {list.description}
                  </p>
                </div>
              ))}
            </div>
          </blockquote>
          <blockquote className="p-8 rounded-lg border border-neutral-200 shadow-lg flex flex-col gap-8 3xl:w-[30.4rem]">
            <div className="inline-flex flex-col items-center gap-2">
              <span className="py-1 px-[0.625rem] rounded-full border border-green-200 bg-green-50 text-green-700 ">
                Popular
              </span>
              <h1 className="text-5xl md:text-6xl font-semibold md:font-bold text-neutral-900">
                $699
              </h1>
              <p className="text-sm font-normal text-neutral-600">
                Prices in USD
              </p>
            </div>
            <div className="text-xl font-normal text-neutral-900 px-8 md:px-16 text-center">
              Pay once, use it forever.
              <br />
              No strings attached.
            </div>
            <button className="px-4 py-[0.625rem] bg-indigo-700 text-white text-base font-medium rounded hover:bg-indigo-800">
              Buy now
            </button>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
