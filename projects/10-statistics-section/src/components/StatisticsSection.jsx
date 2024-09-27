import Statistics from "./Statistics";
import { useState } from "react";
export default function StatisticsSection() {
  const [statisticsData, setStatisticsData] = useState([]);

  return (
    <section className="p-4 font-noto-sans antialiased bg-gradient-148">
      <div className="flex flex-col py-12 px-4 bg-white rounded-md shadow-md md:py-16 3xl:px-24 3xl:py-[7.88rem]">
        <h6 className="text-base font-semibold text-center text-indigo-700 mb-3">
          Statistics
        </h6>
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-5 md:text-5xl">
          More than premium abstract imagery
        </h1>
        <p className="text-center text-xl font-normal text-neutral-600 3xl:mb-16">
          Our platform is more than just as a service to us – it is a catalyst
          for enriching lives through premium abstract imagery.
        </p>
        <div className="3xl:grid 3xl:grid-cols-2 3xl:justify-center 3xl:gap-8">
          <div className="my-12 bg-mobile-statistics h-[19.44rem] w-full bg-cover bg-center md:bg-md-statistics md:py-16 md:px-4 md:h-[41rem] 3xl:bg-3xl-statistics 3xl:p-24 3xl:w-[37rem] 3xl:h-[34rem] 3xl:my-0"></div>
          <div className="flex flex-col gap-6 md:gap-8 ">
            <p className="text-lg font-normal text-neutral-600">
              Our mission, in numbers
            </p>
            <Statistics data={statisticsData} setData={setStatisticsData} />
          </div>
        </div>
      </div>
    </section>
  );
}

// {
//   /* h-[50.75rem] md:h-[64rem] 3xl:h-[48rem]*/
// }

// {
//   /* h-[43.5rem] w-full md:py-16 md:px-4   md:h-[62rem] 3xl:p-24 3xl:h-[46rem] bg-cover bg-center*/
// }
