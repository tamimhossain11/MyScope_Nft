import React from "react";
import { Img, Text } from "components";
import 'swiper/swiper-bundle.css';

const HomeScrollCards = ({ isActive, imageSrc, name, username }) => {
  const cardClass = isActive ? "scroll-card horizontal active" : "scroll-card horizontal";

  return (
    <div className={cardClass}>
      <div className="flex flex-col h-[560px] md:h-full rounded-[15px] md:w-full inset-[0] items-center relative w-[400px] m-auto shadow-bs5">
        <Img
          className="h-[440px] md:h-auto object-cover w-full"
          src={imageSrc} // Pass the image source as a prop
          alt={name} // You can use the name as alt text or pass it as a prop
        />
        <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-bl-[15px] rounded-br-[15px] w-full">
          <div className="flex flex-row gap-[15px] items-center justify-start w-[73%] md:w-full">
            <Img
              className="h-20 md:h-auto rounded-[50%] w-20"
              src={imageSrc} // You can pass the same or a different image source
              alt={name} // You can use the name as alt text or pass it as a prop
            />
            <div className="flex flex-col gap-[5px] items-start justify-start">
              <Text
                className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                size="txtSFProBold24"
              >
                {name} {/* Use the name prop for the name */}
              </Text>
              <Text
                className="lowercase text-base text-deep_purple-A200"
                size="txtSFProRegular16"
              >
                {`@${username}`} {/* Use the username prop for the username */}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScrollCards;
