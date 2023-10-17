import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Button, Img, Line, Text } from "components";
import { AiFillApple } from 'react-icons/ai';
import { BiLogoGoogle } from 'react-icons/bi';
import LoginForm from "Forms/LoginForm";


const Loginpage = () => {

  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successful. 😍");
    },
  });

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[5%] items-start justify-start max-w-[1800px] mb-[25px] mx-auto  md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
            <div className=" h-[960px] sm:h-[460px]  relative w-full">
              <Img
                className=" h-[960px] sm:h-[460px] m-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle66495.png"
                alt="rectangle66495"
              />
              <div className="absolute bg-black-900_19 flex flex-col h-full inset-[0] items-center justify-center md:px-40 sm:px-5 rounded-[30px]">
                <Img
                  className="h-[357px] md:h-auto my-[86px] object-cover"
                  src="images/img_myscpelogo1.png"
                  alt="myscpelogoOne"
                />
              </div>
            </div>
          </div>
          {/*Scroller effect and responsiveness should implemented from here  */}

          <div className="custom-scrollbar flex md:flex-1 flex-col  justify-start md:mt-0 w-[47%] md:w-full  md:pr-0">
            <div className="flex flex-col gap-[55px]  mt-10 items-center justify-start w-full">
              <div className="flex flex-col gap-3 items-center justify-start">
                <Text
                  className="sfprotext-regular sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
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
              <div className="flex flex-col gap-[20px] w-full">

                <LoginForm />

                <div className="flex flex-row items-start justify-center mt-[29px] w-[90%] md:w-full">
                  <div

                    className="mb-0.5 text-[22px] text-black-900 sm:text-lg text-right md:text-xl"
                  >
                    <Text size="txtSFProRegular22">Don’t have an account?</Text>
                  </div>
                  <a
                    href="registerpage"
                    className="ml-[5px] mt-0.5 text-[22px] text-deep_purple-A200 sm:text-lg text-right md:text-xl underline"
                  >
                    <Text size="txtSFProSemibold22">Register</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[22px] md:h-[20px] mt-11 relative w-[90%] md:w-full ">
              <Img
                className="absolute bottom-[45%]  inset-x-[0] mx-auto object-cover"
                src="images/img_group1000009849.png"
                alt="group1000009849"
              />
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto">
                <Text
                  className="text-black-900 text-lg"
                  size="txtSFProRegular18"
                >
                  Connect With Social Media Or Your Wallet{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[46px] w-[90%] md:w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start w-full  ">
                <div className="flex flex-row items-center justify-center w-[45%] md:w-[45%]">
                  <Img
                    className="h-[17px] md:h-[10%] object-cover w-[8%]"
                    src="images/img_maskgroup_17x26.png"
                    alt="maskgroup"
                  />
                  <Text
                    className="ml-[5px] text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                    size="txtSFProMedium22"
                  >
                    Mobile Wallet
                  </Text>
                </div>
                <Line className="bg-black-900 h-px w-full" />
              </div>

              <Button
                className="cursor-pointer font-bold w-full min:w-[671px] mt-[46px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px]  flex items-center justify-center"
                onClick={() => googleSignIn()}
                leftIcon={
                  < BiLogoGoogle
                    style={{ marginRight: '15px' }}
                  />
                }
                color="blue_A200"
                size="lg"
                variant="fill"
              >
                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-center">
                  Google
                </div>
              </Button>

              <Button
                className="cursor-pointer font-bold w-full min:w-[651px] mt-[90px] md:mt-[20px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px]  flex items-center justify-center"
                leftIcon={
                  < AiFillApple
                    style={{ fontSize: '30px', marginRight: '15px' }}
                  />
                }
                color="gray_700"
                size="lg"
                variant="fill"
              >
                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-center">
                  Apple
                </div>
              </Button>
              <Button
                className="cursor-pointer font-bold w-full min:w-[671px] mt-[20px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px]  flex items-center justify-center"
                leftIcon={
                  <Img
                    className="h-7 mt-0.5 mb-[3px] mr-[15px]"
                    src="images/img_logosmetamaskicon.svg"
                    alt="logos:metamask-icon"
                  />
                }
                color="black_900"
                size="lg"
                variant="fill"
              >
                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-left">
                  Metamask
                </div>
              </Button>
              <Button
                className="cursor-pointer font-bold w-full min:w-[671px] mt-[20px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] flex items-center justify-center"
                style={{ backgroundColor: "#0052FF" }}
                leftIcon={
                  <Img
                    className="h-10 w-10 mr-[15px]"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                }
                color="blue_A700"
                size="lg"
                variant="fill"
              >
                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-left">
                  Coinbase Wallet
                </div>
              </Button>
              <Button
                className="cursor-pointer font-bold w-full min:w-[671px] mt-[20px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px]  flex items-center justify-center"
                style={{ backgroundColor: "#3A96FF" }}
                leftIcon={<Img
                  className="h-6 mt-[7px] mr-[15px]"
                  src="images/img_reply.svg"
                  alt="reply"
                />
                }
                color="blue_A200"
                size="lg"
                variant="fill"
              >
                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-left">
                  WalletConnect

                </div>
              </Button>

              <Button
                className="cursor-pointer font-bold w-full min:w-[671px] mt-[20px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px]  flex items-center justify-center"
                
                leftIcon={
                  <Img
                    className="h-[34px] mr-[15px]"
                    src="images/img_computer.svg"
                    alt="computer"
                  />
                }
                color="black_900"
                size="lg"
                variant="fill"
              >
                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-left">
                  Ledger

                </div>
              </Button>

              <Button
                className="cursor-pointer font-bold w-full min:w-[671px] mt-[20px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px]  flex items-center justify-center"
                style={{ backgroundColor: "#5345BA" }}
                leftIcon={
                  <Img className="h-6 mt-[7px] mr-[15px]"
                    src="images/img_group1000010417.png"
                    alt="group1000010417"
                  />
                }
                size="lg"
                variant="fill"
                color="black_900"
              >

                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-left">

                  Phantom
                </div>
              </Button>
              <Button
                className="cursor-pointer font-bold w-full min:w-[671px] mt-[20px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px]  flex items-center justify-center"
                style={{ backgroundColor: "#6312AF" }}
                leftIcon={
                  <Img
                    className="h-[33px] mr-[15px]"
                    src="images/img_location_white_a700.svg"
                    alt="location"
                  />
                }
                size="lg"
                variant="fill"
                color="deep_purple_A200"
              >
                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-left">
                  BitKeep

                </div>
              </Button>

              <Button
                className="cursor-pointer font-bold w-full min:w-[671px] mt-[20px] mb-[30px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px]  flex items-center justify-center"
                leftIcon={
                  <Img
                    className="h-10 md:h-auto object-cover w-10 mr-[15px]"
                    src="images/img_unnamed.png"
                    alt="unnamed"
                  />
                }
                size="lg"
                variant="fill"
                color="black_900"
              >

                <div className="font-bold md:text-[26px] sm:text-2xl text-[28px] text-left">
                  Core

                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
