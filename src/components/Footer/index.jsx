import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[115px] items-center justify-center w-full">
          <div className="h-[400px] relative w-full">
            <Img
              className="h-[400px] m-auto object-cover w-full"
              src="images/img_rectangle66495_400x1920.png"
              alt="rectangle66495"
            />
            <div className="absolute bg-deep_purple-A200_99 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[90px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[55px] items-center justify-start mb-[5px] w-[46%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                    size="txtSFProSemibold48"
                  >
                    subscribe our newsletter
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between p-2.5 rounded-[50px] w-full">
                  <Text
                    className="capitalize ml-[30px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-500"
                    size="txtSFProSemibold30"
                  >
                    <span className="text-gray-500 font-sfpro font-medium">
                      type{" "}
                    </span>
                    <span className="text-gray-500 font-sfpro lowercase font-medium">
                      YOUR
                    </span>
                    <span className="text-gray-500 font-sfpro font-medium">
                      {" "}
                    </span>
                    <span className="text-gray-500 font-sfpro lowercase font-medium">
                      GMAIL
                    </span>
                  </Text>
                  <Button
                    className="capitalize cursor-pointer font-bold font-sfpro min-w-[150px] rounded-[40px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                    color="deep_purple_A200"
                    size="xl"
                    variant="fill"
                  >
                    Sand
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-4/5 md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[27%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                        size="txtSFProSemibold48"
                      >
                        Feature Collections
                      </Text>
                    </div>
                    <Line className="bg-gradient2  h-[5px] w-[49%]" />
                  </div>
                  <div className="bg-white-A700_19 flex md:flex-1 flex-row sm:gap-10 items-center justify-between md:mt-0 my-1 sm:px-5 px-[30px] rounded-[15px] w-[53%] md:w-full">
                    <Img
                      className="h-[45px] md:h-auto object-cover w-[45px]"
                      src="images/img_component77variant8.png"
                      alt="component77vari_One"
                    />
                    <Img
                      className="h-[45px] w-[45px]"
                      src="images/img_polygon2.svg"
                      alt="polygonTwo_One"
                    />
                    <div className="bg-white-A700 h-[45px] my-3 rounded-[22px] w-[45px]"></div>
                    <div className="bg-white-A700 h-[45px] my-3 w-[45px]"></div>
                    <div className="bg-deep_purple-A200 flex flex-col items-center justify-end p-3 rounded-[5px]">
                      <div className="bg-white-A700 h-[45px] rounded-[5px] w-[45px]"></div>
                    </div>
                    <div className="bg-white-A700 h-[45px] my-3 rounded-bl-[5px] rounded-br-[5px] rounded-tl-[50%] rounded-tr-[50%] w-[45px]"></div>
                  </div>
                </div>
                <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-14 w-full">
                  <div className="h-[676px] relative w-full">
                    <Img
                      className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_rectangle66483_676x490.png"
                      alt="rectangle66483"
                    />
                    <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                        <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                          <li>
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Hooded neck Raglan
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="mt-1.5 text-lg text-white-A700"
                              size="txtSFProRegular18WhiteA700"
                            >
                              Omar Ekstrom Bothman
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </li>
                        </ul>
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
                  <div className="h-[676px] relative w-full">
                    <Img
                      className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_rectangle66483_676x490.png"
                      alt="rectangle66483_One"
                    />
                    <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                        <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                          <li>
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Hooded neck Raglan
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="mt-1.5 text-lg text-white-A700"
                              size="txtSFProRegular18WhiteA700"
                            >
                              Omar Ekstrom Bothman
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </li>
                        </ul>
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
                              alt="computer_One"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[676px] relative w-full">
                    <Img
                      className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_rectangle66483_676x490.png"
                      alt="rectangle66483_Two"
                    />
                    <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                        <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                          <li>
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Hooded neck Raglan
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="mt-1.5 text-lg text-white-A700"
                              size="txtSFProRegular18WhiteA700"
                            >
                              Omar Ekstrom Bothman
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </li>
                        </ul>
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
                              alt="computer_Two"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold font-sfpro min-w-[300px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                  shape="round"
                  color="deep_purple_A200"
                  size="lg"
                  variant="fill"
                >
                  See More
                </Button>
              </div>
            </div>
            <Img
              className="h-[74px]"
              src="images/img_group1000009441.svg"
              alt="group1000009441"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[63px] items-start justify-start w-[29%] md:w-full">
                    <div className="flex flex-row items-start justify-start w-1/4 md:w-full">
                      <Text
                        className="mt-[35px] text-deep_purple-A200 text-xl"
                        size="txtEbrimaBold20"
                      >
                        My
                      </Text>
                      <div className="md:h-[72px] h-[86px] ml-0.5 relative w-[70%]">
                        <Img
                          className="absolute h-[25px] inset-x-[0] mx-auto top-[0]"
                          src="images/img_camera.svg"
                          alt="camera"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[73px] inset-x-[0] items-center justify-start mx-auto p-2.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group237.svg')",
                          }}
                        >
                          <Text
                            className="my-3 text-white-A700 text-xl"
                            size="txtAlataRegular20"
                          >
                            Scope
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="leading-[38.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtSFProRegular24"
                    >
                      Lorem ipsum dolor sit amet consectetur. Leo nascetur eu
                      platea integer proin eget nibh arcu. Eget enim
                      pellentesque
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between md:mt-0 mt-[43px] w-[64%] md:w-full">
                    <div className="flex flex-col gap-[22px] items-center justify-start w-[17%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Marketplace
                      </Text>
                      <ul className="flex flex-col gap-[15px] items-start justify-start w-full common-column-list">
                        <li>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            All NFT’s
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Art
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Music
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Domain Names
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Collections
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Virtual World
                          </Text>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-[13%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Company
                      </Text>
                      <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                        <li>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Explore
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mt-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            About
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Contact Us
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Our Blog
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mt-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            FAQ
                          </Text>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[22px] items-start justify-start w-[23%] sm:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        My Account
                      </Text>
                      <ul className="flex flex-col items-start justify-start w-full common-column-list">
                        <li>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Authors
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Collections
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Authors Profile
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            Create Items
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="capitalize mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            trams and condition
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="capitalize mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtSFProRegular24"
                          >
                            privacy policy
                          </Text>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Line className="bg-white-A700 h-px mt-[34px] w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[19px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProRegular24"
                  >
                    Copyright © 2023, MyScope All Rights Reserved.
                  </Text>
                  <div className="flex md:flex-1 flex-row gap-[35px] items-center justify-between w-[24%] md:w-full">
                    <Text
                      className="capitalize text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtMulishSemiBold22"
                    >
                      follow us :
                    </Text>
                    <div className="flex flex-row gap-5 items-center justify-between w-3/5">
                      <Button
                        className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                        color="deep_purple_A200"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[34px]"
                          src="images/img_phinstagramlogo.svg"
                          alt="phinstagramlogo"
                        />
                      </Button>
                      <Button
                        className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[34px]"
                          src="images/img_icbaselinetiktok.svg"
                          alt="icbaselinetikto"
                        />
                      </Button>
                      <div className="bg-white-A700 flex flex-col h-[60px] items-center justify-end p-3 rounded-[50%] w-[60px]">
                        <div className="flex flex-col h-[34px] items-center justify-start w-[34px]">
                          <Img
                            className="h-[34px] w-[34px]"
                            src="images/img_mditwitter.svg"
                            alt="mditwitter"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
