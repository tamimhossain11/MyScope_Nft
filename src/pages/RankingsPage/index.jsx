import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const RankingsPagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1530px] mb-[13px] mx-auto md:px-5 w-full">
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
                src="images/img_group1000009458_5.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start mt-[119px] w-[19%] md:w-full">
            <div className="flex flex-row gap-[15px] items-center justify-between w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                size="txtSFProRegular38"
              >
                Page
              </Text>
              <Radio
                value="Rankings"
                className="font-semibold md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                checked={false}
                name="rankings"
                label="Rankings "
                id="Rankings"
              ></Radio>
            </div>
            <Line className="bg-gradient2  h-[5px] w-[72%]" />
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[115px] rounded-[15px] w-full">
            <div className="sm:h-[1004px] h-[1072px] md:h-[2147px] relative w-full">
              <div className="flex flex-col m-auto w-full">
                <div className="bg-deep_purple-A200 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mx-auto p-[17px] rounded-tl-[15px] rounded-tr-[15px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[55px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProSemibold24WhiteA700"
                  >
                    Collections
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[214px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProSemibold24WhiteA700"
                  >
                    Volume
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[109px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                    size="txtSFProSemibold24WhiteA700"
                  >
                    24d %
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[114px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProSemibold24WhiteA700"
                  >
                    7d %
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[121px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProSemibold24WhiteA700"
                  >
                    Floor Price
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[105px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProSemibold24WhiteA700"
                  >
                    Owners
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[105px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSFProSemibold24WhiteA700"
                  >
                    Items
                  </Text>
                </div>
                <div className="bg-gray-400_04 flex flex-col items-center justify-start mb-auto ml-auto mt-[-66px] rounded-br-[15px] rounded-tr-[15px] w-[2%] z-[1]">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-tr-[15px] w-full">
                    <Img
                      className="h-3 mt-1 w-3"
                      src="images/img_maskgroup_black_900_01.svg"
                      alt="maskgroup"
                    />
                  </div>
                  <div className="bg-white-A700 h-[60px] mt-[5px] rounded-[5px] w-1/2"></div>
                  <div className="bg-deep_purple-A200 flex flex-col items-center justify-start mt-[957px] p-1 rounded-tr-[15px] w-full">
                    <Img
                      className="h-3 mb-1 w-3"
                      src="images/img_maskgroup_white_a700.svg"
                      alt="maskgroup_One"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[37px] items-end justify-start mb-11 ml-5 mt-[-NaNpx] w-[93%] z-[1]">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[73%] md:w-full">
                    <div className="flex flex-row items-start justify-evenly w-[11%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="text-black-900_01 text-xl"
                        size="txtSFProRegular20Black90001"
                      >
                        1,932.55
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[108px] w-[24%] md:w-full">
                      <Text
                        className="text-red-A700 text-xl"
                        size="txtSFProRegular20RedA700"
                      >
                        -70%
                      </Text>
                      <Text
                        className="text-center text-green-800 text-xl"
                        size="txtSFProRegular20Green800"
                      >
                        +44.99%
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center md:ml-[0] ml-[125px] w-[8%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum_One"
                      />
                      <Text
                        className="ml-[5px] text-black-900_01 text-center text-xl"
                        size="txtSFProRegular20Black90001"
                      >
                        15.95
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[142px] w-[23%] md:w-full">
                      <Text
                        className="text-black-900_01 text-center text-xl"
                        size="txtSFProRegular20Black90001"
                      >
                        15.5k
                      </Text>
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtSFProRegular20Black900"
                      >
                        10.0k
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col md:gap-10 gap-[75px] items-end justify-end pt-[5px] px-[5px] w-full">
                    <List
                      className="flex flex-col gap-[37px] mt-8 w-[74%]"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-1 flex-row items-start justify-evenly w-[11%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum"
                          />
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            1,932.55
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[108px] w-[24%] md:w-full">
                          <Text
                            className="text-red-A700 text-xl"
                            size="txtSFProRegular20RedA700"
                          >
                            -70%
                          </Text>
                          <Text
                            className="text-center text-green-800 text-xl"
                            size="txtSFProRegular20Green800"
                          >
                            +44.99%
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[125px] w-[8%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum_One"
                          />
                          <Text
                            className="ml-[5px] text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.95
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[142px] w-[23%] md:w-full">
                          <Text
                            className="text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.5k
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtSFProRegular20Black900"
                          >
                            10.0k
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-400_04 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-1 flex-row items-start justify-evenly w-[11%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum"
                          />
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            1,932.55
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[108px] w-[24%] md:w-full">
                          <Text
                            className="text-red-A700 text-xl"
                            size="txtSFProRegular20RedA700"
                          >
                            -70%
                          </Text>
                          <Text
                            className="text-center text-green-800 text-xl"
                            size="txtSFProRegular20Green800"
                          >
                            +44.99%
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[125px] w-[8%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum_One"
                          />
                          <Text
                            className="ml-[5px] text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.95
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[142px] w-[23%] md:w-full">
                          <Text
                            className="text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.5k
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtSFProRegular20Black900"
                          >
                            10.0k
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-400_04 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-1 flex-row items-start justify-evenly w-[11%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum"
                          />
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            1,932.55
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[108px] w-[24%] md:w-full">
                          <Text
                            className="text-red-A700 text-xl"
                            size="txtSFProRegular20RedA700"
                          >
                            -70%
                          </Text>
                          <Text
                            className="text-center text-green-800 text-xl"
                            size="txtSFProRegular20Green800"
                          >
                            +44.99%
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[125px] w-[8%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum_One"
                          />
                          <Text
                            className="ml-[5px] text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.95
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[142px] w-[23%] md:w-full">
                          <Text
                            className="text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.5k
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtSFProRegular20Black900"
                          >
                            10.0k
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-400_04 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-1 flex-row items-start justify-evenly w-[11%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum"
                          />
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            1,932.55
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[108px] w-[24%] md:w-full">
                          <Text
                            className="text-red-A700 text-xl"
                            size="txtSFProRegular20RedA700"
                          >
                            -70%
                          </Text>
                          <Text
                            className="text-center text-green-800 text-xl"
                            size="txtSFProRegular20Green800"
                          >
                            +44.99%
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[125px] w-[8%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum_One"
                          />
                          <Text
                            className="ml-[5px] text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.95
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[142px] w-[23%] md:w-full">
                          <Text
                            className="text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.5k
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtSFProRegular20Black900"
                          >
                            10.0k
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-400_04 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-1 flex-row items-start justify-evenly w-[11%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum"
                          />
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            1,932.55
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[108px] w-[24%] md:w-full">
                          <Text
                            className="text-red-A700 text-xl"
                            size="txtSFProRegular20RedA700"
                          >
                            -70%
                          </Text>
                          <Text
                            className="text-center text-green-800 text-xl"
                            size="txtSFProRegular20Green800"
                          >
                            +44.99%
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[125px] w-[8%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum_One"
                          />
                          <Text
                            className="ml-[5px] text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.95
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[142px] w-[23%] md:w-full">
                          <Text
                            className="text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.5k
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtSFProRegular20Black900"
                          >
                            10.0k
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-400_04 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-1 flex-row items-start justify-evenly w-[11%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum"
                          />
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            1,932.55
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[108px] w-[24%] md:w-full">
                          <Text
                            className="text-red-A700 text-xl"
                            size="txtSFProRegular20RedA700"
                          >
                            -70%
                          </Text>
                          <Text
                            className="text-center text-green-800 text-xl"
                            size="txtSFProRegular20Green800"
                          >
                            +44.99%
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[125px] w-[8%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum_One"
                          />
                          <Text
                            className="ml-[5px] text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.95
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[142px] w-[23%] md:w-full">
                          <Text
                            className="text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.5k
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtSFProRegular20Black900"
                          >
                            10.0k
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-400_04 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-1 flex-row items-start justify-evenly w-[11%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum"
                          />
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            1,932.55
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[108px] w-[24%] md:w-full">
                          <Text
                            className="text-red-A700 text-xl"
                            size="txtSFProRegular20RedA700"
                          >
                            -70%
                          </Text>
                          <Text
                            className="text-center text-green-800 text-xl"
                            size="txtSFProRegular20Green800"
                          >
                            +44.99%
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[125px] w-[8%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_4691461ethereumicon.svg"
                            alt="4691461ethereum_One"
                          />
                          <Text
                            className="ml-[5px] text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.95
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[142px] w-[23%] md:w-full">
                          <Text
                            className="text-black-900_01 text-center text-xl"
                            size="txtSFProRegular20Black90001"
                          >
                            15.5k
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtSFProRegular20Black900"
                          >
                            10.0k
                          </Text>
                        </div>
                      </div>
                    </List>
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtSFProRegular20Black900"
                    >
                      10.0k
                    </Text>
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtSFProRegular20Black900"
                    >
                      10.0k
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[2%] flex md:flex-col flex-row md:gap-5 items-end justify-start left-[1%] w-[81%]">
                <div className="flex flex-col md:gap-10 gap-[77px] items-end justify-start md:mt-0 my-[17px] w-[2%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start">
                    <Text
                      className="ml-1 md:ml-[0] text-black-900_01 text-right text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      1
                    </Text>
                    <Text
                      className="text-black-900_01 text-right text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      2
                    </Text>
                    <Text
                      className="text-black-900_01 text-right text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      3
                    </Text>
                    <Text
                      className="text-black-900_01 text-right text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      4
                    </Text>
                    <Text
                      className="text-black-900_01 text-right text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      5
                    </Text>
                    <Text
                      className="text-black-900_01 text-right text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      6
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] text-black-900_01 text-right text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      7
                    </Text>
                    <Text
                      className="text-black-900_01 text-right text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      8
                    </Text>
                    <Text
                      className="text-black-900_01 text-right text-xl"
                      size="txtSFProMedium20Black90001"
                    >
                      9
                    </Text>
                  </div>
                  <Text
                    className="text-black-900_01 text-right text-xl"
                    size="txtSFProMedium20Black90001"
                  >
                    10
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] w-[17%] md:w-full">
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543_One"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543_Two"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543_Three"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543_Four"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543_Five"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543_Six"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543_Seven"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543_Eight"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-[60px] md:h-auto object-cover rounded-[10px] w-[60px]"
                        src="images/img_rectangle66543.png"
                        alt="rectangle66543_Nine"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        NFT Fun Cate
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[74px] mb-4 md:ml-[0] ml-[137px] md:mt-0 mt-[817px] w-[70%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-row items-start justify-evenly w-[13%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="text-black-900_01 text-xl"
                        size="txtSFProRegular20Black90001"
                      >
                        1,932.55
                      </Text>
                    </div>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-3/4 md:w-full">
                      <Text
                        className="text-red-A700 text-xl"
                        size="txtSFProRegular20RedA700"
                      >
                        -70%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[107px] text-center text-green-800 text-xl"
                        size="txtSFProRegular20Green800"
                      >
                        +44.99%
                      </Text>
                      <div className="flex flex-row items-center justify-center md:ml-[0] ml-[125px] w-[12%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_4691461ethereumicon.svg"
                          alt="4691461ethereum_One"
                        />
                        <Text
                          className="ml-[5px] text-black-900_01 text-center text-xl"
                          size="txtSFProRegular20Black90001"
                        >
                          15.95
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[142px] text-black-900_01 text-center text-xl"
                        size="txtSFProRegular20Black90001"
                      >
                        15.5k
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-row items-start justify-evenly w-[13%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_4691461ethereumicon.svg"
                        alt="4691461ethereum"
                      />
                      <Text
                        className="text-black-900_01 text-xl"
                        size="txtSFProRegular20Black90001"
                      >
                        1,932.55
                      </Text>
                    </div>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-3/4 md:w-full">
                      <Text
                        className="text-red-A700 text-xl"
                        size="txtSFProRegular20RedA700"
                      >
                        -70%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[107px] text-center text-green-800 text-xl"
                        size="txtSFProRegular20Green800"
                      >
                        +44.99%
                      </Text>
                      <div className="flex flex-row items-center justify-center md:ml-[0] ml-[125px] w-[12%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_4691461ethereumicon.svg"
                          alt="4691461ethereum_One"
                        />
                        <Text
                          className="ml-[5px] text-black-900_01 text-center text-xl"
                          size="txtSFProRegular20Black90001"
                        >
                          15.95
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[142px] text-black-900_01 text-center text-xl"
                        size="txtSFProRegular20Black90001"
                      >
                        15.5k
                      </Text>
                    </div>
                  </div>
                </List>
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

export default RankingsPagePage;
