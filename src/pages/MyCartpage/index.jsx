import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MyCartpagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1530px] mb-[18px] mx-auto md:px-5 w-full">
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
                src="images/img_group1000009458_13.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[643px] mt-[116px] w-[23%] md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
              <Text
                className="mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-right text-white-A700"
                size="txtSFProRegular38"
              >
                Pages
              </Text>
              <Radio
                value="AddToCart"
                className="font-semibold mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                checked={false}
                name="addtocart"
                label="Add To Cart "
                id="AddToCart"
              ></Radio>
            </div>
            <Line className="bg-gradient2  h-[5px] w-[54%]" />
          </div>
          <Text
            className="md:ml-[0] ml-[609px] mt-[113px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
            size="txtSFProBold48"
          >
            MyScope Cart
          </Text>
          <List
            className="flex flex-col gap-[30px] items-center mt-[51px] w-full"
            orientation="vertical"
          >
            <div className="bg-white-A700_19 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-5 rounded-[30px] w-full">
              <Img
                className="h-[190px] md:h-auto object-cover rounded-[15px] w-[190px]"
                src="images/img_rectangle6710.png"
                alt="rectangle6710"
              />
              <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start md:ml-[0] ml-[30px] w-[11%] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtSFProSemibold32WhiteA700"
                  >
                    Fragments
                  </Text>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtSFProRegular22WhiteA700"
                  >
                    0.035 ETH
                  </Text>
                </div>
                <Text
                  className="text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                  size="txtSFProBold22"
                >
                  $45.80
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[130px] items-center justify-start md:ml-[0] ml-[744px] p-[25px] sm:px-5 w-[23%] md:w-full"
                style={{
                  backgroundImage: "url('images/img_group1000010170.svg')",
                }}
              >
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="bg-deep_purple-A200_19 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                    <div className="bg-deep_purple-A200 h-[3px] mb-[11px] mt-3.5 rounded-[1px] w-[94%]"></div>
                  </div>
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtSFProBold22WhiteA700"
                  >
                    2
                  </Text>
                  <div className="bg-deep_purple-A200 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                    <Img
                      className="h-7 w-7"
                      src="images/img_plus_white_a700.svg"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-deep_purple-A200 flex flex-1 md:flex-col flex-row gap-[50px] items-center justify-start md:pr-10 sm:pr-5 pr-[50px] rounded-[30px] w-full">
              <div className="bg-white-A700 flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-5 rounded-[30px] w-[93%] md:w-full">
                <Img
                  className="h-[190px] md:h-auto object-cover rounded-[15px] w-[190px]"
                  src="images/img_rectangle6710_190x190.png"
                  alt="rectangle6710"
                />
                <div className="flex flex-col gap-[25px] items-start justify-start md:ml-[0] ml-[30px] w-[12%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01"
                      size="txtSFProSemibold32Black90001"
                    >
                      Fragments
                    </Text>
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtSFProRegular22Gray900"
                    >
                      0.035 ETH
                    </Text>
                  </div>
                  <Text
                    className="text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                    size="txtSFProBold22"
                  >
                    $45.80
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[130px] items-center justify-start md:ml-[0] ml-[588px] p-[25px] sm:px-5 w-[26%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group1000010170.svg')",
                  }}
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="bg-deep_purple-A200_19 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                      <div className="bg-deep_purple-A200 h-[3px] mb-[11px] mt-3.5 rounded-[1px] w-[94%]"></div>
                    </div>
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtSFProBold22Gray900"
                    >
                      2
                    </Text>
                    <div className="bg-deep_purple-A200 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                      <Img
                        className="h-7 w-7"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[5%] md:w-full">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_edit.svg"
                  alt="edit"
                />
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_videocamera.svg"
                  alt="videocamera"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-white-A700_19 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 rounded-[30px] w-full">
                <Img
                  className="h-[190px] md:h-auto object-cover rounded-[15px] w-[190px]"
                  src="images/img_rectangle6710_1.png"
                  alt="rectangle6710"
                />
                <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start md:ml-[0] ml-[30px] w-[11%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtSFProSemibold32WhiteA700"
                    >
                      Fragments
                    </Text>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtSFProRegular22WhiteA700"
                    >
                      0.035 ETH
                    </Text>
                  </div>
                  <Text
                    className="text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                    size="txtSFProBold22"
                  >
                    $45.80
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[130px] items-center justify-start md:ml-[0] ml-[744px] p-[25px] sm:px-5 w-[23%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group1000010170.svg')",
                  }}
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="bg-deep_purple-A200_19 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                      <div className="bg-deep_purple-A200 h-[3px] mb-[11px] mt-3.5 rounded-[1px] w-[94%]"></div>
                    </div>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtSFProBold22WhiteA700"
                    >
                      2
                    </Text>
                    <div className="bg-deep_purple-A200 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                      <Img
                        className="h-7 w-7"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-white-A700_19 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 rounded-[30px] w-full">
                <Img
                  className="h-[190px] md:h-auto object-cover rounded-[15px] w-[190px]"
                  src="images/img_rectangle6710_2.png"
                  alt="rectangle6710"
                />
                <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start md:ml-[0] ml-[30px] w-[11%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtSFProSemibold32WhiteA700"
                    >
                      Fragments
                    </Text>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtSFProRegular22WhiteA700"
                    >
                      0.035 ETH
                    </Text>
                  </div>
                  <Text
                    className="text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                    size="txtSFProBold22"
                  >
                    $45.80
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[130px] items-center justify-start md:ml-[0] ml-[744px] p-[25px] sm:px-5 w-[23%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group1000010170.svg')",
                  }}
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="bg-deep_purple-A200_19 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                      <div className="bg-deep_purple-A200 h-[3px] mb-[11px] mt-3.5 rounded-[1px] w-[94%]"></div>
                    </div>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtSFProBold22WhiteA700"
                    >
                      2
                    </Text>
                    <div className="bg-deep_purple-A200 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                      <Img
                        className="h-7 w-7"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-white-A700_19 flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 rounded-[30px] w-full">
                <Img
                  className="h-[190px] md:h-auto object-cover rounded-[15px] w-[190px]"
                  src="images/img_rectangle6710_3.png"
                  alt="rectangle6710"
                />
                <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start md:ml-[0] ml-[30px] w-[11%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtSFProSemibold32WhiteA700"
                    >
                      Fragments
                    </Text>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtSFProRegular22WhiteA700"
                    >
                      0.035 ETH
                    </Text>
                  </div>
                  <Text
                    className="text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                    size="txtSFProBold22"
                  >
                    $45.80
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[130px] items-center justify-start md:ml-[0] ml-[744px] p-[25px] sm:px-5 w-[23%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group1000010170.svg')",
                  }}
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="bg-deep_purple-A200_19 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                      <div className="bg-deep_purple-A200 h-[3px] mb-[11px] mt-3.5 rounded-[1px] w-[94%]"></div>
                    </div>
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtSFProBold22WhiteA700"
                    >
                      2
                    </Text>
                    <div className="bg-deep_purple-A200 flex flex-col h-20 items-center justify-start p-[25px] sm:px-5 rounded-[10px] w-20">
                      <Img
                        className="h-7 w-7"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col items-center justify-start mt-[115px] w-full">
            <div className="flex flex-col gap-[54px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[71%] md:w-full">
                <Text
                  className="sm:mt-0 mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtSFProBold32"
                >
                  Order Summary
                </Text>
                <Text
                  className="mb-0.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtSFProBold32"
                >
                  Choose Your Ticket
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProMedium28WhiteA700"
                    >
                      Total
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                      size="txtSFProMedium28WhiteA700"
                    >
                      $120
                    </Text>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-center justify-between mt-7 w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProMedium28WhiteA700"
                    >
                      ETH
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                      size="txtSFProMedium28WhiteA700"
                    >
                      1.094
                    </Text>
                  </div>
                  <Line className="bg-white-A700 h-0.5 mt-[39px] w-full" />
                  <div className="flex flex-row sm:gap-10 items-center justify-between mt-[26px] w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtSFProBold28"
                    >
                      Total Price
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                      size="txtSFProBold28"
                    >
                      $120.00
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[300px] mt-[59px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                    shape="round"
                    color="deep_purple_A200"
                    size="lg"
                    variant="fill"
                  >
                    Click To Pay
                  </Button>
                  <Img
                    className="h-16 mt-[60px]"
                    src="images/img_group1000010205.svg"
                    alt="group1000010205"
                  />
                </div>
                <div className="bg-white-A700_19 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[15px] w-[48%] md:w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <Img
                      className="h-6"
                      src="images/img_group1000010200.svg"
                      alt="group1000010200"
                    />
                    <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                      <Img
                        className="flex-1 h-[500px] md:h-auto object-cover w-full"
                        src="images/img_tiket111.png"
                        alt="tiket111"
                      />
                      <Img
                        className="flex-1 h-[500px] md:h-auto object-cover w-full"
                        src="images/img_tiket111.png"
                        alt="tiket112"
                      />
                      <Img
                        className="flex-1 h-[500px] md:h-auto object-cover w-full"
                        src="images/img_tiket111.png"
                        alt="tiket113"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default MyCartpagePage;
