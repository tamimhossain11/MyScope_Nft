import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AllNFTsPagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-end justify-start mx-auto pl-10 sm:pl-5 py-10 w-full">
        <div className="flex flex-col items-start justify-start mb-[78px] md:px-5 w-[92%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[89%] md:w-full">
            <Img
              className="h-[85px] sm:h-auto object-cover w-[8%] md:w-full"
              src="images/img_myscpelogo1.png"
              alt="myscpelogoOne"
            />
            <Input
              name="group1000010222"
              placeholder="Search"
              value={group1000010222value}
              onChange={(e) => setGroup1000010222value(e)}
              className="!placeholder:text-white-A700 !text-white-A700 p-0 text-left text-lg w-full"
              wrapClassName="flex md:ml-[0] ml-[49px] md:mt-0 my-3 w-[21%] md:w-full"
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
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[100px] w-[44%] md:w-full">
              <div className="flex flex-col gap-[11px] justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-[45px] items-start justify-between w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProRegular20"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProRegular20"
                  >
                    Pages
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProSemibold20"
                  >
                    Explore
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProRegular20"
                  >
                    Resources
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProRegular20"
                  >
                    Create
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProRegular20"
                  >
                    NFT GAme
                  </Text>
                </div>
                <Img
                  className="h-[5px] md:ml-[0] ml-[229px]"
                  src="images/img_line75.svg"
                  alt="lineSeventyFive"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5 items-center justify-between md:ml-[0] ml-[65px] w-[15%] md:w-full">
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
                src="images/img_group1000009458_19.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="h-[342px] sm:h-[604px] md:h-[856px] mt-1.5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[115px] justify-start w-full">
                <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[612px] w-[18%] md:w-full">
                  <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                    <Text
                      className="mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-right text-white-A700"
                      size="txtSFProRegular38"
                    >
                      Explore
                    </Text>
                    <Radio
                      value="AllNFTs"
                      className="font-semibold mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                      inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                      checked={false}
                      name="allnfts"
                      label="All NFTs"
                      id="AllNFTs"
                    ></Radio>
                  </div>
                  <Line className="bg-gradient2  h-[5px] w-[72%]" />
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-bold min-w-[60px] text-center text-xl"
                    shape="round"
                    color="deep_purple_A200"
                    size="md"
                    variant="fill"
                  >
                    All
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[85px]"
                    leftIcon={
                      <Img
                        className="h-5 mr-[5px] my-0.5"
                        src="images/img_mdiart.svg"
                        alt="mdi:art"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold text-left text-xl">Art</div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[169px]"
                    leftIcon={
                      <Img
                        className="h-5 mt-0.5 mb-px mr-[5px]"
                        src="images/img_materialsymbolsdomainaddrounded.svg"
                        alt="material-symbols:domain-add-rounded"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold text-left text-xl">
                      Collectibles
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[128px]"
                    leftIcon={
                      <Img
                        className="h-5 mt-0.5 mb-px mr-[5px]"
                        src="images/img_materialsymbolsastrophotographyauto.svg"
                        alt="material-symbols:astrophotography-auto"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold text-left text-xl">Domain</div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[112px]"
                    leftIcon={
                      <Img
                        className="h-5 mt-0.5 mb-px mr-[5px]"
                        src="images/img_materialsymbolsmusicnoterounded.svg"
                        alt="material-symbols:music-note-rounded"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold text-left text-xl">Music</div>
                  </Button>
                  <List
                    className="sm:flex-col flex-row gap-5 grid grid-cols-2"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-col items-center justify-end sm:ml-[0] p-[11px] rounded-[10px] w-full">
                      <div className="flex flex-row items-start justify-start mt-[3px] w-[97%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_mdiphotography.svg"
                          alt="mdiphotography"
                        />
                        <Text
                          className="ml-[5px] text-black-900 text-xl"
                          size="txtSFProBold20"
                        >
                          Photography
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] p-[11px] rounded-[10px] w-full">
                      <div className="flex flex-row items-start justify-start w-[98%] md:w-full">
                        <Img
                          className="h-5 mt-0.5 w-5"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Text
                          className="ml-[5px] text-black-900 text-xl"
                          size="txtSFProBold20"
                        >
                          Virtual World
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-[11px] rounded-[10px]">
                    <div className="flex flex-row items-start justify-start mt-[3px] w-[93%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_maskgroup_20x20.png"
                        alt="maskgroup"
                      />
                      <Text
                        className="ml-[5px] text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        Sports{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-[11px] rounded-[10px]">
                    <div className="flex flex-row items-start justify-start mt-0.5 w-[96%] md:w-full">
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_maskgroup_1.png"
                        alt="maskgroup_One"
                      />
                      <Text
                        className="ml-[5px] text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        Trending Cards
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[115px]"
                    leftIcon={
                      <Img
                        className="h-5 mt-px mb-[3px] mr-[5px]"
                        src="images/img_materialsymbolsaccountbalancewallet.svg"
                        alt="material-symbols:account-balance-wallet"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold text-left text-xl">Utility</div>
                  </Button>
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-3 rounded-[10px]">
                    <div className="flex flex-row items-start justify-start w-[95%] md:w-full">
                      <Img
                        className="h-5 md:h-auto mt-0.5 object-cover w-5"
                        src="images/img_maskgroup_2.png"
                        alt="maskgroup_Two"
                      />
                      <Text
                        className="ml-[5px] text-black-900 text-xl"
                        size="txtSFProBold20"
                      >
                        Fashion{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Img
                      className="h-[50px] md:h-auto object-cover rounded-bl-[7px] rounded-br-[7px] w-full"
                      src="images/img_rectangle66522_50x14.png"
                      alt="rectangle66522"
                    />
                  </div>
                </div>
              </div>
            </div>
            <List
              className="absolute bg-black-900 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 inset-y-[0] my-auto p-4 right-[32%] rounded-[10px] shadow-bs7 w-1/4"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[23px] justify-start w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[137px] mr-[33px] rounded-[5px]"
                  leftIcon={
                    <Img
                      className="h-5 mt-0.5 mb-px mr-2.5"
                      src="images/img_epmenu.svg"
                      alt="ep:menu"
                    />
                  }
                  color="deep_purple_A200"
                  size="sm"
                  variant="fill"
                >
                  <div className="font-semibold text-center text-xl">
                    All NFTs
                  </div>
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start ml-3.5 md:ml-[0] w-[92%] md:w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[42%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_mdiart_white_a700.svg"
                      alt="mdiart"
                    />
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtSFProMedium20WhiteA700"
                    >
                      Art
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[94%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_materialsymbol_20x20.svg"
                      alt="materialsymbol"
                    />
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtSFProMedium20WhiteA700"
                    >
                      Collectibles
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[69%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtSFProMedium20WhiteA700"
                    >
                      Domain
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[59%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_materialsymbol_1.svg"
                      alt="materialsymbol_One"
                    />
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtSFProMedium20WhiteA700"
                    >
                      Music
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_mdiphotography_white_a700.svg"
                      alt="mdiphotography"
                    />
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtSFProMedium20WhiteA700"
                    >
                      Photography
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[94%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_group_white_a700.svg"
                    alt="group"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Virtual World
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[22px] w-[58%] md:w-full">
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_maskgroup_20x20.png"
                    alt="maskgroup"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Sports
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-5 w-full">
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_maskgroup_1.png"
                    alt="maskgroup_One"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Trending Card
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-5 w-[54%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_materialsymbol_white_a700_1.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Utility
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[19px] w-[64%] md:w-full">
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_maskgroup_2.png"
                    alt="maskgroup_Two"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Fashion
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[21px] w-[79%] md:w-full">
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_maskgroup_3.png"
                    alt="maskgroup_Three"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtSFProMedium20WhiteA700"
                  >
                    Document
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[60px] w-[89%] md:w-full">
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
              color="white_A700_19"
              size="lg"
              variant="fill"
            >
              <div className="font-medium md:text-[26px] sm:text-2xl text-[28px] text-center">
                Filter
              </div>
            </Button>
            <div className="flex flex-row gap-2.5 items-center justify-center md:ml-[0] ml-[30px] md:mt-0 mt-[18px] w-[6%] md:w-full">
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
              className="md:ml-[0] ml-[30px] md:mt-0 mt-[19px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
              size="txtSFProMedium28WhiteA700"
            >
              16,780 results
            </Text>
            <div className="bg-white-A700 flex flex-col items-start justify-end md:ml-[0] ml-[30px] p-[15px] rounded-[10px] w-[34%] md:w-full">
              <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[5px]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtSFProMedium28"
                >
                  Hooded neck Raglan
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_19 flex flex-col items-center justify-end ml-5 md:ml-[0] p-[15px] rounded-[10px] w-1/4 md:w-full">
              <div className="flex flex-row items-start justify-between mt-[5px] w-[98%] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProMedium28WhiteA700"
                >
                  Price Low to High
                </Text>
                <Img
                  className="h-7 w-7"
                  src="images/img_materialsymbol_white_a700_30x30.svg"
                  alt="materialsymbol_One"
                />
              </div>
            </div>
            <Img
              className="h-[70px] ml-5 md:ml-[0] w-[70px]"
              src="images/img_share.svg"
              alt="share"
            />
          </div>
          <div className="flex flex-col items-center justify-start mt-[60px] w-[89%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="h-[676px] relative w-full">
                  <Img
                    className="h-[676px] m-auto object-cover rounded-bl-[10px] rounded-br-[10px] rounded-tl-[245px] rounded-tr-[245px] w-full"
                    src="images/img_rectangle66483_9.png"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
                          className="mt-1.5 text-gray-600 text-lg"
                          size="txtSFProRegular18Gray600"
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
          <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start md:ml-[0] ml-[550px] mt-[162px] w-1/4 md:w-full">
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
          <div className="flex flex-col items-center justify-start mt-[120px] w-[89%] md:w-full">
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

export default AllNFTsPagePage;
