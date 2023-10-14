import React from "react";

import { Button, Img,  Line, Radio, Text } from "components";
import Navbar from "components/Navbar";


const Page = () => {


  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[117px] items-center justify-start max-w-[1530px] mb-[81px] mx-auto md:px-5 w-full">
          <div className=" ml-[340px]  w-[1920px]">
          <Navbar/>
          </div>
          <div className="flex flex-col items-center justify-start w-2/5 md:w-full">
            <div className="flex flex-col gap-3 items-center justify-start w-[48%] md:w-full">
              <div className="flex flex-row gap-[7px] items-start justify-between w-full">
                <Text
                  className="mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                  size="txtSFProRegular38"
                >
                  Home
                </Text>
                <Radio
                  value="404Page"
                  className="font-semibold mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                  inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                  checked={false}
                  name="404page"
                  label="404 Page"
                  id="404Page"
                ></Radio>
              </div>
              <Line className="bg-gradient2  h-[5px] w-[70%]" />
            </div>
            <div className="md:h-[330px] h-[421px] sm:h-[847px] mt-[31px] relative w-full">
              <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-[88%]">
                <Text
                  className="md:text-5xl text-[250px] text-white-A700"
                  size="txtSFProHeavy250"
                >
                  4
                </Text>
                <div className="h-[178px] sm:ml-[0] ml-[15px] relative w-[31%] sm:w-full">
                  <Img
                    className="h-[178px] m-auto object-cover w-full"
                    src="images/img_myscpelogo2.png"
                    alt="myscpelogoTwo"
                  />
                  <div className="absolute bg-deep_purple-A200_02 bottom-[24%] h-[66px] inset-x-[0] mx-auto w-[72%]"></div>
                </div>
                <Text
                  className="sm:ml-[0] ml-[15px] md:text-5xl text-[250px] text-white-A700"
                  size="txtSFProHeavy250"
                >
                  4
                </Text>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-center justify-start mx-auto w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 uppercase"
                  size="txtSFProSemibold48"
                >
                  Oops! Page is not found
                </Text>
                <Text
                  className="leading-[32.00px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
                  size="txtSFProRegular22WhiteA700"
                >
                  Lorem ipsum dolor sit amet consectetur. Leo nascetur eu platea
                  integer proin eget nibh arcu.
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[230px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
