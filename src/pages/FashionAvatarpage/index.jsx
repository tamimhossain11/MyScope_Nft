import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const FashionAvatarpagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1530px] mb-3 mx-auto md:px-5 w-full">
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
                src="images/img_group1000009458.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[18px] items-center justify-start mt-[130px]">
            <Text
              className="md:text-5xl text-6xl text-center text-deep_purple-A200"
              size="txtSFProSemibold60"
            >
              Nike
            </Text>
            <Text
              className="md:text-5xl text-6xl text-center text-white-A700"
              size="txtSFProMedium60"
            >
              Customize Fashion Avatar
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-[114px] w-4/5 md:w-full">
            <div className="h-[1154px] md:h-[856px] relative w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-deep_purple-A200 blur-[800.00px] bottom-[3%] h-[698px] inset-x-[0] mx-auto w-full"></div>
              <div className="absolute h-[1154px] inset-[0] justify-center m-auto w-[99%] md:w-full">
                <Img
                  className="h-[1026px] mb-[-170.83px] mx-auto object-cover w-[51%] z-[1]"
                  src="images/img_cartooncharact.png"
                  alt="cartooncharact"
                />
                <div className="bg-white-A700_33 h-[298px] mt-auto mx-auto rounded-[596px] w-full"></div>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col font-sfprodisplay gap-[118px] items-center mt-[114px] w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-[55px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtSFProDisplayBold48"
              >
                Hair
              </Text>
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                <Img
                  className="flex-1 h-[284px] md:h-auto object-cover w-full"
                  src="images/img_maskgroup_284x282.png"
                  alt="maskgroup"
                />
                <div className="bg-light_blue-100 md:h-[227px] h-[284px] p-3 relative rounded-[15px] w-full">
                  <Img
                    className="absolute h-[227px] inset-[0] justify-center m-auto object-cover rounded-[15px] w-4/5"
                    src="images/img_image41.png"
                    alt="imageFortyOne"
                  />
                  <Img
                    className="absolute bottom-[4%] h-[37px] inset-x-[0] mx-auto rounded-[15px]"
                    src="images/img_vector12.svg"
                    alt="vectorTwelve"
                  />
                </div>
                <div className="bg-gradient3  flex flex-1 flex-col items-center justify-start p-[27px] sm:px-5 rounded-[15px] w-full">
                  <Img
                    className="h-[227px] md:h-auto object-cover rounded-[15px] w-[98%]"
                    src="images/img_image42.png"
                    alt="imageFortyTwo"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_image43.png"
                    alt="imageFortyThree"
                  />
                </div>
                <div className="bg-light_blue-100 md:h-[227px] h-[284px] p-3 relative rounded-[15px] w-full">
                  <Img
                    className="absolute h-[227px] inset-[0] justify-center m-auto object-cover rounded-[15px] w-4/5"
                    src="images/img_image41.png"
                    alt="imageFortyOne_One"
                  />
                  <Img
                    className="absolute bottom-[4%] h-[37px] inset-x-[0] mx-auto rounded-[15px]"
                    src="images/img_vector12.svg"
                    alt="vectorTwelve_One"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[51px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtSFProDisplayBold48"
              >
                Cap{" "}
              </Text>
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483.png"
                    alt="rectangle66483"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_284x282.png"
                    alt="rectangle66483_One"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_1.png"
                    alt="rectangle66483_Two"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_image43_284x282.png"
                    alt="imageFortyThree"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_284x282.png"
                    alt="rectangle66483_Three"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[54px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtSFProDisplayBold48"
              >
                Jackets
              </Text>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[282px] md:w-full">
                  <Img
                    className="h-[283px] sm:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[282px] md:w-full"
                    src="images/img_image44.png"
                    alt="imageFortyFour"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[19%] md:w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_2.png"
                    alt="rectangle66483"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[19%] md:w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_3.png"
                    alt="rectangle66483_One"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[19%] md:w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_image43_1.png"
                    alt="imageFortyThree"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[19%] md:w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_2.png"
                    alt="rectangle66483_Two"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[54px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtSFProDisplayBold48"
              >
                Pants{" "}
              </Text>
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_4.png"
                    alt="rectangle66483"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_5.png"
                    alt="rectangle66483_One"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_6.png"
                    alt="rectangle66483_Two"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_image43_2.png"
                    alt="imageFortyThree"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_5.png"
                    alt="rectangle66483_Three"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[54px] items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtSFProDisplayBold48"
              >
                Shoes{" "}
              </Text>
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_7.png"
                    alt="rectangle66483"
                  />
                </div>
                <Img
                  className="flex-1 h-[284px] md:h-auto object-cover rounded-[15px] w-full"
                  src="images/img_secondfluffyhar.png"
                  alt="secondfluffyhar"
                />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_8.png"
                    alt="rectangle66483_One"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_image43_3.png"
                    alt="imageFortyThree"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle66483_7.png"
                    alt="rectangle66483_Two"
                  />
                </div>
              </div>
            </div>
          </List>
          <div className="flex sm:flex-col flex-row font-sfprodisplay gap-[30px] items-center justify-center mt-20 w-[29%] md:w-full">
            <Button
              className="cursor-pointer font-medium min-w-[200px] sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              Add to Cart
            </Button>
            <Button
              className="cursor-pointer font-medium min-w-[200px] sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              Buy Now
            </Button>
          </div>
          <div className="flex flex-col font-sfpro items-center justify-start mt-[120px] w-full">
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

export default FashionAvatarpagePage;
