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

const CollectionPagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");
  const [group1000009590value, setGroup1000009590value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto py-10 w-full">
        <div className="flex flex-col items-center justify-start mb-[29px] w-full">
          <div className="flex flex-col md:gap-10 gap-[117px] items-center justify-start max-w-[1530px] mx-auto md:px-5 w-full">
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
                  src="images/img_group1000009458_4.svg"
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
                  name="collection"
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
          <div className="flex flex-col items-center justify-start max-w-[1530px] mt-[39px] mx-auto md:px-5 w-full">
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
                    src="images/img_star1.svg"
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
                  name="group3040"
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
            <div className="flex flex-col items-center justify-start mt-[118px] w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[43%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProSemibold24WhiteA700"
                  >
                    Items
                  </Text>
                  <Text
                    className="mb-0.5 md:ml-[0] ml-[108px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                    size="txtSFProRegular24Gray50001"
                  >
                    Offers
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[109px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                    size="txtSFProRegular24Gray50001"
                  >
                    Analytics
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[114px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                    size="txtSFProRegular24Gray50001"
                  >
                    Activates
                  </Text>
                </div>
                <Img
                  className="h-px"
                  src="images/img_group1000009579.svg"
                  alt="group1000009579"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[30px] w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[180px]"
                leftIcon={
                  <Img
                    className="h-[30px] mt-px mb-0.5 mr-[11px]"
                    src="images/img_settingssliders_1.svg"
                    alt="settings-sliders 1"
                  />
                }
                shape="round"
                color="deep_purple_A200"
                size="lg"
                variant="fill"
              >
                <div className="font-medium md:text-[26px] sm:text-2xl text-[28px] text-center">
                  Filter
                </div>
              </Button>
              <div className="flex flex-row gap-2.5 items-center justify-center md:mt-0 mt-[18px]">
                <div className="bg-green-A700_33 flex flex-col h-[30px] items-center justify-start p-[5px] rounded-[50%] w-[30px]">
                  <div className="bg-green-A700_02 h-5 rounded-[50%] w-5"></div>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProMedium28WhiteA700"
                >
                  Live
                </Text>
              </div>
              <Text
                className="md:mt-0 mt-[19px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                size="txtSFProMedium28WhiteA700"
              >
                16,780 results
              </Text>
              <Input
                name="group1000009590"
                placeholder="Search"
                value={group1000009590value}
                onChange={(e) => setGroup1000009590value(e)}
                className="!placeholder:text-black-900 !text-black-900 font-medium md:text-[26px] p-0 sm:text-2xl text-[28px] text-left w-full"
                wrapClassName="flex md:flex-1 rounded-[10px] md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-10 mr-2.5 my-auto"
                    src="images/img_search_black_900.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#05011d"
                    className="cursor-pointer h-10 my-auto"
                    onClick={() => setGroup1000009590value("")}
                    style={{
                      visibility:
                        group1000009590value?.length <= 0
                          ? "hidden"
                          : "visible",
                    }}
                    height={40}
                    width={40}
                    viewBox="0 0 40 40"
                  />
                }
                color="white_A700"
              ></Input>
              <div className="bg-white-A700_19 flex flex-row gap-24 items-center justify-center p-[15px] rounded-[10px]">
                <Text
                  className="ml-1 mt-[5px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProMedium28WhiteA700"
                >
                  Price Low to High
                </Text>
                <Img
                  className="h-[30px] mr-1 w-[30px]"
                  src="images/img_materialsymbol_white_a700_30x30.svg"
                  alt="materialsymbol_One"
                />
              </div>
              <Button
                className="flex h-[70px] items-center justify-center w-[70px]"
                shape="round"
                color="white_A700_19"
                size="lg"
                variant="fill"
              >
                <Img
                  className="h-[30px]"
                  src="images/img_group1000009594.svg"
                  alt="group1000009594"
                />
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-10 items-start justify-start max-w-[1592px] mt-[60px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[162px] justify-start w-[35%] md:w-full">
              <div className="flex flex-col gap-[38px] items-center justify-start md:ml-[0] ml-[62px] w-[89%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[17px] rounded-[10px] w-full">
                  <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtSFProMedium28"
                    >
                      Status
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_materialsymbol_black_900.svg"
                      alt="materialsymbol_Two"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[37px] items-center justify-start w-[92%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProMedium28WhiteA700"
                    >
                      Price
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_materialsymbol_white_a700_30x30.svg"
                      alt="materialsymbol_Three"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProMedium28WhiteA700"
                    >
                      Quantity
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_materialsymbol_white_a700_30x30.svg"
                      alt="materialsymbol_Four"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProMedium28WhiteA700"
                    >
                      Currency
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_materialsymbol_white_a700_30x30.svg"
                      alt="materialsymbol_Five"
                    />
                  </div>
                  <Line className="bg-white-A700 h-px w-full" />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProMedium28WhiteA700"
                    >
                      Traits
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_materialsymbol_white_a700_30x30.svg"
                      alt="materialsymbol_Six"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProMedium28WhiteA700"
                    >
                      Kind
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[305px] sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-A200"
                      size="txtSFProMedium28DeeppurpleA200"
                    >
                      03
                    </Text>
                    <Img
                      className="h-[30px] sm:ml-[0] ml-[15px] w-[30px]"
                      src="images/img_materialsymbol_white_a700_30x30.svg"
                      alt="materialsymbol_Seven"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="h-[409px] md:h-auto object-cover w-[55%]"
                src="images/img_image74.png"
                alt="imageSeventyFour"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[64%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="h-[676px] relative w-full">
                    <Img
                      className="h-[676px] m-auto object-cover rounded-bl-[10px] rounded-br-[10px] rounded-tl-[245px] rounded-tr-[245px] w-full"
                      src="images/img_rectangle66483_9.png"
                      alt="rectangle66483"
                    />
                    <div className="absolute bg-white-A700_19 bottom-[3%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
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
                      className="h-[676px] m-auto object-cover rounded-bl-[10px] rounded-br-[10px] rounded-tl-[245px] rounded-tr-[245px] w-full"
                      src="images/img_rectangle66483_9.png"
                      alt="rectangle66483"
                    />
                    <div className="absolute bg-white-A700_19 bottom-[3%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
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
                      className="h-[676px] m-auto object-cover rounded-bl-[10px] rounded-br-[10px] rounded-tl-[245px] rounded-tr-[245px] w-full"
                      src="images/img_rectangle66483_9.png"
                      alt="rectangle66483"
                    />
                    <div className="absolute bg-white-A700_19 bottom-[3%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
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
                      className="h-[676px] m-auto object-cover rounded-bl-[10px] rounded-br-[10px] rounded-tl-[245px] rounded-tr-[245px] w-full"
                      src="images/img_rectangle66483_9.png"
                      alt="rectangle66483"
                    />
                    <div className="absolute bg-white-A700_19 bottom-[3%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-4 rounded-[5px] w-[94%]">
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
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1530px] mt-[120px] mx-auto md:px-5 w-full">
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

export default CollectionPagePage;
