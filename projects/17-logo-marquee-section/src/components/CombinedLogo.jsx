import PropTypes from "prop-types";
export default function CombinedLogo({
  icon,
  text,
  textWidth,
  textHeight,
  altText,
  spacing,
  textOnly = false,
}) {
  return (
    <>
      <div
        className={"inline-flex px-[4.4063rem] md:px-7 3xl:px-10"}
        style={{ gap: spacing }}
      >
        {textOnly ? (
          <img
            src={text}
            alt={`${altText}`}
            className={`"h-[${textHeight}] w-[${textWidth}] p-[5px]"`}
          />
        ) : (
          <>
            <img
              src={icon}
              alt={`${altText}`}
              className="w-[2.75rem] h-[2.75rem]"
            />
            <img
              src={text}
              alt={`${altText}`}
              className={`"h-[${textHeight}] w-[${textWidth}]"`}
            />
          </>
        )}
      </div>
    </>
  );
}

CombinedLogo.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  textWidth: PropTypes.string,
  textHeight: PropTypes.string,
  altText: PropTypes.string,
  spacing: PropTypes.string,
  textOnly: PropTypes.bool,
};
