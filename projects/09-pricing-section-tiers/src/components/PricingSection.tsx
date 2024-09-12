import React, { useState } from "react";
import PricingTier from "./PricingTier";
export default function PricingSection() {
  const [isAnnually, setIsAnnually] = useState(false);
  //默認為monthly 1. 先讓monthly的按鈕有border:
  // (!isAnnually) &&
  // ("rounded border-[0.03rem] border-neutral-200 shadow-soft");
  // 設定

  function handleToggle(toggle: boolean) {
    setIsAnnually(toggle);
  }

  const tiers = [
    {
      name: "Basic Plan",
      description: "Access to a curated selection of abstract images",
      monthlyPrice: "$9.99",
      annuallyPrice: "$6.99",
      totalAnnualPrice: "$84",
      features: [
        "Standard quality images",
        "Limited to personal use",
        "Email support",
      ],
      isPopular: false,
      isAnnually: { isAnnually },
    },
    {
      name: "Standard Plan",
      description: "Next-level Integrations, priced economically",
      monthlyPrice: "$19.99",
      annuallyPrice: "$15.99",
      totalAnnualPrice: "$192",
      features: [
        "Expanded library with more diverse abstract images",
        "High-resolution images available",
        "Suitable for commercial use",
        "Priority email support",
        "Advanced analytics",
      ],
      isPopular: true,
    },
    {
      name: "Premium Plan",
      description: "Experience limitless living for power users",
      monthlyPrice: "$29.99",
      annuallyPrice: "$25.99",
      totalAnnualPrice: "$312",
      features: [
        "Full access to the entire image library, including exclusive content",
        "Highest quality images, including premium collections",
        "Commercial and resale rights",
        "Dedicated customer support line",
        "24/7 support response time",
        "Advanced analytics and insights",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="p-4 bg-gradient-148 font-noto-sans antialiased text-render-optimize">
      <div className="px-3 md:px-4 py-12 md:py-16 3xl:p-24 bg-white rounded-md shadow-lg ">
        <blockquote className="text-center mb-12 md:mb-16 ">
          <div className="mb-10 md:px-8 3xl:px-40">
            <p className="text-indigo-700 font-semibold text-base mb-3">
              Pricing Tiers
            </p>
            <h1 className="text-neutral-900 font-semibold text-3xl md:text-5xl mb-5">
              Fit for all your needs
            </h1>
            <p className="text-neutral-600 font-normal text-lg md:text-xl md:px-8 3xl:px-0">
              Pick the plan that suits you today and step up as your demands
              grow - our flexible options have your journey mapped out.
            </p>
          </div>
          <div className="flex gap-4 md:gap-8 justify-center">
            <button
              className={`text-base font-medium text-neutral-900 px-[2.61rem] py-[0.625rem]  ${
                !isAnnually &&
                "rounded border-[0.03rem] border-neutral-200 shadow-soft"
              }`}
              onClick={() => handleToggle(false)}
              // 保持按下去的時候一直都要是false
            >
              Monthly
            </button>
            <button
              className={`text-base font-medium text-neutral-900 px-[2.61rem] py-[0.625rem]  ${
                isAnnually &&
                "rounded border-[0.03rem] border-neutral-200 shadow-soft"
              }`}
              onClick={() => handleToggle(true)}
              // 保持按下去的時候一直都要是true
            >
              Annually
            </button>
          </div>
        </blockquote>
        <div className="flex flex-col 3xl:flex 3xl:gap-8 3xl:justify-center  gap-8 3xl:w-[24rem] 3xl:h-[42.25rem] 3xl:flex-wrap">
          {/* 這裡使用flex-wrap 讓他可以換行 */}
          {tiers.map((tier) => (
            <PricingTier
              key={tier.name}
              isAnnually={isAnnually}
              name={tier.name}
              description={tier.description}
              monthlyPrice={tier.monthlyPrice}
              annuallyPrice={tier.annuallyPrice}
              totalAnnualPrice={tier.totalAnnualPrice}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <button className="px-4 py-[0.625rem] bg-indigo-700 text-white text-base font-medium rounded hover:bg-indigo-800">
  Buy now
</button>; */
}
