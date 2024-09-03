import { useCallback, useState } from "react";
import { NavLogo } from "./NavLogo.jsx";
import { NavLists } from "./NavLists.jsx";
import { NavButton } from "./NavButton.jsx";
import { NAV_ICON } from "./constants.js";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleExpanded = useCallback(() => {
    setIsExpanded(true);
    setIsAnimated(true);
  }, []);

  const handleClose = useCallback(() => {
    setTimeout(() => {
      setIsExpanded(false);
    }, 300);
    setIsAnimated(false);
  }, []);

  return (
    <nav
      aria-label="主導航"
      className={`font-noto-sans antialiased text-render-optimize ${
        isExpanded && "overflow-hidden h-screen"
      }`}
    >
      {/* DeskTop(3xl) */}
      <div className="3xl:bg-gradient-148 3xl:h-screen">
        <div className="hidden 3xl:pt-7 3xl:pb-3 3xl:px-28 3xl:flex 3xl:gap-24 3xl:self-center 3xl:justify-between ">
          <div className="3xl:flex 3xl:gap-1 3xl:self-center">
            <NavLogo />
          </div>
          <div className="3xl:flex 3xl:gap-8 3xl:self-center">
            <NavLists />
          </div>
          <div className="3xl:flex 3xl:gap-4">
            <NavButton />
          </div>
        </div>
      </div>
      {/* Mobile & Tablet */}
      <div className="pt-4 h-screen bg-gradient-148 3xl:hidden">
        <div className="py-4 px-4 flex justify-between">
          <div className="flex gap-1">
            <NavLogo />
          </div>
          <button onClick={handleExpanded}>
            <img src={NAV_ICON.menu} className="w-5 h-5" />
          </button>
        </div>
      </div>
      {(isExpanded || isAnimated) && (
        <div
          className={`${isAnimated ? "animate-fade-in" : "animate-fade-out"}
          bg-neutral-950 bg-opacity-70 pr-4 fixed top-0 left-0 w-full`}
          onClick={handleClose}
        >
          <div
            className={`h-screen pt-8 pb-4 px-4 w-[22.48rem] bg-white flex flex-col gap-6 ${
              isAnimated ? "animate-slide-in-expo" : "animate-slide-out-expo"
            }`}
            onClick={(e) => e.stopPropagation()}
            // 防止事件冒泡觸發上層的handleClose
          >
            <div className="flex justify-between h-8">
              <div className="flex gap-1">
                <NavLogo />
              </div>
              <button onClick={() => handleClose(true)}>
                <img src={NAV_ICON.close} className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2 h-[36.25rem]">
              <NavLists />
            </div>
            <div className="flex flex-col gap-4 h-[6.5rem]">
              <NavButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
