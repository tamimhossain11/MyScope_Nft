import React from "react";

import { Button, Img, Input, Line, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CreatepagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-end mx-auto p-[30px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1530px] mt-[9px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[59%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                <Img
                  className="h-[85px] sm:h-auto object-cover w-[13%] md:w-full"
                  src="images/img_myscpelogo1.png"
                  alt="myscpelogoOne"
                />
                <Input
                  name="group1000010222"
                  placeholder="Search"
                  value={group1000010222value}
                  onChange={(e) => setGroup1000010222value(e)}
                  className="!placeholder:text-white-A700 !text-white-A700 p-0 text-left text-lg w-full"
                  wrapClassName="flex md:ml-[0] ml-[49px] md:mt-0 my-3 w-[38%] md:w-full"
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
                          group1000010222value?.length <= 0
                            ? "hidden"
                            : "visible",
                      }}
                      height={29}
                      width={30}
                      viewBox="0 0 30 29"
                    />
                  }
                  shape="round"
                ></Input>
                <Text
                  className="md:ml-[0] ml-[100px] md:mt-0 mt-[37px] text-white-A700 text-xl"
                  size="txtSFProRegular20"
                >
                  Home
                </Text>
                <Text
                  className="md:ml-[0] ml-[45px] md:mt-0 mt-[38px] text-white-A700 text-xl"
                  size="txtSFProRegular20"
                >
                  Pages
                </Text>
                <Text
                  className="md:ml-[0] ml-[45px] md:mt-0 mt-[38px] text-white-A700 text-xl"
                  size="txtSFProRegular20"
                >
                  Explore
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start md:ml-[0] ml-[639px] mt-[126px] w-[29%] md:w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                    size="txtSFProRegular38"
                  >
                    Home
                  </Text>
                  <Radio
                    value="Create"
                    className="font-semibold md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                    inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                    checked={false}
                    name="create"
                    label="Create"
                    id="Create"
                  ></Radio>
                </div>
                <Line className="bg-gradient2  h-[5px] w-3/5" />
              </div>
              <Text
                className="mt-[119px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtSFProSemibold32WhiteA700"
              >
                <span className="text-white-A700 font-sfpro text-left font-semibold">
                  Image, Video, Audio, Or 3D Model
                </span>
                <span className="text-deep_purple-A200 font-sfpro text-left font-semibold">
                  *
                </span>
              </Text>
              <Text
                className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtSFProRegular24"
              >
                Drag Or Choose Your File To Upload
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[13px] w-[42%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-6 text-white-A700 text-xl"
                  size="txtSFProRegular20"
                >
                  Resources
                </Text>
                <Text
                  className="sm:mt-0 mt-[23px] text-white-A700 text-xl"
                  size="txtSFProSemibold20"
                >
                  Create
                </Text>
                <Text
                  className="sm:mt-0 mt-[23px] text-white-A700 text-xl"
                  size="txtSFProRegular20"
                >
                  NFT GAme
                </Text>
                <div className="flex sm:flex-1 flex-row gap-5 items-center justify-between w-[35%] sm:w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                    color="white_A700_19"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[35px]"
                      src="images/img_materialsymbol_white_a700_1.svg"
                      alt="materialsymbol"
                    />
                  </Button>
                  <div className="flex flex-col items-center justify-start w-[60px]">
                    <Img
                      className="h-[59px] md:h-auto rounded-[50%] w-[60px]"
                      src="images/img_ellipse141.png"
                      alt="ellipse141"
                    />
                  </div>
                  <Img
                    className="h-[59px] w-[60px]"
                    src="images/img_group1000009458_34.svg"
                    alt="group1000009458"
                  />
                </div>
              </div>
              <Img
                className="h-[5px] md:ml-[0] ml-[167px]"
                src="images/img_line75.svg"
                alt="lineSeventyFive"
              />
            </div>
          </div>
          <div className="bg-white-A700_19 flex flex-col items-center justify-start mt-6 p-[15px] rounded-[20px] w-full">
            <div className="flex flex-col items-center justify-start outline-[2px] outline-black-900_01 outline-dashed p-[174px] md:px-10 sm:px-5 rounded-[20px]">
              <Text
                className="leading-[36.00px] md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
                size="txtSFProMedium26"
              >
                <>
                  JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, <br />
                  GLTF, Max, Size: 100 MB
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[26px] items-start justify-start mt-14 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtSFProSemibold32WhiteA700"
            >
              <span className="text-white-A700 font-sfpro text-left font-semibold">
                Name
              </span>
              <span className="text-deep_purple-A200 font-sfpro text-left font-semibold">
                *
              </span>
            </Text>
            <Text
              className="bg-white-A700_19 h-[90px] justify-center max-w-[1530px] md:max-w-full pb-[25px] pl-[30px] pr-[35px] pt-[30px] sm:px-5 rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
              size="txtSFProRegular28"
            >
              Type Your Name.....
            </Text>
          </div>
          <div className="flex flex-col gap-[26px] items-start justify-start mt-14 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtSFProSemibold32WhiteA700"
            >
              External Link
            </Text>
            <a
              href="http://i3-earth.com/"
              className="bg-white-A700_19 h-[90px] justify-center max-w-[1530px] md:max-w-full pb-[25px] pl-[30px] pr-[35px] pt-[30px] sm:px-5 rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
              target="_blank"
              rel="noreferrer"
            >
              <Text size="txtSFProRegular28">http://i3-earth.com/</Text>
            </a>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start mt-[58px] w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtSFProSemibold32WhiteA700"
            >
              Description
            </Text>
            <div className="bg-white-A700_19 flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[15px] w-full">
              <Text
                className="mb-[233px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                size="txtSFProRegular28"
              >
                Provide A Detailed Description Of Your Item.
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[25px] items-start justify-start mt-14 w-full">
            <div className="flex flex-col gap-4 items-start justify-start">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtSFProSemibold32WhiteA700"
              >
                Collection
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtSFProRegular24"
              >
                This Is The Collection where Your Item Will Appear.
              </Text>
            </div>
            <Text
              className="bg-white-A700_19 h-[90px] justify-center max-w-[1530px] md:max-w-full pl-[30px] pr-[35px] sm:px-5 py-[27px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
              size="txtSFProRegular28"
            >
              Select Collection
            </Text>
          </div>
          <div className="flex flex-col gap-3.5 items-start justify-start mt-[58px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtSFProSemibold32WhiteA700"
            >
              Properties
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtSFProRegular24"
            >
              Textual Traits That Show Up As Rectangles.
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start mt-[51px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtSFProSemibold32WhiteA700"
            >
              Levels
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtSFProRegular24"
            >
              Numerical Traits That Show As A Progress Bar.
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start mt-[51px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtSFProSemibold32WhiteA700"
            >
              Stats
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtSFProRegular24"
            >
              Numerical Traits That Show As A Progress Bar.
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start mt-[51px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtSFProSemibold32WhiteA700"
            >
              Unlockable Content
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtSFProRegular24"
            >
              Include Unlockable Content That Can Only Be Revealed By The Owner
              Of The Item.
            </Text>
          </div>
          <div className="flex flex-col gap-3.5 items-start justify-start mt-[53px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtSFProSemibold32WhiteA700"
            >
              Explicit & Sensitive Content
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtSFProRegular24"
            >
              Include Unlockable Content That Can Only Be Revealed By The Owner
              Of The Item.
            </Text>
          </div>
          <div className="flex flex-col gap-[25px] items-start justify-start mt-[53px] w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtSFProSemibold32WhiteA700"
              >
                Supply
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtSFProRegular24"
              >
                This Is The Collection where Your Item Will Appear.
              </Text>
            </div>
            <Text
              className="bg-white-A700_19 h-[90px] justify-center max-w-[1530px] md:max-w-full pl-[30px] pr-[35px] sm:px-5 py-[27px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
              size="txtSFProRegular28"
            >
              01
            </Text>
          </div>
          <div className="flex flex-col gap-[26px] items-start justify-start mt-14 w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtSFProSemibold32WhiteA700"
              >
                Blockchain
              </Text>
            </div>
            <Text
              className="bg-white-A700_19 h-[90px] justify-center max-w-[1530px] md:max-w-full pl-[30px] pr-[35px] sm:px-5 py-[27px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
              size="txtSFProRegular28"
            >
              Ethereum{" "}
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-start justify-start mt-14 w-full">
            <div className="flex flex-col gap-[25px] items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtSFProSemibold32WhiteA700"
                >
                  Freeze Metadata
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtSFProRegular24"
                >
                  This Is The Collection where Your Item Will Appear.
                </Text>
              </div>
              <Text
                className="bg-white-A700_19 h-[90px] justify-center max-w-[1530px] md:max-w-full pl-[30px] pr-[35px] sm:px-5 py-[27px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                size="txtSFProRegular28"
              >
                To Freeze Metadata
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[300px] sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              Create Your Item
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start mt-[119px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start w-[29%] md:w-full">
                    <Img
                      className="h-[85px] md:h-auto object-cover w-1/4"
                      src="images/img_myscpelogo1.png"
                      alt="myscpelogoTwo"
                    />
                    <Text
                      className="leading-[38.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtSFProRegular24"
                    >
                      Lorem ipsum dolor sit amet consectetur. Leo nascetur eu
                      platea integer proin eget nibh arcu. Eget enim
                      pellentesque
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[22px] items-center justify-start md:ml-[0] ml-[120px] w-[11%] md:w-full">
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
                  <div className="flex flex-col gap-6 items-start justify-start ml-60 md:ml-[0] w-[9%] md:w-full">
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
                      <a
                        href="javascript:"
                        className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      >
                        <Text size="txtSFProRegular24">Contact Us</Text>
                      </a>
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
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[220px] w-[15%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProSemibold28"
                    >
                      My Account
                    </Text>
                    <Text
                      className="mt-[22px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
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
                    <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtSFProRegular24"
                      >
                        trams and condition
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-white-A700 h-px mt-9 w-full" />
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
      </div>
    </>
  );
};

export default CreatepagePage;
