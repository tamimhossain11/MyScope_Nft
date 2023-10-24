import React from "react";
import { Img, Text,Button } from "components";
import 'swiper/swiper-bundle.css';

const CollectionCards5 = () => {


return (

<div className="h-[676px] relative w-full">
<Img
  className="h-[676px] m-auto object-cover rounded-[15px] w-full"
  src="images/img_rectangle66483_676x490.png"
  alt="rectangle66483"
/>
<div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
    <div className="flex flex-col items-start justify-start">
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
        size="txtSFProSemibold28"
      >
        Hooded neck Raglan
      </Text>
      <Text
        className="mt-1.5 text-lg text-white-A700"
        size="txtSFProRegular18WhiteA700"
      >
        Omar Ekstrom Bothman
      </Text>
      <Text
        className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
        size="txtSFProRegular28"
      >
        45, 678, 098 ETH
      </Text>
    </div>
    <div className="flex flex-col gap-6 items-end justify-start w-[23%] sm:w-full">
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200 text-right"
        size="txtSFProBold28DeeppurpleA200"
      >
        $20.09
      </Text>
      <Button
        className="flex h-[60px] items-center justify-center w-[60px]"
        shape="round"
        color="white_A700"
        size="md"
        variant="fill"
      >
        <Img
          className="h-[30px]"
          src="images/img_computer_black_900.svg"
          alt="computer"
        />
      </Button>
    </div>
  </div>
</div>
</div>
  );
};

export default CollectionCards5;