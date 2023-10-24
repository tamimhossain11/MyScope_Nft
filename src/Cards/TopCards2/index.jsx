import React from "react";
import { Img, Text } from "components";
import 'swiper/swiper-bundle.css';

const TopCards2 = () => {


return (

    <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
    <div className="md:h-[120px] h-[126px] relative w-[127px]">
      <Img
        className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
        src="images/img_rectangle66498.png"
        alt="rectangle66498"
      />
      <Text
        className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
        size="txtSFProRegular10"
      >
        16
      </Text>
    </div>
    <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
        size="txtSFProSemibold28"
      >
        Top Collectors Over
      </Text>
      <Text
        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
        size="txtSFProRegular24"
      >
        45, 678, 098 ETH
      </Text>
    </div>
  </div>
  );
};

export default TopCards2;