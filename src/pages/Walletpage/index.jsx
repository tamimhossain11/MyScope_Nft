import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const WalletpagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1530px] mb-[29px] mx-auto md:px-5 w-full">
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
                src="images/img_group1000009458_15.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start mt-[116px] w-[17%] md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
              <Text
                className="mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-right text-white-A700"
                size="txtSFProRegular38"
              >
                Pages
              </Text>
              <Radio
                value="Wallet"
                className="font-semibold mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                checked={false}
                name="wallet1"
                label="Wallet"
                id="Wallet"
              ></Radio>
            </div>
            <Line className="bg-gradient2  h-[5px] w-[62%]" />
          </div>
          <Text
            className="mt-[110px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
            size="txtSFProBold48"
          >
            Connect Your Wallet
          </Text>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[54px] w-full">
            <div className="md:h-[241px] h-[292px] relative w-full">
              <div className="absolute bg-deep_purple-A200 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[35px] sm:px-5 rounded-[15px] w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start mt-[45px]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                    size="txtSFProBold28"
                  >
                    Metamask
                  </Text>
                  <Text
                    className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                    size="txtSFProRegular18WhiteA700"
                  >
                    Start exploring blockchain applications in seconds. Trusted
                    by over 1 million users worldwide.
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[100px] inset-x-[0] mx-auto top-[0] w-[100px]"
                src="images/img_group1000009724.svg"
                alt="group1000009724"
              />
            </div>
            <div className="flex h-[292px] justify-end relative w-full">
              <div className="flex flex-col gap-[15px] h-full items-center justify-start mb-[35px] mt-auto mx-auto">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Coinbase
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  The easiest and most secure crypto wallet. ... No Coinbase
                  account required.
                </Text>
              </div>
              <Img
                className="absolute h-[292px] inset-[0] justify-center m-auto"
                src="images/img_group1000009731.svg"
                alt="group1000009731"
              />
            </div>
            <div className="flex h-[292px] justify-end relative w-full">
              <div className="flex flex-col gap-[15px] h-full items-center justify-start mb-[35px] mt-auto mx-auto">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Bitski
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  Bitski connects communities, creators and brands through
                  unique, ownable digital content.
                </Text>
              </div>
              <Img
                className="absolute h-[292px] inset-[0] justify-center m-auto"
                src="images/img_group1000009733.svg"
                alt="group1000009733"
              />
            </div>
            <div className="flex md:h-[291px] h-[292px] justify-end relative w-full">
              <div className="flex flex-col gap-[15px] h-full items-center justify-start mb-[35px] mt-auto mx-auto">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Fortmatic
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  Let users access your Ethereum app from anywhere. No more
                  browser extensions.
                </Text>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 w-full"
                style={{
                  backgroundImage: "url('images/img_group1000009729.svg')",
                }}
              >
                <Img
                  className="h-[51px] md:h-auto mb-48 object-cover rounded-[10px] w-[50px] sm:w-full"
                  src="images/img_images1_51x50.png"
                  alt="imagesOne"
                />
              </div>
            </div>
            <div className="flex h-[292px] justify-end relative w-full">
              <div className="flex flex-col gap-3.5 h-full items-center justify-start mb-[35px] mt-auto mx-auto">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Torus
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  Open source protocol for connecting decentralised applications
                  to mobile wallets.
                </Text>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 w-full"
                style={{
                  backgroundImage: "url('images/img_group1000009729.svg')",
                }}
              >
                <Img
                  className="h-[50px] md:h-auto mb-48 object-cover w-[50px]"
                  src="images/img_torusalternative.png"
                  alt="torusalternativ"
                />
              </div>
            </div>
            <div className="flex md:h-[291px] h-[292px] justify-end relative w-full">
              <div className="flex flex-col gap-3.5 h-full items-center justify-start mb-[35px] mt-auto mx-auto">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Wallet Connect
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  Open source protocol for connecting decentralised applications
                  to mobile wallets.
                </Text>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[30px] sm:px-5 w-full"
                style={{
                  backgroundImage: "url('images/img_group1000009729.svg')",
                }}
              >
                <Img
                  className="h-[39px] md:h-auto mb-48 object-cover w-[14%]"
                  src="images/img_maskgroup_17x26.png"
                  alt="walletconnectlo"
                />
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

export default WalletpagePage;
