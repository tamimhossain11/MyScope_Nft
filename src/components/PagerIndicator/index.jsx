import React from "react";

const PagerIndicator = ({
  className,
  activeCss,
  inactiveCss,
  count,
  currentCardIndex,
  setCurrentCardIndex,
  ...restProps
}) => {
  return (
    <div className={className} {...restProps}>
      {Array(count)
        .fill(0)
        .map((_, i) => {
          const isActive = currentCardIndex === i;
          return (
            <div
              key={"indicator" + i}
              className={`${
                isActive
                  ? "inline-block mx-[5px] transition-width duration-300" // Transition the width change
                  : "inline-block mx-[5px]"
              }`}
            >
              <span
                className={`${isActive ? activeCss : inactiveCss} slider-indicator`}
                onClick={() => setCurrentCardIndex(i)}
                style={{
                  width: isActive ? "25px" : "10px", // Set width based on whether it's active or not
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export { PagerIndicator };

