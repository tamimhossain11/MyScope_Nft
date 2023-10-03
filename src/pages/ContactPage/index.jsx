import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ContactPagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-end mx-auto p-3.5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1530px] mt-[25px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              className="md:flex-1 h-[85px] sm:h-auto object-cover w-[8%] md:w-full"
              src="images/img_myscpelogo1.png"
              alt="myscpelogoOne"
            />
            <Input
              name="group1000010222"
              placeholder="Search"
              value={group1000010222value}
              onChange={(e) => setGroup1000010222value(e)}
              className="!placeholder:text-white-A700 !text-white-A700 p-0 text-left text-lg w-full"
              wrapClassName="flex md:flex-1 mb-1 md:ml-[0] ml-[49px] md:mt-0 mt-4 rounded-[32px] w-[21%] md:w-full"
              prefix={
                <Img
                  className="cursor-pointer mr-[5px] my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#ffffff"
                  className="cursor-pointer my-auto"
                  onClick={() => setGroup1000010222value("")}
                  style={{
                    visibility:
                      group1000010222value?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={32}
                  width={30}
                  viewBox="0 0 30 32"
                />
              }
              shape="round"
              size="sm"
            ></Input>
            <Text
              className="md:ml-[0] ml-[100px] md:mt-0 mt-[31px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Home
            </Text>
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[45px] md:mt-0 mt-8 w-[4%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtSFProSemibold20"
              >
                Pages
              </Text>
              <Img
                className="h-[5px]"
                src="images/img_line75.svg"
                alt="lineSeventyFive"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[45px] md:mt-0 mt-8 text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Explore
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] md:mt-0 mt-[31px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Resources
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] md:mt-0 mt-[30px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Create
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] md:mt-0 mt-[30px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              NFT GAme
            </Text>
            <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:ml-[0] ml-[65px] md:mt-0 mt-4 w-[15%] md:w-full">
              <div className="h-16 relative w-[28%]">
                <div className="bg-white-A700_19 h-16 m-auto rotate-[180deg] rounded-[32px] w-full"></div>
                <Img
                  className="absolute h-[35px] inset-x-[0] mx-auto top-[13%] w-[35px]"
                  src="images/img_materialsymbol_white_a700_1.svg"
                  alt="materialsymbol"
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <Img
                  className="h-16 md:h-auto object-cover rounded-bl-[32px] rounded-br-[32px] w-full"
                  src="images/img_ellipse141_64x60.png"
                  alt="ellipse141"
                />
              </div>
              <Img
                className="h-16"
                src="images/img_group1000009458_white_a700_64x60.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[605px] mt-[116px] w-[21%] md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
              <Text
                className="mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                size="txtSFProRegular38"
              >
                Page
              </Text>
              <Radio
                value="ContactUs"
                className="font-semibold mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                checked={false}
                name="contactus"
                label="Contact Us"
                id="ContactUs"
              ></Radio>
            </div>
            <Line className="bg-gradient2  h-[5px] w-[65%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[99px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[57%] md:w-full">
              <div className="flex flex-col gap-[17px] items-start justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtSFProBold48"
                >
                  Contact Us
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProRegular28"
                >
                  <>
                    Have A Question? Need Help? Don&#39;t Hesitate, Drop Us A
                    Line
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start mt-[54px] w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  <span className="text-white-A700 font-sfpro text-left font-semibold">
                    Name
                  </span>
                  <span className="text-deep_purple-A200 font-sfpro text-left font-semibold">
                    *
                  </span>
                </Text>
                <Input
                  name="group1000009489"
                  placeholder="Type Your Name....."
                  className="!placeholder:text-white-A700 !text-white-A700 md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
                  wrapClassName="rounded-[15px] w-full"
                  type="text"
                  size="md"
                ></Input>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start mt-[27px] w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  <span className="text-white-A700 font-sfpro text-left font-semibold">
                    Email Address
                  </span>
                  <span className="text-deep_purple-A200 font-sfpro text-left font-semibold">
                    *
                  </span>
                </Text>
                <Input
                  name="email"
                  placeholder="3earth@gmail.com"
                  className="!placeholder:text-white-A700 !text-white-A700 md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
                  wrapClassName="rounded-[15px] w-full"
                  type="email"
                  size="md"
                ></Input>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start mt-[27px] w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  <span className="text-white-A700 font-sfpro text-left font-semibold">
                    Headline
                  </span>
                  <span className="text-deep_purple-A200 font-sfpro text-left font-semibold">
                    *
                  </span>
                </Text>
                <Input
                  name="group1000009489_One"
                  placeholder="Type Your Headline....."
                  className="!placeholder:text-white-A700 !text-white-A700 md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
                  wrapClassName="rounded-[15px] w-full"
                  size="md"
                ></Input>
              </div>
              <Text
                className="mt-[29px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                size="txtSFProSemibold28"
              >
                Message
              </Text>
              <div className="bg-white-A700_19 flex flex-col items-center justify-start mt-3.5 p-[15px] rounded-[15px] w-full">
                <div className="flex flex-col items-start justify-start mb-3.5 w-[99%] md:w-full">
                  <div className="flex flex-row font-dmsans items-start justify-start w-[30%] md:w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-[67%]">
                      <Text
                        className="mb-0.5 md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
                        size="txtDMSansBold26"
                      >
                        T
                      </Text>
                      <Text
                        className="mb-0.5 md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
                        size="txtDMSansBold26"
                      >
                        B
                      </Text>
                      <Img
                        className="h-5 mt-[7px] w-5"
                        src="images/img_ticket_white_a700.svg"
                        alt="ticket"
                      />
                      <Text
                        className="mt-0.5 md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700 underline"
                        size="txtDMSansBold26"
                      >
                        U
                      </Text>
                    </div>
                    <Line className="bg-white-A700 h-[33px] mb-[3px] ml-[30px] w-px" />
                    <Img
                      className="h-[22px] ml-[29px] mt-1.5 w-[22px]"
                      src="images/img_camera_white_a700.svg"
                      alt="camera"
                    />
                  </div>
                  <Line className="bg-white-A700 h-px mt-2 w-full" />
                  <Text
                    className="leading-[40.00px] mt-[29px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-[99%] sm:w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    <>
                      Provide A Detailed Description Of Your Item. Don&#39;t
                      Hesitaste, Drop Us A Line Collaboratively Administrate
                      Channels Whereas Virtual. Objectively Seize Scalable
                      Metrics Whereas Proactive E-Services. Provide A Detailed
                      Description Of Your Item. Don&#39;t Hesitaste, Drop Us A
                      Line Collaboratively Administrate Channels Whereas
                      Virtual.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start w-[34%] md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtSFProBold48"
                >
                  Information
                </Text>
                <Text
                  className="leading-[45.00px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                  size="txtSFProRegular28"
                >
                  <>
                    Don&#39;t Hesitaste, Drop Us A Line Collaboratively
                    Administrate Channels Whereas Virtual. Objectively Seize
                    Scalable Metrics Whereas Proactive E-Services.
                  </>
                </Text>
              </div>
              <div className="bg-white-A700_19 flex flex-col gap-7 items-start justify-end p-[38px] sm:px-5 rounded-[15px] w-[97%] md:w-full">
                <div className="flex flex-row gap-5 items-start justify-start w-[54%] md:w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center mb-0.5 rounded-[50%] w-[60px]"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[35px]"
                      src="images/img_icbaselinephoneintalk.svg"
                      alt="icbaselinephone"
                    />
                  </Button>
                  <div className="flex flex-col gap-1.5 justify-start">
                    <Text
                      className="ml-1.5 md:ml-[0] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtSFProSemibold24WhiteA700"
                    >
                      Phone
                    </Text>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtSFProRegular22WhiteA700"
                    >
                      (123) 123-456
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-[99%] md:w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center mb-0.5 rounded-[50%] w-[60px]"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[35px]"
                      src="images/img_materialsymbolslocationon.svg"
                      alt="materialsymbols"
                    />
                  </Button>
                  <div className="flex flex-col gap-1.5 items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtSFProSemibold24WhiteA700"
                    >
                      Address
                    </Text>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtSFProRegular22WhiteA700"
                    >
                      08 W 36th St, New YorkNY 10001
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[69%] md:w-full">
                  <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <div className="bg-white-A700 flex flex-col h-[60px] items-center justify-end p-3 rounded-[50%] w-[60px]">
                      <div className="flex flex-col h-[35px] items-center justify-start w-[35px]">
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_mail.svg"
                          alt="mail"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtSFProSemibold24WhiteA700"
                      >
                        Email
                      </Text>
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                        size="txtSFProRegular22WhiteA700"
                      >
                        Office@Xhibiter.Com
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold min-w-[200px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
            shape="round"
            color="deep_purple_A200"
            size="lg"
            variant="fill"
          >
            Submit
          </Button>
          <div className="flex flex-col items-center justify-start mt-[326px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="md:h-[172px] h-[228px] relative w-[29%] md:w-full">
                  <div className="absolute flex flex-col font-alata items-center justify-start left-[0] top-[0] w-1/4">
                    <div className="flex flex-col gap-[52px] justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[43px] text-white-A700 text-xl"
                        size="txtAlataRegular20"
                      >
                        Scope
                      </Text>
                      <div className="flex flex-row font-ebrima items-start justify-evenly w-full">
                        <Text
                          className="mt-[39px] text-deep_purple-A200 text-xl"
                          size="txtEbrimaBold20"
                        >
                          My
                        </Text>
                        <div className="md:h-[79px] h-[92px] relative w-[70%]">
                          <Img
                            className="absolute h-[27px] inset-x-[0] mx-auto top-[0]"
                            src="images/img_camera.svg"
                            alt="camera_One"
                          />
                          <Img
                            className="absolute bottom-[0] h-[79px] inset-x-[0] mx-auto"
                            src="images/img_group237.svg"
                            alt="menu"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] leading-[38.00px] mx-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtSFProRegular24"
                  >
                    Lorem ipsum dolor sit amet consectetur. Leo nascetur eu
                    platea integer proin eget nibh arcu. Eget enim pellentesque
                  </Text>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:mt-0 mt-2 w-[64%] md:w-full">
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

export default ContactPagePage;
