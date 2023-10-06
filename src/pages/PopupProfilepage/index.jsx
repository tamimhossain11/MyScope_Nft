import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import Footer from "components/Footer";
import Navbar from "components/Navbar";



const PopupProfilepagePage = () => {
  

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro sm:gap-10 md:gap-10 gap-[120px] items-end justify-start mx-auto py-10 w-full">
        <div className="flex flex-col items-start md:px-5 w-full">
        
          <div className="overflow-x-auto w-full">
          <Navbar/>  
            <div className="h-[1155px] md:h-[1946px] sm:h-[920px] relative w-full">

              
              <div className="absolute h-[1155px] md:h-[1946px] sm:h-[920px] inset-[0] justify-center m-auto overflow-auto w-full">
                <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[60px] items-center justify-start right-[0] w-full">
                  <Text
                    className="leading-[90.00px] md:text-5xl text-[65px] text-center text-white-A700"
                    size="txtSFProHeavy65"
                  >
                    <>
                      Discover Top Collections & Sell <br />
                      Creative NFTs
                    </>
                  </Text>
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
                    <div className="h-[560px] md:h-[858px] relative w-[72%] md:w-full">
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
                              <div className="h-14 md:h-[39px] mb-0.5 mt-2 relative rotate-[-3deg] w-[68%]">
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
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto shadow-bs5 w-[27%]">
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
        </div>
        <div className="flex flex-col items-center mb-[11px] pl-[89px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[116px] items-center justify-start w-4/5 md:w-full">
              <List
                className="flex flex-col gap-[118px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-[45%] md:w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                        size="txtSFProSemibold48"
                      >
                        Top Collations Over
                      </Text>
                      <div className="flex flex-row items-center justify-evenly w-[38%] md:w-full">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-deep_purple-A200"
                          size="txtSFProSemibold48DeeppurpleA200"
                        >
                          last7 days
                        </Text>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_materialsymbol_deep_purple_a200.svg"
                          alt="materialsymbol"
                        />
                      </div>
                    </div>
                    <Line className="bg-gradient2  h-[5px] mt-2.5 w-[29%]" />
                    <div className="flex flex-col items-center justify-start mt-[73px] w-full">
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                          <div className="bg-deep_purple-A200 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66496.png"
                                alt="rectangle66496"
                              />
                              <Text
                                className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                                size="txtSFProRegular10"
                              >
                                16
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[13px] items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProSemibold28"
                              >
                                Top Collectors Over
                              </Text>
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProRegular28"
                              >
                                45, 678, 098 ETH
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66496_120x120.png"
                                alt="rectangle66496_One"
                              />
                              <Text
                                className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                                size="txtSFProRegular10"
                              >
                                16
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[13px] items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProSemibold28"
                              >
                                Top Collectors Over
                              </Text>
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProRegular28"
                              >
                                45, 678, 098 ETH
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[33%] md:w-full">
                          <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                            <Img
                              className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                              src="images/img_rectangle66496_1.png"
                              alt="rectangle66496_Two"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                          <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66496_2.png"
                                alt="rectangle66496_Three"
                              />
                              <Text
                                className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                                size="txtSFProRegular10"
                              >
                                16
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[13px] items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProSemibold28"
                              >
                                Top Collectors Over
                              </Text>
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProRegular28"
                              >
                                45, 678, 098 ETH
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66496_3.png"
                                alt="rectangle66496_Four"
                              />
                              <Text
                                className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                                size="txtSFProRegular10"
                              >
                                16
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[13px] items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProSemibold28"
                              >
                                Top Collectors Over
                              </Text>
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProRegular28"
                              >
                                45, 678, 098 ETH
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[33%] md:w-full">
                          <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                            <Img
                              className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                              src="images/img_rectangle66496_4.png"
                              alt="rectangle66496_Five"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                          <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66496_5.png"
                                alt="rectangle66496_Six"
                              />
                              <Text
                                className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                                size="txtSFProRegular10"
                              >
                                16
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[13px] items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProSemibold28"
                              >
                                Top Collectors Over
                              </Text>
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProRegular28"
                              >
                                45, 678, 098 ETH
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66496_6.png"
                                alt="rectangle66496_Seven"
                              />
                              <Text
                                className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                                size="txtSFProRegular10"
                              >
                                16
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[13px] items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProSemibold28"
                              >
                                Top Collectors Over
                              </Text>
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProRegular28"
                              >
                                45, 678, 098 ETH
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[33%] md:w-full">
                          <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                            <Img
                              className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                              src="images/img_rectangle66496_7.png"
                              alt="rectangle66496_Eight"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-[67%] md:w-full">
                          <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66497.png"
                                alt="rectangle66497"
                              />
                              <Text
                                className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                                size="txtSFProRegular10"
                              >
                                16
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[13px] items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProSemibold28"
                              >
                                Top Collectors Over
                              </Text>
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProRegular28"
                              >
                                45, 678, 098 ETH
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700_19 flex sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[49%] md:w-full">
                            <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                              <Img
                                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                                src="images/img_rectangle66496_8.png"
                                alt="rectangle66496_Nine"
                              />
                              <Text
                                className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                                size="txtSFProRegular10"
                              >
                                16
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[13px] items-start justify-start">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProSemibold28"
                              >
                                Top Collectors Over
                              </Text>
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                size="txtSFProRegular28"
                              >
                                45, 678, 098 ETH
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-start p-2.5 rounded-[15px] w-[33%] md:w-full">
                          <div className="h-[120px] sm:h-[130px] md:h-[140px] sm:mt-0 my-2.5 relative w-[28%] sm:w-full">
                            <Img
                              className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] rounded-[15px] w-[120px]"
                              src="images/img_rectangle66496_9.png"
                              alt="rectangle66496_Ten"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 flex h-max inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[300px] mt-20 sm:text-2xl md:text-[26px] text-[28px] text-center"
                        shape="round"
                        color="deep_purple_A200"
                        size="lg"
                        variant="fill"
                      >
                        Go To Ranking
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-[46%] md:w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                        size="txtSFProSemibold48"
                      >
                        Top Collectors Over
                      </Text>
                      <div className="flex flex-row items-center justify-evenly w-[38%] md:w-full">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-deep_purple-A200"
                          size="txtSFProSemibold48DeeppurpleA200"
                        >
                          last7 days
                        </Text>
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_materialsymbol_deep_purple_a200.svg"
                          alt="materialsymbol"
                        />
                      </div>
                    </div>
                    <Line className="bg-gradient2  h-[5px] mt-2.5 w-[29%]" />
                    <div className="flex flex-col md:gap-10 gap-20 items-center justify-start mt-[73px] w-full">
                      <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                        <div className="bg-deep_purple-A200 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66496.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66498.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66498_120x120.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66496.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66496_9.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66497.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66496_120x120.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66498_1.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66498_2.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66496_4.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66498_3.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700_19 flex flex-1 flex-col gap-[23px] items-center justify-start p-5 rounded-[15px] w-full">
                          <div className="md:h-[120px] h-[126px] relative w-[127px]">
                            <Img
                              className="absolute h-[120px] left-[0] object-cover rounded-[15px] top-[0] w-[120px]"
                              src="images/img_rectangle66496_1.png"
                              alt="rectangle66498"
                            />
                            <Text
                              className="absolute bg-black-900 border border-solid border-white-A700 bottom-[0] flex h-5 items-center justify-center right-[0] rounded-[50%] text-[10px] text-center text-white-A700 w-5"
                              size="txtSFProRegular10"
                            >
                              16
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Top Collectors Over
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtSFProRegular24"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[300px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                        shape="round"
                        color="deep_purple_A200"
                        size="lg"
                        variant="fill"
                      >
                        Go To Ranking
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[19%] md:w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                        size="txtSFProSemibold48"
                      >
                        Live Auctions{" "}
                      </Text>
                      <Line className="bg-gradient2  h-[5px] w-[71%]" />
                    </div>
                    <div className="md:h-[327px] h-[70px] relative w-[53%] md:w-full">
                      <div className="absolute bg-white-A700_19 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto p-[11px] rounded-[15px] w-full">
                        <Img
                          className="h-[45px] md:h-auto md:ml-[0] ml-[18px] object-cover w-[45px]"
                          src="images/img_component77variant8.png"
                          alt="component77vari"
                        />
                        <Img
                          className="h-[45px] md:ml-[0] ml-[83px] w-[45px]"
                          src="images/img_polygon2.svg"
                          alt="polygonTwo"
                        />
                        <div className="bg-white-A700 h-[45px] md:ml-[0] ml-[83px] rounded-[22px] w-[45px]"></div>
                        <div className="bg-white-A700 h-[45px] md:ml-[0] ml-[83px] w-[45px]"></div>
                        <div className="bg-white-A700 h-[45px] md:ml-[0] ml-[266px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[50%] rounded-tr-[50%] w-[45px]"></div>
                      </div>
                      <div className="absolute bg-deep_purple-A200 flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-3 right-[20%] rounded-[5px] w-[13%]">
                        <div className="bg-white-A700 h-[45px] rounded-[5px] w-[45px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-14 w-full">
                    <div className="h-[676px] relative w-full">
                      <Img
                        className="h-[676px] m-auto object-cover rounded-[15px] w-full"
                        src="images/img_rectangle66483_676x490.png"
                        alt="rectangle66483"
                      />
                      <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Hooded neck Raglan
                            </Text>
                            <Text
                              className="mt-1.5 text-lg text-white-A700"
                              size="txtSFProRegular18WhiteA700"
                            >
                              Omar Ekstrom Bothman
                            </Text>
                            <Text
                              className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
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
                        alt="rectangle66483"
                      />
                      <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Hooded neck Raglan
                            </Text>
                            <Text
                              className="mt-1.5 text-lg text-white-A700"
                              size="txtSFProRegular18WhiteA700"
                            >
                              Omar Ekstrom Bothman
                            </Text>
                            <Text
                              className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
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
                        alt="rectangle66483"
                      />
                      <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Hooded neck Raglan
                            </Text>
                            <Text
                              className="mt-1.5 text-lg text-white-A700"
                              size="txtSFProRegular18WhiteA700"
                            >
                              Omar Ekstrom Bothman
                            </Text>
                            <Text
                              className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
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
                        alt="rectangle66483"
                      />
                      <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Hooded neck Raglan
                            </Text>
                            <Text
                              className="mt-1.5 text-lg text-white-A700"
                              size="txtSFProRegular18WhiteA700"
                            >
                              Omar Ekstrom Bothman
                            </Text>
                            <Text
                              className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
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
                        alt="rectangle66483"
                      />
                      <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Hooded neck Raglan
                            </Text>
                            <Text
                              className="mt-1.5 text-lg text-white-A700"
                              size="txtSFProRegular18WhiteA700"
                            >
                              Omar Ekstrom Bothman
                            </Text>
                            <Text
                              className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
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
                        alt="rectangle66483"
                      />
                      <div className="absolute bg-white-A700_19 bottom-[2%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProSemibold28"
                            >
                              Hooded neck Raglan
                            </Text>
                            <Text
                              className="mt-1.5 text-lg text-white-A700"
                              size="txtSFProRegular18WhiteA700"
                            >
                              Omar Ekstrom Bothman
                            </Text>
                            <Text
                              className="mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtSFProRegular28"
                            >
                              45, 678, 098 ETH
                            </Text>
                          </div>
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
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[300px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                    shape="round"
                    color="deep_purple_A200"
                    size="lg"
                    variant="fill"
                  >
                    See More
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
                <div className="flex flex-col md:gap-10 gap-[75px] items-center justify-start w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-[37%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                        size="txtSFProSemibold48"
                      >
                        Create And Sell Your NFT’s
                      </Text>
                    </div>
                    <Line className="bg-gradient2  h-[5px] w-3/5" />
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[113px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-[19px] items-center justify-start w-full">
                      <div className="bg-light_blue-A700_26 flex flex-col h-[100px] items-center justify-start p-2.5 rounded-[50%] w-[100px]">
                        <div className="bg-light_blue-A700 flex flex-col h-[78px] items-center justify-start p-[19px] rounded-[50%] w-[78px]">
                          <Img
                            className="h-10 w-10"
                            src="images/img_materialsymbol.svg"
                            alt="file"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Setup Your Wallet
                        </Text>
                        <Text
                          className="leading-[38.00px] text-center text-white-A700 text-xl w-full"
                          size="txtSFProRegular20"
                        >
                          Lorem ipsum dolor sit amet consectetur. Pulvinar non
                          blandit morbi dignissim tristique. Convallis augue
                          commodo sit tellus eros eget.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[17px] items-center justify-start w-full">
                      <div className="h-[100px] md:h-[98px] relative w-[100px]">
                        <div className="bg-amber-600_26 flex flex-col h-full items-center justify-start m-auto p-2.5 rounded-[50%] w-[100px]">
                          <div className="bg-amber-600 h-[78px] rounded-[50%] w-[78px]"></div>
                        </div>
                        <Img
                          className="absolute h-10 inset-[0] justify-center m-auto w-10"
                          src="images/img_materialsymbol_white_a700.svg"
                          alt="materialsymbol"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Add Your NFTs
                        </Text>
                        <Text
                          className="leading-[38.00px] text-center text-white-A700 text-xl w-full"
                          size="txtSFProRegular20"
                        >
                          Lorem ipsum dolor sit amet consectetur. Pulvinar non
                          blandit morbi dignissim tristique. Convallis augue
                          commodo sit tellus eros eget.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[17px] items-center justify-start w-full">
                      <div className="bg-purple-A700_26 flex flex-col h-[100px] items-center justify-start p-2.5 rounded-[50%] w-[100px]">
                        <div className="bg-purple-A700 flex flex-col h-[78px] items-center justify-start p-[19px] rounded-[50%] w-[78px]">
                          <Img
                            className="h-10 w-10"
                            src="images/img_materialsymbolsviewlist.svg"
                            alt="materialsymbols"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          List Them For Sale
                        </Text>
                        <Text
                          className="leading-[38.00px] text-center text-white-A700 text-xl w-full"
                          size="txtSFProRegular20"
                        >
                          Lorem ipsum dolor sit amet consectetur. Pulvinar non
                          blandit morbi dignissim tristique. Convallis augue
                          commodo sit tellus eros eget.
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[300px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                  shape="round"
                  color="deep_purple_A200"
                  size="lg"
                  variant="fill"
                >
                  Start Now
                </Button>
              </div>
            </div>
            <Footer className="flex items-center justify-center w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupProfilepagePage;
