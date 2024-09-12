import React from "react";
export default function PricingTier({
  name,
  description,
  monthlyPrice,
  annuallyPrice,
  totalAnnualPrice,
  features,
  isPopular,
  isAnnually,
}) {
  return (
    <div className={`group ${isPopular ? "popular" : ""}`}>
      <blockquote className="p-4 rounded-lg border shadow-sm flex flex-col gap-8 group-[.popular]:border-indigo-600 group-[.popular]:shadow-2xl border-neutral-200 md:p-8">
        {isPopular && (
          <div className="text-center rounded-t-lg text-indigo-700 text-xl font-bold bg-indigo-50 px-2 py-4 md:-mt-8 md:-mx-8 -mt-4 -mx-4">
            Most Popular
          </div>
        )}
        <div className="group-[.popular]:pt-0">
          <h2 className="text-neutral-900 font-semibold text-2xl mb-2">
            {name}
          </h2>
          <p className="text-base font-normal text-neutral-600">
            {description}
          </p>
        </div>
        <div className="inline-flex flex-col gap-2 ">
          <div className="flex gap-[0.125rem] items-end">
            <span
              className={`text-5xl md:text-6xl font-semibold md:font-bold ${
                isPopular ? "text-indigo-700" : "text-neutral-900"
              } `}
            >
              {isAnnually ? annuallyPrice : monthlyPrice}
            </span>
            <span
              className={`text-base font-normal ${
                isPopular ? "text-indigo-700" : "text-neutral-900"
              }`}
            >
              / month
            </span>
          </div>
          <p className="text-base font-normal text-neutral-600">
            {`Billed ${isAnnually ? "annually " : "monthly "}`}
            {isAnnually && "(" + totalAnnualPrice + ")"}
          </p>
        </div>

        <div
          className={`flex flex-col gap-5 
            ${
              name === "Basic Plan"
                ? "md:pb-[4.25rem] 3xl:pb-[11.75rem]"
                : name === "Standard Plan"
                ? "3xl:pb-[40px]"
                : name === "Premium Plan"
                ? "3xl:pb-[32px]"
                : ""
            }`}
        >
          {/* 手動調整，之後可能會修改 */}
          {features.map((feature: string) => (
            <div className="flex gap-3" key={feature}>
              <img src="./assets/check-fill.svg" alt="check-fill"></img>
              <p className="text-base text-neutral-600 font-normal">
                {feature}
              </p>
            </div>
          ))}
        </div>
        <button
          className={`px-4 py-[0.625rem]  text-base font-medium rounded border-[0.03rem] border-neutral-200 shadow-soft w-full ${
            isPopular
              ? "bg-indigo-700 hover:bg-indigo-800 text-white"
              : "text-black"
          }`}
        >
          Buy now
        </button>
      </blockquote>
    </div>
  );
}
