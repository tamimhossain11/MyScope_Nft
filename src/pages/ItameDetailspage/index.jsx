import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ItameDetailspagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1530px] mb-[69px] mx-auto md:px-5 w-full">
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
            <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:ml-[0] ml-[65px] md:mt-0 mt-[13px] w-[15%] md:w-full">
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
                src="images/img_group1000009458_3.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="h-[1032px] md:h-[2222px] sm:h-[926px] mt-1.5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-[22%] md:w-full">
                  <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                    <Text
                      className="mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                      size="txtSFProRegular38"
                    >
                      Page
                    </Text>
                    <Radio
                      value="ItemDetails"
                      className="font-semibold mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                      inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                      checked={false}
                      name="itemdetails"
                      label="Item Details"
                      id="ItemDetails"
                    ></Radio>
                  </div>
                  <Line className="bg-gradient2  h-[5px] w-[63%]" />
                </div>
                <div className="flex flex-col font-rubik items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 flex-col gap-10 items-center justify-start md:mt-0 mt-1 w-[34%] md:w-full">
                      <Img
                        className="h-[650px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                        src="images/img_rectangle66496_9.png"
                        alt="rectangle66504"
                      />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                          size="txtRubikRomanMedium30"
                        >
                          Share
                        </Text>
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="round"
                          color="indigo_500_01"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_ggfacebook.svg"
                            alt="ggfacebook"
                          />
                        </Button>
                        <div className="bg-light_blue-500_01 flex flex-col h-[60px] items-center justify-start p-[15px] rounded-[10px] w-[60px]">
                          <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                            <Img
                              className="h-[30px] w-[30px]"
                              src="images/img_mditwitter_white_a700.svg"
                              alt="mditwitter"
                            />
                          </div>
                        </div>
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="round"
                          color="green_400"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_icbaselinewhatsapp.svg"
                            alt="icbaselinewhats"
                          />
                        </Button>
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="round"
                          color="pink_600"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_phinstagramlogo.svg"
                            alt="phinstagramlogo"
                          />
                        </Button>
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="round"
                          color="deep_purple_A200"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-[30px]"
                            src="images/img_solarlinkoutline.svg"
                            alt="solarlinkoutlin"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start ml-5 md:ml-[0] md:mt-0 mt-1 w-[15%] md:w-full">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[91%] md:w-full">
                        <Img
                          className="h-[137px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                          src="images/img_rectangle66496_120x120.png"
                          alt="rectangle66505"
                        />
                        <Img
                          className="h-[137px] md:h-auto object-cover rounded-tl-[15px] rounded-tr-[15px] w-full"
                          src="images/img_rectangle66498_2.png"
                          alt="rectangle66506"
                        />
                      </div>
                      <div className="border-2 border-deep_purple-A200 border-solid flex flex-col items-center justify-start p-[9px] rounded-[15px] w-full">
                        <Img
                          className="h-[137px] md:h-auto object-cover rounded-[15px] w-full"
                          src="images/img_rectangle66496_9.png"
                          alt="rectangle66507"
                        />
                      </div>
                      <Img
                        className="h-[137px] md:h-auto object-cover rounded-[15px] w-[91%]"
                        src="images/img_rectangle66498.png"
                        alt="rectangle66508"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col font-sfpro items-start justify-start md:ml-[0] ml-[50px] w-[48%] md:w-full">
                      <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[67%] md:w-full">
                        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                            size="txtSFProSemibold48"
                          >
                            TSAREVNA
                          </Text>
                          <div className="flex sm:flex-col flex-row font-rubik sm:gap-10 items-center justify-between w-full">
                            <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-between w-[36%] sm:w-full">
                              <Text
                                className="text-lg text-yellow-A400"
                                size="txtRubikRomanMedium18"
                              >
                                (4,5)
                              </Text>
                              <Img
                                className="h-5 w-[120px]"
                                src="images/img_frame259.svg"
                                alt="frame259"
                              />
                            </div>
                            <div className="flex sm:flex-1 flex-row gap-[39px] items-center justify-between w-[57%] sm:w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start w-[38%]">
                                <Img
                                  className="h-2.5"
                                  src="images/img_checkmark_white_a700.svg"
                                  alt="checkmark"
                                />
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtRubikRomanMedium18WhiteA700"
                                >
                                  <span className="text-white-A700 font-sfpro text-left font-medium">
                                    400{" "}
                                  </span>
                                  <span className="text-white-A700 font-sfpro text-left font-normal">
                                    Sold
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2.5 items-start justify-start w-[49%]">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_icoutlineremoveredeye_white_a700.svg"
                                  alt="icoutlineremove"
                                />
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtRubikRomanMedium18WhiteA700"
                                >
                                  <span className="text-white-A700 font-sfpro text-left font-medium">
                                    1.5k{" "}
                                  </span>
                                  <span className="text-white-A700 font-sfpro text-left font-normal">
                                    Viewed
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start ml-0.5 md:ml-[0] mt-[27px] w-full">
                        <Text
                          className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                          size="txtSFProRegular22WhiteA700"
                        >
                          Lorem ipsum dolor sit amet consectetur. Urna dignissim
                          ipsum tortor scelerisque. Odio gravida ac tortor.
                        </Text>
                        <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtRubikRomanRegular22"
                          >
                            <>&gt; Lorem ipsum dolor sit.</>
                          </Text>
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtSFProRegular22WhiteA700"
                          >
                            <>&gt; Amet consectetur.</>
                          </Text>
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtSFProRegular22WhiteA700"
                          >
                            <>&gt; Urna dignissim ipsum tortor scelerisque.</>
                          </Text>
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                            size="txtSFProRegular22WhiteA700"
                          >
                            <>&gt; Odio gravida ac tortor.</>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] mt-8 w-[42%] md:w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProSemibold40"
                        >
                          $40,56
                        </Text>
                        <Text
                          className="line-through ml-[26px] text-white-A700 text-xl"
                          size="txtSFProRegular20"
                        >
                          $80,87
                        </Text>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[25px] items-end justify-end ml-5 p-[3px] rounded-[5px]"
                          style={{
                            backgroundImage: "url('images/img_group300.svg')",
                          }}
                        >
                          <Text
                            className="mr-[3px] text-sm text-white-A700"
                            size="txtSFProMedium14"
                          >
                            20%
                          </Text>
                        </div>
                      </div>
                      <div className="h-[60px] md:h-[94px] ml-0.5 md:ml-[0] mt-[34px] relative w-[28%]">
                        <Text
                          className="m-auto text-white-A700 text-xl"
                          size="txtSFProMedium20WhiteA700"
                        >
                          1
                        </Text>
                        <div className="absolute border border-solid border-white-A700 flex flex-row h-full inset-[0] items-center justify-between m-auto p-[15px] rounded-[15px] w-full">
                          <Button
                            className="flex h-[30px] items-center justify-center ml-[5px] rounded-[5px] w-[30px]"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img src="images/img_group304.svg" alt="group304" />
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center mr-[5px] rounded-[5px] w-[30px]"
                            color="deep_purple_A200"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[15px]"
                              src="images/img_plus.svg"
                              alt="plus"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start mt-[50px] w-[71%] md:w-full">
                        <Button
                          className="cursor-pointer font-bold min-w-[240px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                          color="deep_purple_A200"
                          size="md"
                          variant="fill"
                        >
                          Buy Now
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[240px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          Add To Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-center justify-start right-[29%] top-[0] w-[29%]">
              <div className="bg-black-900 flex flex-col p-4 relative rounded-[10px] shadow-bs7 w-full">
                <div className="flex flex-row items-center justify-between mt-3.5 w-[74%]">
                  <div className="bg-deep_purple-A200 h-10 rounded-[5px] w-[48%]"></div>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Case Studies
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-[22px] ml-auto mr-[21px] mt-[-NaNpx] z-[1]">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    <span className="text-white-A700 font-sfpro text-left font-medium">
                      Single
                    </span>
                    <span className="text-white-A700 font-sfpro text-left font-bold">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-sfpro text-left font-medium">
                      Case Studies
                    </span>
                  </Text>
                  <Text
                    className="mt-5 text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Explore Collections
                  </Text>
                  <Text
                    className="mt-[19px] text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    User
                  </Text>
                  <Text
                    className="mt-5 text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    About
                  </Text>
                  <Text
                    className="mt-[21px] text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Add To Cart
                  </Text>
                  <Text
                    className="capitalize mt-[22px] text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    My Saved Lists
                  </Text>
                  <Text
                    className="mt-[19px] text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Wallet
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-auto ml-3.5 mt-[-32.46px] z-[1]">
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtSFProSemibold20"
                  >
                    Item Details
                  </Text>
                  <Text
                    className="mt-[21px] text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Collection
                  </Text>
                  <Text
                    className="mt-[22px] text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Rankings
                  </Text>
                  <Text
                    className="mt-[19px] text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Edit Profile
                  </Text>
                  <Text
                    className="mt-[21px] text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Contact
                  </Text>
                  <a
                    href="javascript:"
                    className="mt-[22px] text-white-A700 text-xl"
                  >
                    <Text size="txtSFProMedium20WhiteA700">Login</Text>
                  </a>
                  <a
                    href="javascript:"
                    className="mt-[19px] text-white-A700 text-xl"
                  >
                    <Text size="txtSFProMedium20WhiteA700">Careers</Text>
                  </a>
                  <a
                    href="javascript:"
                    className="mt-[21px] text-white-A700 text-xl"
                  >
                    <Text size="txtSFProDisplayMedium20">Terms of service</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[120px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="bg-deep_purple-A200 flex md:flex-1 flex-col gap-[34px] items-center justify-center p-11 md:px-10 sm:px-5 rounded-[15px] w-[27%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-[5px] w-[65%] md:w-full">
                  <Text
                    className="md:text-5xl text-[100px] text-center text-white-A700"
                    size="txtRubikRomanMedium100"
                  >
                    4.5
                  </Text>
                  <Img
                    className="h-9 w-[200px]"
                    src="images/img_frame259.svg"
                    alt="frame259_One"
                  />
                  <Text
                    className="mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProMedium24"
                  >
                    280 Reviews
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-7 items-center mb-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-3.5 w-[90px]"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrowdown"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtSFProMedium14"
                      >
                        180
                      </Text>
                    </div>
                    <div className="h-2.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-white_A700_4c rounded-[5px]"></div>
                      <div
                        className="h-full absolute bg-white_A700  rounded-[5px]"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-3.5 w-[90px]"
                        src="images/img_close_white_a700.svg"
                        alt="close"
                      />
                      <Text
                        className="text-right text-sm text-white-A700"
                        size="txtSFProMedium14"
                      >
                        20
                      </Text>
                    </div>
                    <div className="h-2.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-white_A700_4c rounded-[5px]"></div>
                      <div
                        className="h-full absolute bg-white_A700  rounded-[5px]"
                        style={{ width: "18%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-3.5 w-[90px]"
                        src="images/img_car.svg"
                        alt="car"
                      />
                      <Text
                        className="text-right text-sm text-white-A700"
                        size="txtSFProMedium14"
                      >
                        40
                      </Text>
                    </div>
                    <div className="h-2.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-white_A700_4c rounded-[5px]"></div>
                      <div
                        className="h-full absolute bg-white_A700  rounded-[5px]"
                        style={{ width: "38%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-3.5 w-[90px]"
                        src="images/img_ticket.svg"
                        alt="ticket"
                      />
                      <Text
                        className="text-right text-sm text-white-A700"
                        size="txtSFProMedium14"
                      >
                        18
                      </Text>
                    </div>
                    <div className="h-2.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-white_A700_4c rounded-[5px]"></div>
                      <div
                        className="h-full absolute bg-white_A700  rounded-[5px]"
                        style={{ width: "9%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-3.5 w-[90px]"
                        src="images/img_frame259_white_a700.svg"
                        alt="frame259"
                      />
                      <Text
                        className="text-right text-sm text-white-A700"
                        size="txtSFProMedium14"
                      >
                        22
                      </Text>
                    </div>
                    <div className="h-2.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-white_A700_4c rounded-[5px]"></div>
                      <div
                        className="h-full absolute bg-white_A700  rounded-[5px]"
                        style={{ width: "16%" }}
                      ></div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 flex-col gap-9 items-center justify-start w-[70%] md:w-full">
                <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between md:pr-10 sm:pr-5 pr-[94px] rounded-[15px] w-full">
                  <Button
                    className="cursor-pointer font-bold min-w-[290px] rounded-[15px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                    color="deep_purple_A200"
                    size="lg"
                    variant="fill"
                  >
                    Description
                  </Button>
                  <div className="flex md:flex-1 flex-row sm:gap-10 items-center justify-between w-[55%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtSFProMedium28"
                    >
                      Specification
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtSFProMedium28"
                    >
                      Reviews (280)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-rubik gap-[29px] items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtRubikRomanSemiBold28"
                    >
                      See The Ditties of Tsarevna NFT
                    </Text>
                    <Text
                      className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                      size="txtRubikRomanRegular22"
                    >
                      Lorem ipsum dolor sit amet consectetur. Senectus maecenas
                      nunc gravida est feugiat cras. Faucibus sed eu ac mattis
                      mattis. Faucibus eu at placerat hendrerit nisl quisque
                      morbi duis.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtRubikRomanSemiBold28"
                    >
                      How is The Tsarevna NFT Buy?{" "}
                    </Text>
                    <Text
                      className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                      size="txtRubikRomanRegular22"
                    >
                      Lorem ipsum dolor sit amet consectetur. Senectus maecenas
                      nunc gravida est feugiat cras. Faucibus sed eu ac mattis
                      mattis. Faucibus eu at placerat hendrerit nisl quisque
                      morbi duis.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtRubikRomanSemiBold28"
                    >
                      How is The Tsarevna NFT Buy?{" "}
                    </Text>
                    <Text
                      className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                      size="txtRubikRomanRegular22"
                    >
                      Lorem ipsum dolor sit amet consectetur. Senectus maecenas
                      nunc gravida est feugiat cras. Faucibus sed eu ac mattis
                      mattis. Faucibus eu at placerat hendrerit nisl quisque
                      morbi duis.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[120px] rounded-[15px] w-full">
            <div className="flex flex-col relative w-full">
              <div className="bg-gray-100 flex flex-col items-center justify-end mx-auto p-[18px] rounded-tl-[15px] rounded-tr-[15px] w-full">
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-start w-auto md:w-full">
                    <div className="flex flex-row items-center justify-evenly w-[12%] md:w-full">
                      <Img
                        className="h-[26px] w-[26px]"
                        src="images/img_ticket_black_900.svg"
                        alt="ticket"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtSFProSemibold24"
                      >
                        Offers
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-center w-[16%] md:w-full">
                      <Img
                        className="h-[26px] w-[26px]"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="ml-[5px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                        size="txtSFProRegular24Gray50001"
                      >
                        Properties
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-center w-[12%] md:w-full">
                      <Img
                        className="h-[26px] w-[26px]"
                        src="images/img_settings.svg"
                        alt="settings_One"
                      />
                      <Text
                        className="ml-[5px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                        size="txtSFProRegular24Gray50001"
                      >
                        Details
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-center w-[15%] md:w-full">
                      <Img
                        className="h-[26px] w-[26px]"
                        src="images/img_settings.svg"
                        alt="settings_Two"
                      />
                      <Text
                        className="ml-[5px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                        size="txtSFProRegular24Gray50001"
                      >
                        Activates
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-evenly w-[19%] md:w-full">
                      <Img
                        className="h-[26px] w-[26px]"
                        src="images/img_settings.svg"
                        alt="settings_Three"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                        size="txtSFProRegular24Gray50001"
                      >
                        Price History
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col mt-3.5 relative w-full">
                    <Line className="bg-gray-400_04 h-px mx-auto w-full" />
                    <Line className="bg-deep_purple-A200 h-0.5 mb-auto mt-[-1px] w-[7%] z-[1]" />
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[27px] w-[89%] md:w-full">
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      Bid Price
                    </Text>
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      USD Price
                    </Text>
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      Floor Difference
                    </Text>
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      Expirations
                    </Text>
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      From
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray-400_04 flex flex-col items-center justify-start mb-auto ml-auto mt-[-140px] rounded-br-[15px] rounded-tr-[15px] w-[2%] z-[1]">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-tr-[15px] w-full">
                  <Img
                    className="h-3 mt-1 w-3"
                    src="images/img_maskgroup_black_900_01.svg"
                    alt="maskgroup"
                  />
                </div>
                <div className="bg-white-A700 h-[60px] mt-[5px] rounded-[5px] w-1/2"></div>
                <div className="bg-deep_purple-A200 flex flex-col items-center justify-start mt-[485px] p-1 rounded-tr-[15px] w-full">
                  <Img
                    className="h-3 mb-1 w-3"
                    src="images/img_maskgroup_white_a700.svg"
                    alt="maskgroup_One"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[39px] mt-[-NaNpx] mx-auto w-[95%] z-[1]">
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                      <Img
                        className="h-5 md:mt-0 mt-0.5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="md:ml-[0] ml-[5px] text-green-A700_01 text-xl"
                        size="txtSFProMedium20GreenA70001"
                      >
                        30 ETH
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        $1,932.55
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[200px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        70% Below
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[246px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        In 5 Month
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[204px] text-deep_purple-A200 text-xl"
                        size="txtSFProMedium20DeeppurpleA200"
                      >
                        ViviGilow
                      </Text>
                    </div>
                    <Line className="bg-gray-400_04 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                      <Img
                        className="h-5 md:mt-0 mt-0.5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="md:ml-[0] ml-[5px] text-green-A700_01 text-xl"
                        size="txtSFProMedium20GreenA70001"
                      >
                        30 ETH
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        $1,932.55
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[200px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        70% Below
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[246px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        In 5 Month
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[204px] text-deep_purple-A200 text-xl"
                        size="txtSFProMedium20DeeppurpleA200"
                      >
                        ViviGilow
                      </Text>
                    </div>
                    <Line className="bg-gray-400_04 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                      <Img
                        className="h-5 md:mt-0 mt-0.5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="md:ml-[0] ml-[5px] text-green-A700_01 text-xl"
                        size="txtSFProMedium20GreenA70001"
                      >
                        30 ETH
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        $1,932.55
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[200px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        70% Below
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[246px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        In 5 Month
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[204px] text-deep_purple-A200 text-xl"
                        size="txtSFProMedium20DeeppurpleA200"
                      >
                        ViviGilow
                      </Text>
                    </div>
                    <Line className="bg-gray-400_04 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                      <Img
                        className="h-5 md:mt-0 mt-0.5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="md:ml-[0] ml-[5px] text-green-A700_01 text-xl"
                        size="txtSFProMedium20GreenA70001"
                      >
                        30 ETH
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        $1,932.55
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[200px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        70% Below
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[246px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        In 5 Month
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[204px] text-deep_purple-A200 text-xl"
                        size="txtSFProMedium20DeeppurpleA200"
                      >
                        ViviGilow
                      </Text>
                    </div>
                    <Line className="bg-gray-400_04 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                      <Img
                        className="h-5 md:mt-0 mt-0.5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="md:ml-[0] ml-[5px] text-green-A700_01 text-xl"
                        size="txtSFProMedium20GreenA70001"
                      >
                        30 ETH
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        $1,932.55
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[200px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        70% Below
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[246px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        In 5 Month
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[204px] text-deep_purple-A200 text-xl"
                        size="txtSFProMedium20DeeppurpleA200"
                      >
                        ViviGilow
                      </Text>
                    </div>
                    <Line className="bg-gray-400_04 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                      <Img
                        className="h-5 md:mt-0 mt-0.5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="md:ml-[0] ml-[5px] text-green-A700_01 text-xl"
                        size="txtSFProMedium20GreenA70001"
                      >
                        30 ETH
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        $1,932.55
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[200px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        70% Below
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[246px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        In 5 Month
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[204px] text-deep_purple-A200 text-xl"
                        size="txtSFProMedium20DeeppurpleA200"
                      >
                        ViviGilow
                      </Text>
                    </div>
                    <Line className="bg-gray-400_04 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                      <Img
                        className="h-5 md:mt-0 mt-0.5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="md:ml-[0] ml-[5px] text-green-A700_01 text-xl"
                        size="txtSFProMedium20GreenA70001"
                      >
                        30 ETH
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        $1,932.55
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[200px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        70% Below
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[246px] text-black-900_01 text-xl"
                        size="txtSFProMedium20Black90001"
                      >
                        In 5 Month
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[204px] text-deep_purple-A200 text-xl"
                        size="txtSFProMedium20DeeppurpleA200"
                      >
                        ViviGilow
                      </Text>
                    </div>
                    <Line className="bg-gray-400_04 h-px w-full" />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[77px] w-full">
            <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[37%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                  size="txtSFProSemibold48"
                >
                  More From This Collection
                </Text>
              </div>
              <Line className="bg-gradient2  h-[5px] w-[54%]" />
            </div>
            <div className="bg-white-A700_19 flex md:flex-1 flex-row sm:gap-10 items-center justify-between md:mt-0 my-1 sm:px-5 px-[30px] rounded-[15px] w-[53%] md:w-full">
              <Img
                className="h-[45px] md:h-auto object-cover w-[45px]"
                src="images/img_component77variant8.png"
                alt="component77vari"
              />
              <Img
                className="h-[45px] w-[45px]"
                src="images/img_polygon2.svg"
                alt="polygonTwo"
              />
              <div className="bg-white-A700 h-[45px] my-3 rounded-[22px] w-[45px]"></div>
              <div className="bg-white-A700 h-[45px] my-3 w-[45px]"></div>
              <div className="bg-deep_purple-A200 flex flex-col items-center justify-end p-3 rounded-[5px]">
                <div className="bg-white-A700 h-[45px] rounded-[5px] w-[45px]"></div>
              </div>
              <div className="bg-white-A700 h-[45px] my-3 rounded-bl-[5px] rounded-br-[5px] rounded-tl-[50%] rounded-tr-[50%] w-[45px]"></div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-14 w-full"
            orientation="horizontal"
          >
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
          </List>
          <Button
            className="cursor-pointer font-bold min-w-[300px] mt-[60px] sm:text-2xl md:text-[26px] text-[28px] text-center"
            shape="round"
            color="deep_purple_A200"
            size="lg"
            variant="fill"
          >
            See More
          </Button>
          <div className="flex flex-col items-center justify-start mt-[120px] w-full">
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
                        alt="phinstagramlogo_One"
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
                          alt="mditwitter_One"
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

export default ItameDetailspagePage;
