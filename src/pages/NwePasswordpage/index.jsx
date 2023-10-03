import React from "react";

import { Button, Img, List, Text } from "components";

const NwePasswordpagePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[123px] items-center justify-start max-w-[1800px] mx-auto pr-[126px] md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
            <div className="h-[960px] relative w-full">
              <Img
                className="h-[960px] m-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle66495.png"
                alt="rectangle66495"
              />
              <div className="absolute bg-black-900_19 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[215px] md:px-10 sm:px-5 rounded-[30px] w-full">
                <Img
                  className="h-[357px] md:h-auto my-[86px] object-cover w-full"
                  src="images/img_myscpelogo1.png"
                  alt="myscpelogoOne"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-14 items-center justify-start w-[41%] md:w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtSFProBold40"
              >
                Add Nwe Password
              </Text>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                size="txtSFProMedium28"
              >
                Put Your New Password
              </Text>
            </div>
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                <List
                  className="flex flex-col gap-[30px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="md:h-[68px] h-[83px] my-0 relative w-full">
                    <div className="absolute bg-white-A700 border border-deep_purple-A200 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[19px] rounded-[15px] w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between my-1 w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-black-900"
                            size="txtSFProSemibold16"
                          >
                            johndeo.20 @#
                          </Text>
                        </div>
                        <Img
                          className="h-[22px] w-[22px]"
                          src="images/img_icoutlineremoveredeye.svg"
                          alt="icoutlineremove"
                        />
                      </div>
                    </div>
                    <Button
                      className="!text-deep_purple-A200 absolute cursor-pointer font-medium leading-[normal] left-[2%] min-w-[154px] text-center text-xl top-[0]"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      New Password
                    </Button>
                  </div>
                  <div className="md:h-[68px] h-[83px] my-0 relative w-full">
                    <div className="absolute bg-white-A700 border border-deep_purple-A200 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[19px] rounded-[15px] w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between my-1 w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-black-900"
                            size="txtSFProSemibold16"
                          >
                            johndeo.20 @#
                          </Text>
                        </div>
                        <Img
                          className="h-[22px] w-[22px]"
                          src="images/img_icoutlineremoveredeye.svg"
                          alt="icoutlineremove"
                        />
                      </div>
                    </div>
                    <Button
                      className="!text-deep_purple-A200 absolute cursor-pointer font-medium leading-[normal] left-[2%] min-w-[194px] text-center text-xl top-[0]"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Coframe Password
                    </Button>
                  </div>
                </List>
                <div className="flex flex-row gap-2.5 items-center justify-start w-[27%] md:w-full">
                  <div className="bg-white-A700 border-2 border-gray-200 border-solid h-[26px] rounded-[5px] w-[26px]"></div>
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtSFProRegular22"
                  >
                    Remember me
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[671px] md:min-w-full rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                color="deep_purple_A200"
                size="lg"
                variant="fill"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NwePasswordpagePage;
