export const NavButton = () => (
  <>
    <button className="py-[0.625rem] px-4 shadow-soft border-[0.03rem] border-neutral-200 rounded text-base font-medium 3xl:w-[7.8rem] 3xl:h-[2.75rem]">
      Learn more
    </button>
    <button className="py-[0.625rem] px-4 text-white rounded bg-indigo-700 shadow-soft text-base font-medium 3xl:hidden">
      Try it out
    </button>
    <button className="hidden 3xl:block py-[0.625rem] px-4 text-white rounded bg-indigo-700 shadow-soft text-base 3xl:font-medium">
      See pricing
    </button>
  </>
);
