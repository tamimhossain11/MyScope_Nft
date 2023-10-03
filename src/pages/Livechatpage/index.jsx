import React, { useState } from "react";

import { Button, Img,  Line, List, Radio, Text } from "components";

import Navbar from "components/Navbar";

const LivechatpagePage = () => {
        // Step 1: Add a state variable to track the background color
  const [backgroundColor, setBackgroundColor] = useState("#05011D");

  // Step 2: Create a function to toggle the background color
  const toggleBackgroundColor = () => {
    // Toggle between white and original background color
    setBackgroundColor((prevColor) => (prevColor === "#05011D" ? "#FFF" : "#05011D"));
  };

  return (
    <>
      <div className="flex flex-col font-sfpro items-center justify-end mx-auto p-9 sm:px-5 w-full" style={{ backgroundColor }}>
        <div className="flex flex-col items-center justify-start  w-[1920px]">
        <Navbar onIconClick={toggleBackgroundColor} />
      </div>
        <div className="flex flex-col items-center justify-start max-w-[1530px] mt-[3px] mx-auto md:px-5 w-full">
         
          <div className="flex flex-col gap-[15px] items-center justify-start mt-[116px] w-[19%] md:w-full">
            <div className="flex flex-row gap-[7px] items-center justify-between w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                size="txtSFProRegular38"
              >
                Home
              </Text>
              <Radio
                value="LiveChat"
                className="font-semibold md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                checked={false}
                name="livechat"
                label="Live Chat"
                id="LiveChat"
              ></Radio>
            </div>
            <Line className="bg-gradient2  h-[5px] w-[72%]" />
          </div>
          <div className="bg-white-A700_19 flex flex-col font-dmsans justify-start mt-[55px] pt-[83px] rounded-[20px] w-full">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[60px] w-[45%] md:w-full">
              <div className="flex flex-col gap-[13px] justify-start w-full">
                <div className="flex flex-row gap-[15px] items-end justify-start w-[26%] md:w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center mb-0.5 mt-2.5 rounded-[13px] w-[60px]"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_mdisupport.svg"
                      alt="mdisupport"
                    />
                  </Button>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[72px] items-end justify-start p-[17px]"
                    style={{
                      backgroundImage: "url('images/img_group1000009967.svg')",
                    }}
                  >
                    <Text
                      className="mb-0.5 mr-[9px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center"
                      size="txtDMSansMedium26"
                    >
                      Hi
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start md:ml-[0] ml-[94px] sm:px-5 px-[27px] py-[22px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[5px] rounded-tr-[20px] w-auto sm:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center w-auto"
                    size="txtDMSansMedium26"
                  >
                    Thanks for Messaging, How may I help you?
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[795px] mt-[53px] w-[45%] md:w-full">
              <div className="flex flex-col gap-[13px] justify-start w-full">
                <div className="flex flex-row gap-[15px] items-end justify-end md:ml-[0] ml-[463px] w-[32%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[72px] items-start justify-start p-[17px]"
                    style={{
                      backgroundImage: "url('images/img_group1000009969.svg')",
                    }}
                  >
                    <Text
                      className="mb-0.5 ml-2.5 md:ml-[0] md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
                      size="txtDMSansMedium26WhiteA700"
                    >
                      Hello
                    </Text>
                  </div>
                  <Img
                    className="h-[60px] md:h-auto mb-0.5 mt-2.5 object-cover rounded-[13px] w-[60px]"
                    src="images/img_rectangle66575.png"
                    alt="rectangle66575"
                  />
                </div>
                <div className="bg-deep_purple-A200 flex flex-col items-start justify-start mr-[94px] sm:px-5 px-[27px] py-[22px] rotate-[180deg] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[5px] rounded-tr-[20px] w-auto sm:w-full">
                  <Text
                    className="leading-[36.00px] max-w-[527px] md:max-w-full rotate-[180deg] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                    size="txtDMSansMedium26WhiteA700"
                  >
                    Lorem ipsum dolor sit amet consectetur. Pellentesque
                    curabitur cursus quis fusce ut volutpat id id rhoncus.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-2.5 items-end justify-start md:ml-[0] ml-[60px] mt-[50px] w-[44%] md:w-full">
              <Button
                className="flex h-[60px] items-center justify-center mb-0.5 md:mt-0 mt-[92px] rounded-[13px] w-[60px]"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-10"
                  src="images/img_mdisupport.svg"
                  alt="mdisupport_One"
                />
              </Button>
              <div className="md:h-[152px] h-[154px] relative w-[90%] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[5px] rounded-tr-[20px]">
                  <Text
                    className="leading-[36.00px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-[99%] sm:w-full"
                    size="txtDMSansMedium26"
                  >
                    Lorem ipsum dolor sit amet consectetur. Pellentesque
                    curabitur cursus quis fusce ut volutpat id id rhoncus.
                  </Text>
                </div>
                <Img
                  className="absolute bottom-[0] h-[45px] left-[0] rounded-sm w-[45px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[15px] items-end justify-end md:ml-[0] ml-[795px] mt-[60px] w-[45%] md:w-full">
              <div className="md:h-[116px] h-[118px] relative w-[89%] md:w-full">
                <Img
                  className="absolute bottom-[0] h-[45px] right-[0] rounded-sm w-[45px]"
                  src="images/img_play.svg"
                  alt="play"
                />
                <div className="absolute bg-deep_purple-A200 flex flex-col h-max inset-[0] items-center justify-start m-auto sm:px-5 px-[27px] py-[22px] rotate-[180deg] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[5px] rounded-tr-[20px] w-auto">
                  <Text
                    className="leading-[36.00px] max-w-[527px] md:max-w-full rotate-[180deg] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                    size="txtDMSansMedium26WhiteA700"
                  >
                    Lorem ipsum dolor sit amet consectetur. Pellentesque
                    curabitur.
                  </Text>
                </div>
              </div>
              <Img
                className="h-[60px] md:h-auto mb-0.5 md:mt-0 mt-14 object-cover rounded-[13px] w-[60px]"
                src="images/img_rectangle66575.png"
                alt="rectangle66575_One"
              />
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-end mt-[81px] p-2.5 rounded-[20px] w-full">
              <Img
                className="h-[35px] w-[35px]"
                src="images/img_icbaselineemojiemotions.svg"
                alt="icbaselineemoji"
              />
              <Text
                className="capitalize md:ml-[0] ml-[30px] text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                size="txtDMSansRegular22"
              >
                Type Here....
              </Text>
              <Button
                className="flex h-[60px] items-center justify-center md:ml-[0] ml-[1249px] mr-[5px] rounded-[20px] w-[60px]"
                color="deep_purple_A200_01"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-[30px]"
                  src="images/img_carbonsendaltfilled.svg"
                  alt="carbonsendaltfi"
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-col font-sfpro items-center justify-start mt-[120px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[63px] items-start justify-start w-[29%] md:w-full">
                  <div className="flex flex-row font-ebrima items-start justify-start w-1/4 md:w-full">
                    <Text
                      className="mt-[35px] text-deep_purple-A200 text-xl"
                      size="txtEbrimaBold20"
                    >
                      My
                    </Text>
                    <div className="font-alata md:h-[72px] h-[86px] ml-0.5 relative w-[70%]">
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
                    platea integer proin eget nibh arcu. Eget enim pellentesque
                  </Text>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-[43px] w-[64%] md:w-full">
                  <div className="flex flex-col gap-[22px] items-center justify-start w-[17%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      Marketplace
                    </Text>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtSFProRegular24"
                      >
                        All NFT’s
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtSFProRegular24"
                      >
                        Art
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtSFProRegular24"
                      >
                        Music
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtSFProRegular24"
                      >
                        Domain Names
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtSFProRegular24"
                      >
                        Collections
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtSFProRegular24"
                      >
                        Virtual World
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-60 grid sm:grid-cols-1 grid-cols-2 w-3/5 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-6 items-start justify-start mb-[45px] sm:ml-[0] w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        Company
                      </Text>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Explore
                        </Text>
                        <Text
                          className="mt-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          About
                        </Text>
                        <Text
                          className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Contact Us
                        </Text>
                        <Text
                          className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Our Blog
                        </Text>
                        <Text
                          className="mt-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          FAQ
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[22px] items-start justify-start sm:ml-[0] w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtSFProSemibold28"
                      >
                        My Account
                      </Text>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Authors
                        </Text>
                        <Text
                          className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Collections
                        </Text>
                        <Text
                          className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Authors Profile
                        </Text>
                        <Text
                          className="mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          Create Items
                        </Text>
                        <Text
                          className="capitalize mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          trams and condition
                        </Text>
                        <Text
                          className="capitalize mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtSFProRegular24"
                        >
                          privacy policy
                        </Text>
                      </div>
                    </div>
                  </List>
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
                <div className="flex md:flex-1 flex-row font-mulish gap-[35px] items-center justify-between w-[24%] md:w-full">
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
    </>
  );
};

export default LivechatpagePage;
