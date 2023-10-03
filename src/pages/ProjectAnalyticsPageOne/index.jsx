import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const seeMoreOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProjectAnalyticsPageOnePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto py-10 w-full">
        <div className="flex flex-col items-center justify-start mb-4 w-full">
          <div className="flex flex-col md:gap-10 gap-[117px] items-center justify-start max-w-[1530px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
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
                className="md:ml-[0] ml-[100px] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Home
              </Text>
              <Text
                className="ml-10 md:ml-[0] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Pages
              </Text>
              <Text
                className="ml-10 md:ml-[0] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Explore
              </Text>
              <Text
                className="ml-10 md:ml-[0] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Resources
              </Text>
              <Text
                className="ml-10 md:ml-[0] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                Create
              </Text>
              <Text
                className="ml-10 md:ml-[0] text-white-A700 text-xl"
                size="txtSFProRegular20"
              >
                NFT GAme
              </Text>
              <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:ml-[0] ml-[93px] w-[15%] md:w-full">
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
                  src="images/img_group1000009458_18.svg"
                  alt="group1000009458"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-start w-1/5 md:w-full">
              <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                <Text
                  className="mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                  size="txtSFProRegular38"
                >
                  Page
                </Text>
                <Radio
                  value="Collection"
                  className="font-semibold mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                  inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                  checked={false}
                  name="collection3"
                  label="Collection"
                  id="Collection"
                ></Radio>
              </div>
              <Line className="bg-gradient2  h-[5px] w-[69%]" />
            </div>
          </div>
          <div className="flex flex-col mt-[105px] md:px-5 relative w-full">
            <Img
              className="h-[450px] mx-auto object-cover w-full"
              src="images/img_rectangle66423.png"
              alt="rectangle66423"
            />
            <div className="md:h-[126px] h-[250px] ml-[196px] mt-[-123px] w-[250px] z-[1]">
              <Img
                className="absolute h-[249px] inset-[0] justify-center m-auto rounded-[50%] w-[249px]"
                src="images/img_ellipse141_249x249.png"
                alt="ellipse141_One"
              />
              <Img
                className="absolute bottom-[0] h-[129px] inset-x-[0] mx-auto"
                src="images/img_ellipse142.svg"
                alt="ellipse142"
              />
            </div>
            <Img
              className="h-[60px] mb-[27px] ml-auto mr-[195px] mt-[-NaNpx] z-[1]"
              src="images/img_group1000009608.svg"
              alt="group1000009608"
            />
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1530px] mt-[39px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[29%] md:w-full">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-center text-white-A700"
                  size="txtSFProSemibold34"
                >
                  Fragments By James Jean
                </Text>
                <div className="md:h-8 h-[30px] sm:mt-0 mt-0.5 relative w-[30px]">
                  <Img
                    className="h-[30px] m-auto w-[30px]"
                    src="images/img_star1_12.svg"
                    alt="starOne"
                  />
                  <Img
                    className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                    src="images/img_checkmark_white_a700_30x30.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
              <div className="md:h-[83px] h-[93px] mt-[13px] relative w-full">
                <Text
                  className="absolute inset-x-[0] leading-[35.00px] mx-auto text-[22px] text-gray-400_05 sm:text-lg md:text-xl top-[0] w-full"
                  size="txtSFProRegular22Gray40005"
                >
                  Multidisciplinary visual artist James Jean presents Fragments
                  (2022), a new series of hand-drawn digital artworks
                  commissioned by the digital art platform Outland. The new and
                  ambitious series is. Multidisciplinary visual artist James
                  Jean presents Fragments (2022), a new series.
                </Text>
                <SelectBox
                  className="absolute bottom-[0] font-semibold inset-x-[0] mx-auto text-left text-xl w-[99%] sm:w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-5 mr-[0] w-5 right-[0] absolute"
                      src="images/img_arrowdown_white_a700_20x20.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group3047"
                  options={seeMoreOptionsList}
                  isSearchable={false}
                  placeholder="See More"
                  shape="square"
                  size="xs"
                  variant="gradient"
                  color="black_900_00_black_900"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[3px] w-[78%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtSFProSemibold34"
                  >
                    3,824 k
                  </Text>
                  <Text
                    className="mt-[3px] text-gray-400_05 text-xl"
                    size="txtSFProRegular20Gray40005"
                  >
                    total volume (USD)
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start ml-20 md:ml-[0]">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtSFProSemibold34"
                  >
                    0.05 k
                  </Text>
                  <Text
                    className="text-gray-400_05 text-xl"
                    size="txtSFProRegular20Gray40005"
                  >
                    floor price (USD)
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start ml-20 md:ml-[0]">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtSFProSemibold34"
                  >
                    0.0673 k
                  </Text>
                  <Text
                    className="text-gray-400_05 text-xl"
                    size="txtSFProRegular20Gray40005"
                  >
                    best offer (USD)
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[81px]">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtSFProSemibold34"
                  >
                    10%
                  </Text>
                  <Text
                    className="mt-1 text-gray-400_05 text-xl"
                    size="txtSFProRegular20Gray40005"
                  >
                    llsted
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start ml-20 md:ml-[0]">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtSFProSemibold34"
                  >
                    47,697
                  </Text>
                  <Text
                    className="mt-1 text-gray-400_05 text-xl"
                    size="txtSFProRegular20Gray40005"
                  >
                    owners
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start ml-20 md:ml-[0]">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtSFProSemibold34"
                  >
                    54%
                  </Text>
                  <Text
                    className="text-gray-400_05 text-xl"
                    size="txtSFProRegular20Gray40005"
                  >
                    unique owners
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start mt-14 w-[31%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[47%] sm:w-full">
                  <Button
                    className="cursor-pointer font-bold min-w-[220px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    Updates
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[220px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                  shape="round"
                  color="deep_purple_A200"
                  size="lg"
                  variant="fill"
                >
                  Live-Chat
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[117px] w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[100px] items-start justify-start w-[43%] md:w-full">
                  <Text
                    className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-gray-500_01"
                    size="txtSFProSemibold28Gray50001"
                  >
                    Items
                  </Text>
                  <Text
                    className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-gray-500_01"
                    size="txtSFProMedium28Gray50001"
                  >
                    Offers
                  </Text>
                  <Text
                    className="sm:mt-0 mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-gray-500_01"
                    size="txtSFProMedium28Gray50001"
                  >
                    Analytics
                  </Text>
                  <Text
                    className="sm:mt-0 mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtSFProMedium28WhiteA700"
                  >
                    Activity
                  </Text>
                </div>
                <Img
                  className="h-px"
                  src="images/img_group1000009579.svg"
                  alt="group1000009579"
                />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[60px] w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[180px]"
                leftIcon={
                  <Img
                    className="h-[30px] mt-px mb-0.5 mr-2.5"
                    src="images/img_settingssliders_1.svg"
                    alt="settings-sliders 1"
                  />
                }
                shape="round"
                color="white_A700_19"
                size="lg"
                variant="fill"
              >
                <div className="font-medium md:text-[26px] sm:text-2xl text-[28px] text-center">
                  Sales
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[230px]"
                rightIcon={
                  <Img
                    className="h-7 mt-0.5 mb-[3px] ml-2.5"
                    src="images/img_materialsymbol_white_a700_30x30.svg"
                    alt="material-symbols:arrow-back-ios-new-rounded"
                  />
                }
                shape="round"
                color="white_A700_19"
                size="lg"
                variant="fill"
              >
                <div className="font-medium md:text-[26px] sm:text-2xl text-[28px] text-left">
                  Last 1 hour
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-14 w-full">
              <div className="flex flex-col justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtSFProMedium32"
                >
                  Volume and Price
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[7px] mt-[53px] w-full">
                  <div className="flex flex-col md:gap-10 gap-[66px] items-end justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                      size="txtSFProLight28"
                    >
                      4 k
                    </Text>
                    <div className="flex flex-col items-end justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                        size="txtSFProLight28"
                      >
                        3,5 k
                      </Text>
                      <Text
                        className="mt-16 sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                        size="txtSFProLight28"
                      >
                        3 k
                      </Text>
                      <Text
                        className="mt-[66px] sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                        size="txtSFProLight28"
                      >
                        2,5 k
                      </Text>
                      <Text
                        className="mt-[63px] sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                        size="txtSFProLight28"
                      >
                        2 k
                      </Text>
                      <Text
                        className="mt-[68px] sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                        size="txtSFProLight28"
                      >
                        1,5 k
                      </Text>
                      <Text
                        className="mt-[63px] sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                        size="txtSFProLight28"
                      >
                        1 k
                      </Text>
                      <Text
                        className="mt-[66px] sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                        size="txtSFProLight28"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[697px]"
                    src="images/img_group1000010471.svg"
                    alt="group1000010471"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProLight28"
                    >
                      0,12 ETH
                    </Text>
                    <Text
                      className="mt-[65px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProLight28"
                    >
                      0,12 ETH
                    </Text>
                    <Text
                      className="mt-[66px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProLight28"
                    >
                      0,12 ETH
                    </Text>
                    <Text
                      className="mt-[65px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProLight28"
                    >
                      0,12 ETH
                    </Text>
                    <Text
                      className="mt-[65px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProLight28"
                    >
                      0,12 ETH
                    </Text>
                    <Text
                      className="mt-[66px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProLight28"
                    >
                      0,12 ETH
                    </Text>
                    <Text
                      className="mt-[65px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProLight28"
                    >
                      0,12 ETH
                    </Text>
                    <Text
                      className="mt-[62px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProLight28"
                    >
                      0
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[81px] mt-[23px] w-[86%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProLight28"
                  >
                    6:00 PM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[106px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProLight28"
                  >
                    9:00 PM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[162px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProLight28"
                  >
                    12:00 PM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[162px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProLight28"
                  >
                    3:00 Am
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[162px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProLight28"
                  >
                    6:00 AM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[94px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProLight28"
                  >
                    9:00 AM
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[76px] w-full">
              <List
                className="flex flex-col gap-[30px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[15px] w-[140px]"
                    src="images/img_rectangle66483_140x140.png"
                    alt="rectangle66483"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[13%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProMedium40"
                        >
                          Gamesis
                        </Text>
                        <div className="h-[30px] relative w-[30px]">
                          <Img
                            className="h-[30px] m-auto w-[30px]"
                            src="images/img_star1_13.svg"
                            alt="starOne"
                          />
                          <Img
                            className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                            src="images/img_checkmark_white_a700_30x30.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-2xl md:text-[22px] text-gray-300_01 sm:text-xl"
                        size="txtSFProRegular24Gray30001"
                      >
                        Gamesis
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-300_01 text-xl"
                        size="txtSFProSemibold20Gray30001"
                      >
                        + More
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[1040px]">
                    <Text
                      className="text-gray-300_01 text-right text-xl"
                      size="txtSFProMedium20Gray30001"
                    >
                      List
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                      size="txtSFProMedium24"
                    >
                      0.54 WETH
                    </Text>
                    <Text
                      className="text-deep_purple-A200 text-right text-xl"
                      size="txtSFProMedium20DeeppurpleA200"
                    >
                      30s ago
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[15px] w-[140px]"
                    src="images/img_rectangle66483_140x140.png"
                    alt="rectangle66483"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[13%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProMedium40"
                        >
                          Gamesis
                        </Text>
                        <div className="h-[30px] relative w-[30px]">
                          <Img
                            className="h-[30px] m-auto w-[30px]"
                            src="images/img_star1_14.svg"
                            alt="starOne"
                          />
                          <Img
                            className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                            src="images/img_checkmark_white_a700_30x30.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-2xl md:text-[22px] text-gray-300_01 sm:text-xl"
                        size="txtSFProRegular24Gray30001"
                      >
                        Gamesis
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-300_01 text-xl"
                        size="txtSFProSemibold20Gray30001"
                      >
                        + More
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[1040px]">
                    <Text
                      className="text-gray-300_01 text-right text-xl"
                      size="txtSFProMedium20Gray30001"
                    >
                      List
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                      size="txtSFProMedium24"
                    >
                      0.54 WETH
                    </Text>
                    <Text
                      className="text-deep_purple-A200 text-right text-xl"
                      size="txtSFProMedium20DeeppurpleA200"
                    >
                      30s ago
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[15px] w-[140px]"
                    src="images/img_rectangle66483_140x140.png"
                    alt="rectangle66483"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[13%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProMedium40"
                        >
                          Gamesis
                        </Text>
                        <div className="h-[30px] relative w-[30px]">
                          <Img
                            className="h-[30px] m-auto w-[30px]"
                            src="images/img_star1_15.svg"
                            alt="starOne"
                          />
                          <Img
                            className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                            src="images/img_checkmark_white_a700_30x30.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-2xl md:text-[22px] text-gray-300_01 sm:text-xl"
                        size="txtSFProRegular24Gray30001"
                      >
                        Gamesis
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-300_01 text-xl"
                        size="txtSFProSemibold20Gray30001"
                      >
                        + More
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[1040px]">
                    <Text
                      className="text-gray-300_01 text-right text-xl"
                      size="txtSFProMedium20Gray30001"
                    >
                      List
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                      size="txtSFProMedium24"
                    >
                      0.54 WETH
                    </Text>
                    <Text
                      className="text-deep_purple-A200 text-right text-xl"
                      size="txtSFProMedium20DeeppurpleA200"
                    >
                      30s ago
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[15px] w-[140px]"
                    src="images/img_rectangle66483_140x140.png"
                    alt="rectangle66483"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[13%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProMedium40"
                        >
                          Gamesis
                        </Text>
                        <div className="h-[30px] relative w-[30px]">
                          <Img
                            className="h-[30px] m-auto w-[30px]"
                            src="images/img_star1_16.svg"
                            alt="starOne"
                          />
                          <Img
                            className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                            src="images/img_checkmark_white_a700_30x30.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-2xl md:text-[22px] text-gray-300_01 sm:text-xl"
                        size="txtSFProRegular24Gray30001"
                      >
                        Gamesis
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-300_01 text-xl"
                        size="txtSFProSemibold20Gray30001"
                      >
                        + More
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[1040px]">
                    <Text
                      className="text-gray-300_01 text-right text-xl"
                      size="txtSFProMedium20Gray30001"
                    >
                      List
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                      size="txtSFProMedium24"
                    >
                      0.54 WETH
                    </Text>
                    <Text
                      className="text-deep_purple-A200 text-right text-xl"
                      size="txtSFProMedium20DeeppurpleA200"
                    >
                      30s ago
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[15px] w-[140px]"
                    src="images/img_rectangle66483_140x140.png"
                    alt="rectangle66483"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[13%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProMedium40"
                        >
                          Gamesis
                        </Text>
                        <div className="h-[30px] relative w-[30px]">
                          <Img
                            className="h-[30px] m-auto w-[30px]"
                            src="images/img_star1_17.svg"
                            alt="starOne"
                          />
                          <Img
                            className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                            src="images/img_checkmark_white_a700_30x30.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-2xl md:text-[22px] text-gray-300_01 sm:text-xl"
                        size="txtSFProRegular24Gray30001"
                      >
                        Gamesis
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-300_01 text-xl"
                        size="txtSFProSemibold20Gray30001"
                      >
                        + More
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[1040px]">
                    <Text
                      className="text-gray-300_01 text-right text-xl"
                      size="txtSFProMedium20Gray30001"
                    >
                      List
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                      size="txtSFProMedium24"
                    >
                      0.54 WETH
                    </Text>
                    <Text
                      className="text-deep_purple-A200 text-right text-xl"
                      size="txtSFProMedium20DeeppurpleA200"
                    >
                      30s ago
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[15px] w-[140px]"
                    src="images/img_rectangle66483_140x140.png"
                    alt="rectangle66483"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[13%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProMedium40"
                        >
                          Gamesis
                        </Text>
                        <div className="h-[30px] relative w-[30px]">
                          <Img
                            className="h-[30px] m-auto w-[30px]"
                            src="images/img_star1_18.svg"
                            alt="starOne"
                          />
                          <Img
                            className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                            src="images/img_checkmark_white_a700_30x30.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-2xl md:text-[22px] text-gray-300_01 sm:text-xl"
                        size="txtSFProRegular24Gray30001"
                      >
                        Gamesis
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-300_01 text-xl"
                        size="txtSFProSemibold20Gray30001"
                      >
                        + More
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[1040px]">
                    <Text
                      className="text-gray-300_01 text-right text-xl"
                      size="txtSFProMedium20Gray30001"
                    >
                      List
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                      size="txtSFProMedium24"
                    >
                      0.54 WETH
                    </Text>
                    <Text
                      className="text-deep_purple-A200 text-right text-xl"
                      size="txtSFProMedium20DeeppurpleA200"
                    >
                      30s ago
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[15px] w-[140px]"
                    src="images/img_rectangle66483_140x140.png"
                    alt="rectangle66483"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[13%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProMedium40"
                        >
                          Gamesis
                        </Text>
                        <div className="h-[30px] relative w-[30px]">
                          <Img
                            className="h-[30px] m-auto w-[30px]"
                            src="images/img_star1_19.svg"
                            alt="starOne"
                          />
                          <Img
                            className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                            src="images/img_checkmark_white_a700_30x30.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-2xl md:text-[22px] text-gray-300_01 sm:text-xl"
                        size="txtSFProRegular24Gray30001"
                      >
                        Gamesis
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-300_01 text-xl"
                        size="txtSFProSemibold20Gray30001"
                      >
                        + More
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[1040px]">
                    <Text
                      className="text-gray-300_01 text-right text-xl"
                      size="txtSFProMedium20Gray30001"
                    >
                      List
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                      size="txtSFProMedium24"
                    >
                      0.54 WETH
                    </Text>
                    <Text
                      className="text-deep_purple-A200 text-right text-xl"
                      size="txtSFProMedium20DeeppurpleA200"
                    >
                      30s ago
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[15px] w-[140px]"
                    src="images/img_rectangle66483_140x140.png"
                    alt="rectangle66483"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[13%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProMedium40"
                        >
                          Gamesis
                        </Text>
                        <div className="h-[30px] relative w-[30px]">
                          <Img
                            className="h-[30px] m-auto w-[30px]"
                            src="images/img_star1_20.svg"
                            alt="starOne"
                          />
                          <Img
                            className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                            src="images/img_checkmark_white_a700_30x30.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-2xl md:text-[22px] text-gray-300_01 sm:text-xl"
                        size="txtSFProRegular24Gray30001"
                      >
                        Gamesis
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-300_01 text-xl"
                        size="txtSFProSemibold20Gray30001"
                      >
                        + More
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[1040px]">
                    <Text
                      className="text-gray-300_01 text-right text-xl"
                      size="txtSFProMedium20Gray30001"
                    >
                      List
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                      size="txtSFProMedium24"
                    >
                      0.54 WETH
                    </Text>
                    <Text
                      className="text-deep_purple-A200 text-right text-xl"
                      size="txtSFProMedium20DeeppurpleA200"
                    >
                      30s ago
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[15px] w-[140px]"
                    src="images/img_rectangle66483_140x140.png"
                    alt="rectangle66483"
                  />
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[13%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                          size="txtSFProMedium40"
                        >
                          Gamesis
                        </Text>
                        <div className="h-[30px] relative w-[30px]">
                          <Img
                            className="h-[30px] m-auto w-[30px]"
                            src="images/img_star1_21.svg"
                            alt="starOne"
                          />
                          <Img
                            className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]"
                            src="images/img_checkmark_white_a700_30x30.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-[9px] text-2xl md:text-[22px] text-gray-300_01 sm:text-xl"
                        size="txtSFProRegular24Gray30001"
                      >
                        Gamesis
                      </Text>
                      <Text
                        className="mt-[5px] text-gray-300_01 text-xl"
                        size="txtSFProSemibold20Gray30001"
                      >
                        + More
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[1040px]">
                    <Text
                      className="text-gray-300_01 text-right text-xl"
                      size="txtSFProMedium20Gray30001"
                    >
                      List
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                      size="txtSFProMedium24"
                    >
                      0.54 WETH
                    </Text>
                    <Text
                      className="text-deep_purple-A200 text-right text-xl"
                      size="txtSFProMedium20DeeppurpleA200"
                    >
                      30s ago
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[364px] mt-20 sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              Make Collection Offer
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
                      platea integer proin eget nibh arcu. Eget enim
                      pellentesque
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
      </div>
    </>
  );
};

export default ProjectAnalyticsPageOnePage;
