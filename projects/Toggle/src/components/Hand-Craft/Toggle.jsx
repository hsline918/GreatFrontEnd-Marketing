import PropTypes from "prop-types";
export default function Toggle({
  disabled = false,
  checked,
  size = "md",
  label = "",
  onChange,
}) {
  const sizeStyles = {
    sm: {
      wrapper: "w-9 h-5",
      circle: "w-4 h-4",
      translate: "translate-x-[1rem]",
    },
    md: {
      wrapper: "w-11 h-6",
      circle: "w-5 h-5",
      translate: "translate-x-[1.25rem]",
    },
  };

  const toggleStyles = {
    base: `p-[0.125rem] rounded-full inline-flex self-center transition duration-300 ${sizeStyles[size].wrapper} hover:cursor-pointer`, //使用物件查找方式
    disabled: {
      true: "bg-gray-100",
      false: checked ? "active" : "inactive",
    },
    active:
      "bg-indigo-700 hover:bg-indigo-800 hover:shadow-toggle-focus-rings-indigo  hover:outline hover:outline-[0.0625rem] hover:outline-indigo-600 peer-focus:bg-indigo-800 peer-focus:shadow-toggle-focus-rings-indigo  peer-focus:outline peer-focus:outline-[0.0625rem] peer-focus:outline-indigo-600",
    inactive:
      "bg-gray-200 hover:bg-gray-300 hover:shadow-toggle-focus-rings-gray  hover:outline hover:outline-[0.0625rem] hover:outline-gray-400 peer-focus:bg-gray-300 peer-focus:shadow-toggle-focus-rings-gray  peer-focus:outline peer-focus:outline-[0.0625rem] peer-focus:outline-gray-400",
  };

  const getToggleStyle = () => {
    if (disabled) return toggleStyles.disabled.true;
    if (checked) return toggleStyles.active;
    return toggleStyles.inactive;
  }; // early return replace nested ternary operator

  return (
    <label aria-label={label} className="flex gap-2">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked} //React告訴DOM當前狀態
        onChange={(e) => onChange(e.target.checked)} //DOM告訴React當前值
        disabled={disabled}
      />
      <div className={`${toggleStyles.base} ${getToggleStyle()}`}>
        <div
          className={`
            ${sizeStyles[size].circle}
            self-center bg-white rounded-full transition duration-200 ease-in-out ${
              checked ? sizeStyles[size].translate : "translate-x-0"
            }`}
        ></div>
      </div>
      <span className="self-center">{label}</span>
    </label>
  );
}

Toggle.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md"]),
  label: PropTypes.string,
  onChange: PropTypes.func,
};
