// SnackBar.js
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Portal from "../Portal";

export default function SnackBar({ message, isError, id }) {
  const [animationClass, setAnimationClass] = useState("");
  useEffect(() => {
    setAnimationClass("animate-snackbar-slide-in");
    const timer = setTimeout(() => {
      setAnimationClass("animate-snackbar-slide-out");
    }, 3000);
    return () => clearTimeout(timer);
  }, [id]);

  if (animationClass === "") return null;

  return (
    <Portal>
      <div
        className={`fixed top-0 left-0 right-0 flex justify-center  pointer-events-none duration-500 px-4 ${animationClass}`}
      >
        <div
          className={`flex flex-row items-center gap-3 text-sm font-medium py-1 pl-1 pr-[0.625rem] shadow-lg rounded-full ${
            isError ? "bg-red-50" : "bg-green-50"
          }`}
        >
          {isError ? (
            <>
              <p className="text-red-600 py-[0.125rem] px-[0.625rem] bg-white shadow-soft rounded-full">
                Error
              </p>
              <p className="text-red-600">{message}</p>
            </>
          ) : (
            <>
              <p className="text-green-700 py-[0.125rem] px-[0.625rem] bg-white shadow-soft rounded-full">
                Success
              </p>
              <p className="text-green-700">{message}</p>
            </>
          )}
        </div>
      </div>
    </Portal>
  );
}

SnackBar.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  id: PropTypes.string.isRequired,
};
