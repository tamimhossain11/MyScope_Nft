import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  PagerIndicator,
  Radio,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const BlogPagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-end mx-auto p-[29px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[117px] items-center justify-start max-w-[1530px] mt-2.5 mx-auto md:px-5 w-full">
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
                  size="txtSFProSemibold20"
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
                    src="images/img_group1000009458_33.svg"
                    alt="group1000009458"
                  />
                </div>
              </div>
              <Img
                className="h-[5px] md:ml-[0] ml-[43px]"
                src="images/img_line75.svg"
                alt="lineSeventyFive"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[115px] items-center justify-start w-full">
            <div className="flex flex-col gap-3 items-center justify-start w-[19%] md:w-full">
              <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                <Text
                  className="mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-right text-white-A700"
                  size="txtSFProRegular38"
                >
                  Resources
                </Text>
                <Radio
                  value="Blog"
                  className="font-bold mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                  inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                  checked={false}
                  name="blog"
                  label="Blog"
                  id="Blog"
                ></Radio>
              </div>
              <Line className="bg-gradient2  h-[5px] w-[59%]" />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                <div className="bg-white-A700_19 flex md:flex-col flex-row md:gap-10 gap-[70px] items-center justify-start md:pr-10 sm:pr-5 pr-[165px] rounded-[15px] w-full">
                  <Img
                    className="md:flex-1 h-[650px] sm:h-auto object-cover rounded-[15px] w-[54%] md:w-full"
                    src="images/img_rectangle66520_650x735.png"
                    alt="rectangle66520"
                  />
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[42%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-[34%]">
                        <div className="border border-deep_purple-A200 border-solid flex flex-col h-[60px] items-center justify-start p-[3px] rounded-[50%] w-[60px]">
                          <Img
                            className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                            src="images/img_ellipse141_52x52.png"
                            alt="ellipse141_One"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtSFProBold20WhiteA700"
                          >
                            Talan Press
                          </Text>
                          <Text
                            className="mt-0.5 text-sm text-white-A700"
                            size="txtSFProMedium14"
                          >
                            @talanpress
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-[30%]">
                        <Img
                          className="h-[22px] w-[22px]"
                          src="images/img_materialsymbol_white_a700_22x22.svg"
                          alt="materialsymbol_One"
                        />
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSFProSemibold20"
                        >
                          March 8, 2023
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[40.00px] mt-[30px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-[97%] sm:w-full"
                      size="txtSFProBold28"
                    >
                      International Women’s Day 2023: Power of Women x Man
                      City’s ‘I am EMPOWERED’ Collection Dropping Exclusively on
                      MyScope
                    </Text>
                    <Text
                      className="leading-[36.00px] mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                      size="txtSFProRegular22WhiteA700"
                    >
                      <>
                        Power of Women x Man City&#39;s “I am EMPOWERED”
                        collection is a tribute to the passion and diversity of
                        women in football.
                      </>
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-10 w-[68%] md:w-full">
                      <Button
                        className="cursor-pointer font-bold min-w-[180px] text-center text-xl"
                        shape="round"
                        color="deep_purple_A200"
                        size="md"
                        variant="fill"
                      >
                        View Post
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[180px] text-center text-xl"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        Developers
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-10 items-center justify-center w-[22%] md:w-full">
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
              <div className="flex flex-col gap-[51px] items-center justify-start mt-[118px] w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtSFProSemibold48"
                >
                  Categories
                </Text>
                <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer flex-1 font-bold min-w-[360px] rounded-[15px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
                    color="deep_purple_A200"
                    size="md"
                    variant="fill"
                  >
                    Product
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 font-bold min-w-[360px] rounded-[15px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Company
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 font-bold min-w-[360px] rounded-[15px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Community
                  </Button>
                  <Button
                    className="cursor-pointer flex-1 font-bold min-w-[360px] rounded-[15px] sm:text-3xl md:text-[32px] text-[34px] text-center w-full"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Creator
                  </Button>
                </div>
              </div>
              <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[120px] w-full">
                <div className="bg-deep_purple-A200 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[15px] hover:w-full w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover rounded-[15px] w-full"
                    src="images/img_rectangle66498_1.png"
                    alt="rectangle66520"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[30px] w-full">
                    <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between w-[42%] sm:w-full">
                      <div className="border border-deep_purple-A200 border-solid flex flex-col h-[60px] items-center justify-start p-[3px] rounded-[50%] w-[60px]">
                        <Img
                          className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                          src="images/img_ellipse141_52x52.png"
                          alt="ellipse141"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSFProBold20WhiteA700"
                        >
                          Talan Press
                        </Text>
                        <Text
                          className="mt-0.5 text-sm text-white-A700"
                          size="txtSFProMedium14"
                        >
                          @talanpress
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[38%] sm:w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_materialsymbol_white_a700_22x22.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtSFProSemibold20"
                      >
                        March 8, 2023
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[40.00px] mt-5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSFProBold28"
                  >
                    International Women’s Day 2023: Power of Women x Man City’s
                    ‘I am EMPOWERED’ Collection Dropping Exclusively on MyScope
                  </Text>
                  <Text
                    className="leading-[36.00px] mb-2.5 mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    <>
                      Power of Women x Man City&#39;s “I am EMPOWERED”
                      collection is a tribute to the passion and diversity of
                      women in football.
                    </>
                  </Text>
                </div>
                <div className="bg-deep_purple-A200 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[15px] hover:w-full w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover rounded-[15px] w-full"
                    src="images/img_rectangle66496_4.png"
                    alt="rectangle66520"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[30px] w-full">
                    <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between w-[42%] sm:w-full">
                      <div className="border border-deep_purple-A200 border-solid flex flex-col h-[60px] items-center justify-start p-[3px] rounded-[50%] w-[60px]">
                        <Img
                          className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                          src="images/img_ellipse141_52x52.png"
                          alt="ellipse141"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSFProBold20WhiteA700"
                        >
                          Talan Press
                        </Text>
                        <Text
                          className="mt-0.5 text-sm text-white-A700"
                          size="txtSFProMedium14"
                        >
                          @talanpress
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[38%] sm:w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_materialsymbol_white_a700_22x22.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtSFProSemibold20"
                      >
                        March 8, 2023
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[40.00px] mt-5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSFProBold28"
                  >
                    International Women’s Day 2023: Power of Women x Man City’s
                    ‘I am EMPOWERED’ Collection Dropping Exclusively on MyScope
                  </Text>
                  <Text
                    className="leading-[36.00px] mb-2.5 mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    <>
                      Power of Women x Man City&#39;s “I am EMPOWERED”
                      collection is a tribute to the passion and diversity of
                      women in football.
                    </>
                  </Text>
                </div>
                <div className="bg-deep_purple-A200 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[15px] hover:w-full w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover rounded-[15px] w-full"
                    src="images/img_rectangle66498_120x120.png"
                    alt="rectangle66520"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[30px] w-full">
                    <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between w-[42%] sm:w-full">
                      <div className="border border-deep_purple-A200 border-solid flex flex-col h-[60px] items-center justify-start p-[3px] rounded-[50%] w-[60px]">
                        <Img
                          className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                          src="images/img_ellipse141_52x52.png"
                          alt="ellipse141"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSFProBold20WhiteA700"
                        >
                          Talan Press
                        </Text>
                        <Text
                          className="mt-0.5 text-sm text-white-A700"
                          size="txtSFProMedium14"
                        >
                          @talanpress
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[38%] sm:w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_materialsymbol_white_a700_22x22.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtSFProSemibold20"
                      >
                        March 8, 2023
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[40.00px] mt-5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSFProBold28"
                  >
                    International Women’s Day 2023: Power of Women x Man City’s
                    ‘I am EMPOWERED’ Collection Dropping Exclusively on MyScope
                  </Text>
                  <Text
                    className="leading-[36.00px] mb-2.5 mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    <>
                      Power of Women x Man City&#39;s “I am EMPOWERED”
                      collection is a tribute to the passion and diversity of
                      women in football.
                    </>
                  </Text>
                </div>
                <div className="bg-deep_purple-A200 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[15px] hover:w-full w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover rounded-[15px] w-full"
                    src="images/img_rectangle66498.png"
                    alt="rectangle66520"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[30px] w-full">
                    <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between w-[42%] sm:w-full">
                      <div className="border border-deep_purple-A200 border-solid flex flex-col h-[60px] items-center justify-start p-[3px] rounded-[50%] w-[60px]">
                        <Img
                          className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                          src="images/img_ellipse141_52x52.png"
                          alt="ellipse141"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSFProBold20WhiteA700"
                        >
                          Talan Press
                        </Text>
                        <Text
                          className="mt-0.5 text-sm text-white-A700"
                          size="txtSFProMedium14"
                        >
                          @talanpress
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[38%] sm:w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_materialsymbol_white_a700_22x22.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtSFProSemibold20"
                      >
                        March 8, 2023
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[40.00px] mt-5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSFProBold28"
                  >
                    International Women’s Day 2023: Power of Women x Man City’s
                    ‘I am EMPOWERED’ Collection Dropping Exclusively on MyScope
                  </Text>
                  <Text
                    className="leading-[36.00px] mb-2.5 mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    <>
                      Power of Women x Man City&#39;s “I am EMPOWERED”
                      collection is a tribute to the passion and diversity of
                      women in football.
                    </>
                  </Text>
                </div>
                <div className="bg-deep_purple-A200 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[15px] hover:w-full w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover rounded-[15px] w-full"
                    src="images/img_rectangle66496_2.png"
                    alt="rectangle66520"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[30px] w-full">
                    <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between w-[42%] sm:w-full">
                      <div className="border border-deep_purple-A200 border-solid flex flex-col h-[60px] items-center justify-start p-[3px] rounded-[50%] w-[60px]">
                        <Img
                          className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                          src="images/img_ellipse141_52x52.png"
                          alt="ellipse141"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSFProBold20WhiteA700"
                        >
                          Talan Press
                        </Text>
                        <Text
                          className="mt-0.5 text-sm text-white-A700"
                          size="txtSFProMedium14"
                        >
                          @talanpress
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[38%] sm:w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_materialsymbol_white_a700_22x22.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtSFProSemibold20"
                      >
                        March 8, 2023
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[40.00px] mt-5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSFProBold28"
                  >
                    International Women’s Day 2023: Power of Women x Man City’s
                    ‘I am EMPOWERED’ Collection Dropping Exclusively on MyScope
                  </Text>
                  <Text
                    className="leading-[36.00px] mb-2.5 mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    <>
                      Power of Women x Man City&#39;s “I am EMPOWERED”
                      collection is a tribute to the passion and diversity of
                      women in football.
                    </>
                  </Text>
                </div>
                <div className="bg-deep_purple-A200 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[15px] hover:w-full w-full">
                  <Img
                    className="h-[300px] md:h-auto object-cover rounded-[15px] w-full"
                    src="images/img_rectangle66496_1.png"
                    alt="rectangle66520"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[30px] w-full">
                    <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between w-[42%] sm:w-full">
                      <div className="border border-deep_purple-A200 border-solid flex flex-col h-[60px] items-center justify-start p-[3px] rounded-[50%] w-[60px]">
                        <Img
                          className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                          src="images/img_ellipse141_52x52.png"
                          alt="ellipse141"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSFProBold20WhiteA700"
                        >
                          Talan Press
                        </Text>
                        <Text
                          className="mt-0.5 text-sm text-white-A700"
                          size="txtSFProMedium14"
                        >
                          @talanpress
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[38%] sm:w-full">
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_materialsymbol_white_a700_22x22.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtSFProSemibold20"
                      >
                        March 8, 2023
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[40.00px] mt-5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtSFProBold28"
                  >
                    International Women’s Day 2023: Power of Women x Man City’s
                    ‘I am EMPOWERED’ Collection Dropping Exclusively on MyScope
                  </Text>
                  <Text
                    className="leading-[36.00px] mb-2.5 mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    <>
                      Power of Women x Man City&#39;s “I am EMPOWERED”
                      collection is a tribute to the passion and diversity of
                      women in football.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-center mt-[60px] w-[29%] md:w-full">
                <Button
                  className="cursor-pointer font-bold min-w-[200px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  Preview
                </Button>
                <Button
                  className="cursor-pointer font-bold min-w-[200px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                  shape="round"
                  color="deep_purple_A200"
                  size="lg"
                  variant="fill"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
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

export default BlogPagePage;
