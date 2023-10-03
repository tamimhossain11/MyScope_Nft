import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, FloatingInput, Img, Line, Text } from "components";

const LoginpagePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1800px] mx-auto md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 h-[960px] items-center justify-between w-[1800px] md:w-full">
            <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
              <div className="h-[960px] relative w-full">
                <Img
                  className="h-[960px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_rectangle66495.png"
                  alt="rectangle66495"
                />
                <div className="absolute bg-black-900_19 flex flex-col h-[960px] inset-[0] items-center justify-center m-auto p-[215px] md:px-10 sm:px-5 rounded-[30px] w-[880px]">
                  <Img
                    className="h-[357.px] md:h-[357px] sm:h-auto my-[86px] object-cover w-[450px] md:w-full"
                    src="images/img_myscpelogo1.png"
                    alt="myscpelogoOne"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-[55px] items-center justify-start w-full">
                <div className="flex flex-col gap-3 items-center justify-start">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                    size="txtSFProBold40"
                  >
                    Login Your Account
                  </Text>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                    size="txtSFProMedium28"
                  >
                    Sign In to Continue
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:h-[67px] h-[83px] relative w-full">
                    <div className="absolute bg-white-A700 border border-deep_purple-A200 border-solid bottom-[0] flex flex-col font-dmsans inset-x-[0] items-center justify-start mx-auto p-[19px] rounded-[15px] w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between my-1 w-full">
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
                          className="h-4 mt-0.5 w-4"
                          src="images/img_location.svg"
                          alt="location"
                        />
                      </div>
                    </div>
                    <Button
                      className="!text-deep_purple-A200 absolute cursor-pointer font-medium font-sfpro leading-[normal] left-[2%] min-w-[172px] text-center text-xl top-[0]"
                      shape="square"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      Email or Number
                    </Button>
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
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[19px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start mb-0.5">
                      <div className="bg-white-A700 border-2 border-gray-200 border-solid h-[26px] rounded-[5px] w-[26px]"></div>
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtSFProRegular22"
                      >
                        Remember me
                      </Text>
                    </div>
                    <a
                      href="javascript:"
                      className="mt-0.5 text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl underline"
                    >
                      <Text size="txtSFProMedium22">Forgot password?</Text>
                    </a>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[671px] md:min-w-full mt-[46px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                    color="deep_purple_A200"
                    size="lg"
                    variant="fill"
                  >
                    Log In
                  </Button>
                  <div className="flex flex-row items-start justify-center mt-[29px] w-[48%] md:w-full">
                    <a
                      href="javascript:"
                      className="mb-0.5 text-[22px] text-black-900 sm:text-lg text-right md:text-xl"
                    >
                      <Text size="txtSFProRegular22">
                        Don’t have an account?
                      </Text>
                    </a>
                    <a
                      href="javascript:"
                      className="ml-[5px] mt-0.5 text-[22px] text-deep_purple-A200 sm:text-lg text-right md:text-xl underline"
                    >
                      <Text size="txtSFProSemibold22">Register</Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-[22px] md:h-[66px] mt-11 relative w-[99%] md:w-full">
                <Img
                  className="absolute bottom-[45%] h-px inset-x-[0] mx-auto object-cover"
                  src="images/img_group1000009849.png"
                  alt="group1000009849"
                />
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtSFProRegular18"
                  >
                    Concoct With Social Media Or Your Wallet{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[46px] w-full">
                <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-center w-1/4 md:w-full">
                    <Img
                      className="h-[17px] md:h-auto object-cover w-[16%]"
                      src="images/img_maskgroup_17x26.png"
                      alt="maskgroup"
                    />
                    <Text
                      className="ml-[5px] text-[22px] text-gray-400_01 sm:text-lg md:text-xl"
                      size="txtSFProMedium22Gray40001"
                    >
                      Mobile Wallet
                    </Text>
                  </div>
                  <Line className="bg-gray-400_01 h-px w-full" />
                </div>
              </div>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[671px] md:min-w-full mt-[38px] rounded-[15px]"
                onClick={() => googleSignIn()}
                leftIcon={
                  <div className="h-5 mt-1 mb-[9px] mr-5 w-5 bg-white-A700">
                    <Img
                      className="h-5"
                      src="images/img_vector_white_a700_1.svg"
                      alt="Vector"
                    />
                  </div>
                }
                color="blue_A200"
                size="lg"
                variant="fill"
              >
                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-center">
                  Google
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginpagePage;
