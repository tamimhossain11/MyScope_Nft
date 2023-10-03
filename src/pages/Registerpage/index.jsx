import React from "react";

import { Button, FloatingInput, Img, Text } from "components";

const RegisterpagePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[123px] items-start justify-start max-w-[1800px] mx-auto pb-[63px] pr-[63px] md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[51%] md:w-full">
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
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[55px] w-[39%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtSFProBold40"
              >
                Create a New Account
              </Text>
              <Text
                className="mt-[15px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                size="txtSFProMedium28"
              >
                Sign Up to Continue
              </Text>
              <div className="flex flex-col items-start justify-start mt-[54px] w-full">
                <div className="md:h-[68px] h-[83px] relative w-full">
                  <div className="absolute bg-white-A700 border border-deep_purple-A200 border-solid bottom-[0] flex flex-col font-dmsans inset-x-[0] items-center justify-start mx-auto p-[19px] rounded-[15px] w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between my-1 w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtDMSansMedium16"
                      >
                        <span className="text-black-900 font-sfpro text-left font-medium">
                          johndeo.20@gmail.co
                        </span>
                        <span className="text-gray-400 font-sfpro text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-black-900 font-sfpro text-left font-medium">
                          |
                        </span>
                      </Text>
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    </div>
                  </div>
                  <Button
                    className="!text-deep_purple-A200 absolute cursor-pointer font-medium font-sfpro leading-[normal] left-[2%] min-w-[76px] text-center text-xl top-[0]"
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    Email*
                  </Button>
                </div>
                <div className="md:h-[100px] h-[83px] mt-[30px] relative w-full">
                  <div className="absolute bg-white-A700 border border-gray-400_01 border-solid bottom-[0] flex flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto p-5 rounded-[15px] w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtSFProBold16"
                    >
                      +1 (454) 3421 1432
                    </Text>
                    <Img
                      className="h-[22px] my-1 w-[22px]"
                      src="images/img_call_black_900.svg"
                      alt="call"
                    />
                  </div>
                  <Button
                    className="!text-gray-400_01 absolute cursor-pointer font-medium leading-[normal] left-[2%] min-w-[160px] text-center text-xl top-[0]"
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    Mobile Number
                  </Button>
                </div>
                <div className="md:h-[104px] h-[78px] mt-[34px] relative w-full">
                  <div className="absolute bg-white-A700 border border-gray-400_01 border-solid bottom-[0] flex flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto p-5 rounded-[15px] w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtSFProBold16"
                    >
                      @jon
                    </Text>
                    <Img
                      className="h-[22px] my-1 w-[22px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                  <Text
                    className="absolute left-[3%] text-gray-400_01 text-xl top-[0]"
                    size="txtSFProMedium20"
                  >
                    User Name*
                  </Text>
                </div>
                <div className="md:h-[103px] h-[79px] mt-[33px] relative w-full">
                  <div className="absolute bg-white-A700 border border-gray-400_01 border-solid bottom-[0] flex flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto p-5 rounded-[15px] w-full">
                    <Text
                      className="my-1 text-base text-black-900"
                      size="txtSFProBold16"
                    >
                      Male
                    </Text>
                    <Img
                      className="h-4"
                      src="images/img_offer.svg"
                      alt="offer"
                    />
                  </div>
                  <Text
                    className="absolute left-[3%] text-gray-400_01 text-xl top-[0]"
                    size="txtSFProMedium20"
                  >
                    Gender
                  </Text>
                </div>
                <FloatingInput
                  wrapClassName="bg-white-A700 border border-gray-200 border-solid flex pb-7 pl-5 pr-[35px] pt-[13px] rounded-[15px] top-[0] w-full"
                  className="font-medium leading-[normal] p-0 placeholder:bg-white-A700 placeholder:left-5 placeholder:text-gray-400_01 placeholder:top-[0] sm:pr-5 text-gray-400_01 text-left text-xl w-full"
                  name="password"
                  labelClasses="bg-white-A700 left-5 top-[0] text-gray-400_01"
                  focusedClasses="translate-y-[13px] scale-[1]"
                  wrapperClasses="mt-[30px] w-full top-[0]"
                  labelText="Password*"
                  defaultText="Password*"
                  suffix={
                    <Img
                      className="top-[0] my-auto"
                      src="images/img_call.svg"
                      alt="call"
                    />
                  }
                ></FloatingInput>
                <div className="md:h-[100px] h-[83px] mt-[30px] relative w-full">
                  <div className="absolute bg-white-A700 border border-gray-200 border-solid bottom-[0] flex flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto p-5 rounded-[15px] w-full">
                    <Img
                      className="h-3"
                      src="images/img_group2.svg"
                      alt="groupTwo"
                    />
                    <Img
                      className="h-4 my-[7px] w-4"
                      src="images/img_call.svg"
                      alt="call_One"
                    />
                  </div>
                  <Button
                    className="!text-gray-400_01 absolute cursor-pointer font-medium leading-[normal] left-[2%] min-w-[203px] text-center text-xl top-[0]"
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    Coframe Password*
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start mt-5 w-[86%] md:w-full">
                  <div className="bg-white-A700 border-2 border-gray-200 border-solid h-[26px] mb-[3px] rounded-[5px] w-[26px]"></div>
                  <Text
                    className="sm:mt-0 mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtSFProRegular22"
                  >
                    <span className="text-black-900 font-sfpro text-left font-normal">
                      I agree to the{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-deep_purple-A200 font-sfpro text-left font-bold underline"
                    >
                      Terms & Conditions
                    </a>
                    <span className="text-deep_purple-A200 font-sfpro text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-black-900 font-sfpro text-left font-normal">
                      and{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-deep_purple-A200 font-sfpro text-left font-bold underline"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="javascript:"
                      className="text-black-900 font-sfpro text-left font-normal underline"
                    >
                      .
                    </a>
                    <span className="text-black-900 font-sfpro text-left font-normal">
                      {" "}
                    </span>
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[671px] md:min-w-full mt-[46px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                  color="deep_purple_A200"
                  size="lg"
                  variant="fill"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterpagePage;
