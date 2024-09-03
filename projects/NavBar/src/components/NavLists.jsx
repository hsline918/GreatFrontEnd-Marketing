import { NAV_ITEMS } from "./constants.js";

export const NavLists = () => (
  <>
    {NAV_ITEMS.map((item) => (
      <p
        className="px-3 py-2 text-neutral-900 text-sm font-normal  leading-5 3xl:text-base 3xl:font-medium 3xl:text-neutral-600"
        key={item.id}
        tabIndex="0"
        role="menuitem"
      >
        {item.label}
      </p>
    ))}
  </>
);
