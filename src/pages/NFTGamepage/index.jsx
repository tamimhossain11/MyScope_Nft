import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  PagerIndicator,
  Radio,
  Slider,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const NFTGamepagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-end mx-auto py-[29px] w-full">
        <div className="flex flex-col md:gap-10 gap-[127px] items-center justify-start mt-2.5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1530px] mx-auto md:px-5 w-full">
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
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[49px] md:mt-0 my-3 w-[21%] md:w-full"
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
                  height={29}
                  width={30}
                  viewBox="0 0 30 29"
                />
              }
              shape="round"
            ></Input>
            <Text
              className="md:ml-[0] ml-[100px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Home
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Pages
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Explore
            </Text>
            <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[45px] w-[42%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-6 text-white-A700 text-xl"
                  size="txtSFProRegular20"
                >
                  Resources
                </Text>
                <Text
                  className="sm:mt-0 mt-[23px] text-white-A700 text-xl"
                  size="txtSFProRegular20"
                >
                  Create
                </Text>
                <Text
                  className="sm:mt-0 mt-[23px] text-white-A700 text-xl"
                  size="txtSFProSemibold20"
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
                    src="images/img_group1000009458_35.svg"
                    alt="group1000009458"
                  />
                </div>
              </div>
              <Img
                className="h-[5px] md:ml-[0] ml-[291px]"
                src="images/img_line75.svg"
                alt="lineSeventyFive"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start md:px-5 w-[17%] md:w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                    size="txtSFProRegular38"
                  >
                    Home
                  </Text>
                  <Radio
                    value="NFTGame"
                    className="font-semibold md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                    inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                    checked={false}
                    name="nftgameOne"
                    label="NFT Game"
                    id="NFTGame"
                  ></Radio>
                </div>
                <Line className="bg-gradient2  h-[5px] w-[64%]" />
              </div>
              <div className="flex flex-col gap-10 items-center justify-start mt-[95px] md:px-5 w-[55%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Text
                    className="leading-[60.00px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                    size="txtSFProSemibold48"
                  >
                    <>
                      Welcome To The MyScope
                      <br />
                      Universe Of Play!
                    </>
                  </Text>
                  <Text
                    className="leading-[35.00px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    Multidisciplinary visual artist James Jean presents
                    Fragments (2022), a new series of hand-drawn digital
                    artworks commissioned by the digital art platform Outland.
                    The new.
                  </Text>
                </div>
                <Input
                  name="group1000009789"
                  placeholder="Enter Account"
                  className="font-bold md:text-[26px] p-0 placeholder:text-white-A700 sm:text-2xl text-[28px] text-center w-full"
                  wrapClassName="rounded-[10px] w-[29%]"
                  color="deep_purple_A200"
                  size="sm"
                ></Input>
              </div>
              <div className="h-[700px] md:h-[760px] max-w-[1530px] mt-[60px] mx-auto md:px-5 relative w-full">
                <Img
                  className="h-[700px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66423_700x1530.png"
                  alt="rectangle66423"
                />
                <div className="absolute bg-deep_purple-A200_cc flex flex-col h-full inset-[0] items-center justify-center m-auto p-[265px] md:px-10 sm:px-5 rounded-[15px] w-full">
                  <div className="bg-white-A700_19 flex flex-col h-[170px] items-center justify-start p-[25px] sm:px-5 rounded-[50%] w-[170px]">
                    <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-5 rounded-[50%] w-[120px]">
                      <Img
                        className="h-20 w-20"
                        src="images/img_materialsymbol_black_900_01.svg"
                        alt="materialsymbol_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[120px] overflow-x-auto w-full">
                <div className="flex flex-col gap-[54px] items-center justify-start overflow-auto w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                    size="txtSFProSemibold48"
                  >
                    <>
                      Collect Them All, Be The True
                      <br />
                      Ownership FOr Players
                    </>
                  </Text>
                  <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[2097px] mx-auto md:px-5 w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col relative shadow-bs1 w-[13%] md:w-full">
                        <Img
                          className="h-[344px] mx-auto object-cover w-full"
                          src="images/img_vector13.png"
                          alt="vectorThirteen"
                        />
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[114px] items-start justify-start mt-[-8.99px] mx-auto p-2.5 w-full z-[1]"
                          style={{
                            backgroundImage: "url('images/img_group2924.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[11px] items-start justify-start mb-[11px] mt-[15px] w-[94%] md:w-full">
                            <Img
                              className="h-[60px] md:h-auto mt-[5px] rotate-[-1deg] rounded-[50%] w-[60px]"
                              src="images/img_ellipse179.png"
                              alt="ellipse179"
                            />
                            <div className="flex flex-col items-start justify-start rotate-[4deg]">
                              <Text
                                className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                                size="txtSFProBold24"
                              >
                                Justin Stanton
                              </Text>
                              <Text
                                className="lowercase ml-0.5 md:ml-[0] mt-0.5 text-base text-deep_purple-A200"
                                size="txtSFProRegular16"
                              >
                                @EmersonLubin
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[559px] sm:h-[560px] md:h-[858px] relative w-[72%] md:w-full">
                        <div className="absolute h-[538px] md:h-[858px] inset-[0] justify-center m-auto w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 h-full items-center justify-between m-auto w-full">
                            <div className="md:h-[419px] h-[538px] relative w-2/5 md:w-full">
                              <div className="absolute md:h-[399px] h-[502px] inset-y-[0] left-[0] my-auto shadow-bs2 w-[46%]">
                                <Img
                                  className="absolute h-[399px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                                  src="images/img_vector16.png"
                                  alt="vectorSixteen"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[119px] inset-x-[0] items-center justify-end mx-auto p-4 w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group2925.svg')",
                                  }}
                                >
                                  <div className="flex flex-row gap-2.5 items-start justify-start mb-[7px] mt-3 w-[98%] md:w-full">
                                    <Img
                                      className="h-[60px] md:h-auto mt-1.5 rotate-[-1deg] rounded-[50%] w-[60px]"
                                      src="images/img_ellipse179_60x60.png"
                                      alt="ellipse179_One"
                                    />
                                    <div className="flex flex-col items-start justify-start mb-[7px] rotate-[4deg]">
                                      <Text
                                        className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                                        size="txtSFProBold24"
                                      >
                                        Justin Stanton
                                      </Text>
                                      <Text
                                        className="lowercase ml-0.5 md:ml-[0] mt-0.5 text-base text-deep_purple-A200"
                                        size="txtSFProRegular16"
                                      >
                                        @EmersonLubin
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex flex-col inset-y-[0] my-auto right-[0] shadow-bs3 w-[56%]">
                                <Img
                                  className="h-[419px] mx-auto object-cover w-full"
                                  src="images/img_vector13.png"
                                  alt="vectorThirteen_One"
                                />
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-[129px] items-start justify-start mt-[-10.97px] mx-auto p-5 w-full z-[1]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group2924.svg')",
                                  }}
                                >
                                  <div className="flex flex-row gap-[9px] items-end justify-start mb-3.5 mt-[3px] w-[81%] md:w-full">
                                    <Img
                                      className="h-[60px] md:h-auto mt-2.5 rotate-[-1deg] rounded-[50%] w-[60px]"
                                      src="images/img_ellipse179_1.png"
                                      alt="ellipse179_Two"
                                    />
                                    <div className="flex flex-col items-start justify-start mb-1 rotate-[4deg]">
                                      <Text
                                        className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                                        size="txtSFProBold24"
                                      >
                                        Justin Stanton
                                      </Text>
                                      <Text
                                        className="lowercase ml-0.5 md:ml-[0] text-base text-deep_purple-A200"
                                        size="txtSFProRegular16"
                                      >
                                        @EmersonLubin
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="md:h-[399px] h-[502px] relative shadow-bs2 w-[19%] md:w-full">
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[119px] inset-x-[0] items-center justify-start mx-auto p-[11px] rotate-[180deg] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group1000009949.svg')",
                                }}
                              >
                                <div className="flex flex-row gap-1.5 items-end justify-start mb-[17px] mt-2 rotate-[172deg] w-[96%] md:w-full">
                                  <Img
                                    className="h-[68px] md:h-auto mb-0.5 rotate-[-1deg] rounded-[50%] w-[68px]"
                                    src="images/img_ellipse179_68x68.png"
                                    alt="ellipse179_Three"
                                  />
                                  <div className="md:h-[47px] h-[63px] mt-[7px] relative rotate-[4deg] w-[69%]">
                                    <Text
                                      className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[0] w-max"
                                      size="txtSFProBold24"
                                    >
                                      Justin Stanton
                                    </Text>
                                    <Text
                                      className="absolute bottom-[0] left-[0] lowercase text-base text-deep_purple-A200"
                                      size="txtSFProRegular16"
                                    >
                                      @EmersonLubin
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="absolute h-[399px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                                src="images/img_vector16_399x271.png"
                                alt="vectorSixteen_One"
                              />
                            </div>
                          </div>
                          <div className="absolute flex flex-col inset-y-[0] my-auto right-[17%] shadow-bs4 w-[22%]">
                            <Img
                              className="h-[419px] mx-auto object-cover w-full"
                              src="images/img_vector13_419x330.png"
                              alt="vectorThirteen_Two"
                            />
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[129px] items-start justify-start mt-[-11.81px] mx-auto p-5 w-full z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group1000009947.svg')",
                              }}
                            >
                              <div className="flex flex-row gap-2.5 items-end justify-start mb-[15px] mt-1.5 w-[84%] md:w-full">
                                <Img
                                  className="h-[67px] md:h-auto rotate-[-8deg] rounded-[50%] w-[67px]"
                                  src="images/img_ellipse179_67x67.png"
                                  alt="ellipse179_Four"
                                />
                                <div className="md:h-[39px] h-[57px] mb-0.5 mt-2 relative rotate-[-3deg] w-[68%]">
                                  <Text
                                    className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[0] w-max"
                                    size="txtSFProBold24"
                                  >
                                    Justin Stanton
                                  </Text>
                                  <Text
                                    className="absolute bottom-[0] left-[0] lowercase text-base text-deep_purple-A200"
                                    size="txtSFProRegular16"
                                  >
                                    @EmersonLubin
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs5 w-[27%]">
                          <Img
                            className="h-[440px] md:h-auto object-cover w-full"
                            src="images/img_rectangle66553.png"
                            alt="rectangle66553"
                          />
                          <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-bl-[15px] rounded-br-[15px] w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-[73%] md:w-full">
                              <Img
                                className="h-20 md:h-auto rounded-[50%] w-20"
                                src="images/img_ellipse196.png"
                                alt="ellipse196"
                              />
                              <div className="flex flex-col gap-[5px] items-start justify-start">
                                <Text
                                  className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                                  size="txtSFProBold24"
                                >
                                  Emerson Lubin
                                </Text>
                                <Text
                                  className="lowercase text-base text-deep_purple-A200"
                                  size="txtSFProRegular16"
                                >
                                  @EmersonLubin
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col relative shadow-bs6 w-[13%] md:w-full">
                        <Img
                          className="h-[344px] mx-auto object-cover w-full"
                          src="images/img_vector13_344x270.png"
                          alt="vectorThirteen_Three"
                        />
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[114px] items-center justify-start mt-[-9.63px] mx-auto p-[13px] rotate-[180deg] w-full z-[1]"
                          style={{
                            backgroundImage:
                              "url('images/img_group1000009951.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[7px] items-end justify-start mb-[13px] mt-1 rotate-[173deg] w-[99%] md:w-full">
                            <Img
                              className="h-[67px] md:h-auto mb-0.5 rotate-[-1deg] rounded-[50%] w-[67px]"
                              src="images/img_ellipse179_2.png"
                              alt="ellipse179_Five"
                            />
                            <div className="md:h-[41px] h-[57px] mt-3 relative rotate-[4deg] w-[69%]">
                              <Text
                                className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900_01 sm:text-xl top-[0] w-max"
                                size="txtSFProBold24"
                              >
                                Justin Stanton
                              </Text>
                              <Text
                                className="absolute bottom-[0] left-[0] lowercase text-base text-deep_purple-A200"
                                size="txtSFProRegular16"
                              >
                                @EmersonLubin
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-10 items-center justify-center w-[16%] md:w-full">
                      <Img
                        className="h-[60px] w-[60px]"
                        src="images/img_group1000008676.svg"
                        alt="group1000008676"
                      />
                      <PagerIndicator
                        className="flex h-3.5 w-[127px]"
                        count={4}
                        activeCss="inline-block cursor-pointer h-3.5 bg-deep_purple-A200 w-10 rounded-[7px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-white-A700 w-3.5"
                        selectedWrapperCss="inline-block mx-[7.50px]"
                        unselectedWrapperCss="inline-block mx-[7.50px]"
                      />
                      <Img
                        className="h-[60px] w-[60px]"
                        src="images/img_group1000008677.svg"
                        alt="group1000008677"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[47px] items-center justify-start max-w-[1240px] mt-[125px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                    size="txtSFProSemibold48"
                  >
                    Play Your Favorite Characters. Win Big Prizes.
                  </Text>
                  <Text
                    className="leading-[35.00px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    Multidisciplinary visual artist James Jean presents
                    Fragments (2022), a new series of hand-drawn digital
                    artworks commissioned by the digital art platform Outland.
                    The new.
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                    size="txtSFProBold50"
                  >
                    2023
                  </Text>
                  <Text
                    className="text-[22px] text-gray-400_05 sm:text-lg md:text-xl"
                    size="txtSFProMedium22Gray40005"
                  >
                    total volume (USD)
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-center justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                    size="txtSFProBold50"
                  >
                    $179M
                  </Text>
                  <Text
                    className="text-[22px] text-center text-gray-400_05 sm:text-lg md:text-xl"
                    size="txtSFProMedium22Gray40005"
                  >
                    floor price (USD)
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-center justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                    size="txtSFProBold50"
                  >
                    450K
                  </Text>
                  <Text
                    className="text-[22px] text-center text-gray-400_05 sm:text-lg md:text-xl"
                    size="txtSFProMedium22Gray40005"
                  >
                    best offer (USD)
                  </Text>
                </div>
                <div className="flex flex-col justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                    size="txtSFProBold50"
                  >
                    9.4M
                  </Text>
                  <Text
                    className="ml-6 md:ml-[0] mt-1 text-[22px] text-gray-400_05 sm:text-lg md:text-xl"
                    size="txtSFProMedium22Gray40005"
                  >
                    llsted
                  </Text>
                </div>
              </div>
            </div>
            <div className="mt-[115px] overflow-x-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[124px] justify-start overflow-auto w-full">
                <div className="bg-white-A700_19 flex flex-col items-center justify-start p-[120px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1430px] mx-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[727px] md:h-auto object-cover"
                        src="images/img_image72.png"
                        alt="imageSeventyTwo"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="leading-[60.00px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-[91%] sm:w-full"
                          size="txtSFProSemibold48"
                        >
                          Play Your Favorite Characters. Win Big Prizes.
                        </Text>
                        <Text
                          className="leading-[35.00px] mt-[30px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                          size="txtSFProRegular22WhiteA700"
                        >
                          Multidisciplinary visual artist James Jean presents
                          Fragments (2022), a new series of hand-drawn digital
                          artworks commissioned by the.
                        </Text>
                        <Text
                          className="leading-[35.00px] mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                          size="txtSFProRegular22WhiteA700"
                        >
                          Multidisciplinary visual artist James Jean presents
                          Fragments (2022), a new series of hand-drawn digital
                          artworks commissioned by the digital art platform
                          Outland. The new.
                        </Text>
                        <Button
                          className="cursor-pointer font-bold min-w-[200px] mt-[50px] text-center text-xl"
                          shape="round"
                          color="deep_purple_A200"
                          size="md"
                          variant="fill"
                        >
                          Come Discover
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="leading-[60.00px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-[91%] sm:w-full"
                          size="txtSFProSemibold48"
                        >
                          Play Your Favorite Characters. Win Big Prizes.
                        </Text>
                        <Text
                          className="leading-[35.00px] mt-[30px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                          size="txtSFProRegular22WhiteA700"
                        >
                          Multidisciplinary visual artist James Jean presents
                          Fragments (2022), a new series of hand-drawn digital
                          artworks commissioned by the.
                        </Text>
                        <Text
                          className="leading-[35.00px] mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                          size="txtSFProRegular22WhiteA700"
                        >
                          Multidisciplinary visual artist James Jean presents
                          Fragments (2022), a new series of hand-drawn digital
                          artworks commissioned by the digital art platform
                          Outland. The new.
                        </Text>
                        <Button
                          className="cursor-pointer font-bold min-w-[200px] mt-[50px] text-center text-xl"
                          shape="round"
                          color="deep_purple_A200"
                          size="md"
                          variant="fill"
                        >
                          Come Discover
                        </Button>
                      </div>
                      <Img
                        className="h-[727px] md:h-auto object-cover"
                        src="images/img_image72.png"
                        alt="imageSeventyTwo_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start md:ml-[0] ml-[195px] md:px-5 w-full">
                  <div className="flex flex-col items-center justify-start w-[39%] md:w-full">
                    <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                        size="txtSFProSemibold48"
                      >
                        Fabulous Things To Enjoy
                      </Text>
                      <Text
                        className="leading-[35.00px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
                        size="txtSFProRegular22WhiteA700"
                      >
                        Multidisciplinary visual artist James Jean presents
                        Fragments (2022), a new series of hand-drawn digital
                        artworks commissioned by th
                      </Text>
                    </div>
                  </div>
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    paddingRight={135}
                    activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 2 },
                      1050: { items: 4 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="flex gap-[30px] w-full"
                    items={[...Array(16)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="bg-deep_purple-A200 flex flex-col gap-[29px] items-start justify-center mx-2.5 p-[30px] sm:px-5 rounded-[15px]">
                          <Img
                            className="h-20 md:h-auto mt-2.5 object-cover w-20"
                            src="images/img_maskgroup_80x80.png"
                            alt="maskgroup"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start mb-2.5">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProBold28"
                            >
                              Generate financial Investment
                            </Text>
                            <Text
                              className="leading-[26.00px] text-lg text-white-A700 w-full"
                              size="txtSFProRegular18WhiteA700"
                            >
                              With millions in transactions since 2017, we’ll
                              help you generate revenue on our platform ⁠— from
                              direct sales to secondary sales.
                            </Text>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    renderDotsItem={({ isActive }) => {
                      if (isActive) {
                        return (
                          <div className="inline-block cursor-pointer h-3.5 bg-deep_purple-A200 w-10 rounded-[7px]" />
                        );
                      }
                      return (
                        <div
                          className="inline-block cursor-pointer rounded-[50%] h-3.5 bg-white-A700 w-3.5"
                          role="button"
                          tabIndex={0}
                        />
                      );
                    }}
                  />
                  <div className="flex flex-row gap-10 items-center justify-start w-[16%] md:w-full">
                    <Img
                      className="h-[60px] w-[60px]"
                      src="images/img_group1000008676.svg"
                      alt="group1000008676_One"
                    />
                    <PagerIndicator
                      className="flex h-3.5 w-[127px]"
                      count={4}
                      activeCss="inline-block cursor-pointer h-3.5 bg-deep_purple-A200 w-10 rounded-[7px]"
                      activeIndex={sliderState}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-white-A700 w-3.5"
                      sliderRef={sliderRef}
                      selectedWrapperCss="inline-block mx-[7.50px]"
                      unselectedWrapperCss="inline-block mx-[7.50px]"
                    />
                    <Img
                      className="h-[60px] w-[60px]"
                      src="images/img_group1000008677.svg"
                      alt="group1000008677_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1530px] mt-[119px] mx-auto md:px-5 w-full">
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
      </div>
    </>
  );
};

export default NFTGamepagePage;
