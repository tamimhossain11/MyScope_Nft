import React from "react";
import { Img, Text} from "components";
import 'swiper/swiper-bundle.css';

const TopCards1 = () => {


return (

    <div className="bg-white-A700_19 flex md:flex-1 sm:flex-col flex-row items-center justify-start p-2.5 rounded-[15px] w-[33%] md:w-full">
    <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
      <Img
        className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
        src="images/img_rectangle66496_1.png"
        alt="rectangle66496_Two"
      />
      <Text
        className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
        size="txtSFProRegular10"
      >
        16
      </Text>
    </div>
    <div className="flex flex-col gap-[13px] items-start justify-start">
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
        size="txtSFProSemibold28"
      >
        Top Collectors Over
      </Text>
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
        size="txtSFProRegular28"
      >
        45, 678, 098 ETH
      </Text>
    </div>
  </div>
  );
};

export default TopCards1;