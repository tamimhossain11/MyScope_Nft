import React from "react";

import { Button, Img, Input, Line, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HelpCenterPagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-end mx-auto p-[29px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1530px] mt-2.5 mx-auto md:px-5 w-full">
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
              className="md:ml-[0] ml-[100px] md:mt-0 mt-[37px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Home
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] md:mt-0 mt-[38px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Pages
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] md:mt-0 mt-[38px] text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Explore
            </Text>
            <div className="flex md:flex-1 flex-col gap-[11px] items-center justify-start md:ml-[0] ml-[45px] md:mt-0 mt-[37px] w-[7%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtSFProSemibold20"
              >
                Resources
              </Text>
              <Img
                className="h-[5px]"
                src="images/img_line75.svg"
                alt="lineSeventyFive"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[45px] md:mt-0 mt-9 text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              Create
            </Text>
            <Text
              className="md:ml-[0] ml-[45px] md:mt-0 mt-9 text-white-A700 text-xl"
              size="txtSFProRegular20"
            >
              NFT GAme
            </Text>
            <div className="flex md:flex-1 flex-row gap-5 items-center justify-between ml-16 md:ml-[0] md:mt-0 mt-[13px] w-[15%] md:w-full">
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
                src="images/img_group1000009458_32.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="md:h-[161px] h-[171px] md:ml-[0] ml-[557px] mt-3 relative w-[32%] sm:w-full">
            <div className="absolute bottom-[0] flex flex-col gap-[13px] items-center justify-start left-[0] w-[87%]">
              <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between w-full">
                <Text
                  className="mb-0.5 md:text-4xl sm:text-[34px] text-[38px] text-right text-white-A700"
                  size="txtSFProRegular38"
                >
                  Resources
                </Text>
                <Radio
                  value="HelpCenter"
                  className="font-bold font-sfprodisplay sm:mt-0 mt-0.5 md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                  inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                  checked={false}
                  name="helpcenter"
                  label="Help Center"
                  id="HelpCenter"
                ></Radio>
              </div>
              <Line className="bg-gradient2  h-[5px] w-[89%]" />
            </div>
            <div className="absolute bg-black-900 flex flex-col gap-6 justify-center p-4 right-[0] rounded-[10px] shadow-bs7 top-[0] w-[38%]">
              <Button
                className="cursor-pointer font-semibold min-w-[150px] mt-3.5 rounded-[5px] text-center text-xl"
                color="deep_purple_A200"
                size="sm"
                variant="fill"
              >
                Help Center
              </Button>
              <div className="flex flex-col items-start justify-start mb-[15px] md:ml-[0] ml-[19px] mr-[88px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtSFProMedium20WhiteA700"
                >
                  Blog
                </Text>
              </div>
            </div>
          </div>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[105px] w-full">
            <div className="bg-deep_purple-A200 flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start my-[22px]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Drops on MyScope
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  Drops on MyScope allow users to be the first to own an item,
                  the moment it’s minted.
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start my-[9px]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Part 1: Deploy a smart contract
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  <span className="text-white-A700 font-sfpro font-normal">
                    To deploy a contract for the first time, connect your wallet
                    to MyScope and navigate to your{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-white-A700 font-sfpro font-normal underline"
                  >
                    My Collections
                  </a>
                  <span className="text-white-A700 font-sfpro font-normal">
                    {" "}
                    page. Click Create a collection.
                  </span>
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start my-3.5">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Part 2: Prepare your drop schedule
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-[98%] sm:w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  After you’ve finished setting up your smart contract, click
                  the three-dot menu on your chosen collection and select Edit
                  collection.
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start my-[9px]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Part 3: Set your pre-reveal image
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  If you plan to have a delayed reveal for NFTs minted during
                  your drop, you can use the MyScope Drops tool to add a
                  pre-reveal image.
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start my-[9px]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Part 4: Set your drop earnings
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  MyScope fee for primary drops is 10% of the sale price for
                  each NFT, which is automatically configured as part of the
                  drop setup.
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[15px] w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start my-[9px]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                  size="txtSFProBold28"
                >
                  Part 5: Build your drop page
                </Text>
                <Text
                  className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                  size="txtSFProRegular18WhiteA700"
                >
                  Now that you’ve deployed your contract and set your mint
                  schedule and pricing, it’s time to create your landing page
                  and bring your drop to life!
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700_19 flex flex-col items-center justify-end md:ml-[0] ml-[520px] mt-[30px] p-[26px] sm:px-5 rounded-[15px] w-[33%] md:w-full">
            <div className="flex flex-col gap-[7px] items-center justify-start mt-0.5">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                size="txtSFProBold28"
              >
                Part 6: Publish your drop
              </Text>
              <Text
                className="leading-[26.00px] text-center text-lg text-white-A700 w-full"
                size="txtSFProRegular18WhiteA700"
              >
                Now that you’ve deployed your contract, set your mint schedule,
                and customized your drop page, you’re ready to publish it on
                MyScope. Congratulations!
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[21px] items-start justify-start mt-[118px] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
              size="txtSFProBold48"
            >
              Drop on MyScope
            </Text>
            <Text
              className="leading-[36.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
              size="txtSFProRegular22WhiteA700"
            >
              Drops on MyScope allow users to be the first to own an item, the
              moment it’s minted. MyScope supports artists and creators by
              providing a platform for NFT drops to happen directly on MyScope.
            </Text>
          </div>
          <Text
            className="mt-[26px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
            size="txtSFProRegular22WhiteA700"
          >
            Each drop has a unique landing page where you can see the following
            information provided by the creator:
          </Text>
          <div className="flex flex-row gap-[15px] items-start justify-start mt-[18px] w-[11%] md:w-full">
            <div className="bg-deep_purple-A200 h-5 mb-2 mt-[3px] rounded-[50%] w-5"></div>
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
              size="txtSFProRegular26"
            >
              Drop name
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start mt-[5px] w-[13%] md:w-full">
            <div className="bg-deep_purple-A200 h-5 my-[5px] rounded-[50%] w-5"></div>
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
              size="txtSFProRegular26"
            >
              Creator name
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start mt-2 w-[27%] md:w-full">
            <div className="bg-deep_purple-A200 h-5 sm:mt-0 my-[5px] rounded-[50%] w-5"></div>
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
              size="txtSFProRegular26"
            >
              Links to the creator’s social media
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start mt-2 w-[16%] md:w-full">
            <div className="bg-deep_purple-A200 h-5 my-[5px] rounded-[50%] w-5"></div>
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
              size="txtSFProRegular26"
            >
              The mint schedule
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-start justify-start mt-3.5 w-[23%] md:w-full">
            <div className="bg-deep_purple-A200 h-5 mb-[46px] mt-1.5 rounded-[50%] w-5"></div>
            <Text
              className="leading-[36.00px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-[90%] sm:w-full"
              size="txtSFProRegular26"
            >
              A sample gallery of the NFTs that will be minted
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-start justify-start mt-4 w-[22%] md:w-full">
            <div className="bg-deep_purple-A200 h-5 mb-2 mt-[3px] rounded-[50%] w-5"></div>
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
              size="txtSFProRegular26"
            >
              Roadmap and team section
            </Text>
          </div>
          <Img
            className="h-[1148px] sm:h-auto mt-[21px] object-cover rounded-[15px] w-full"
            src="images/img_image38.png"
            alt="imageThirtyEight"
          />
          <Text
            className="mt-[37px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
            size="txtSFProRegular22WhiteA700"
          >
            <span className="text-white-A700 font-sfpro text-left font-normal">
              If you’d like to participate in a drop, you can learn more in our{" "}
            </span>
            <a
              href="javascript:"
              className="text-white-A700 font-sfpro text-left font-normal underline"
            >
              Help Guide
            </a>
          </Text>
          <Text
            className="leading-[36.00px] mt-[21px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
            size="txtSFProRegular22WhiteA700"
          >
            If you’re a creator and you’d like to drop a collection on MyScope,
            you can use our self-serve tools to set up the details of your drop
            in advance and publish it when you’re ready. 
          </Text>
          <Text
            className="mt-[26px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
            size="txtSFProRegular22WhiteA700"
          >
            At this time, using our self-serve tools to create a drop doesn’t
            guarantee that the drop will be added to MyScope drops calendar.
          </Text>
          <Text
            className="leading-[36.00px] mt-[22px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
            size="txtSFProRegular22WhiteA700"
          >
            While most steps of the drop process can be handled directly on
            MyScope, from deploying a new smart contract to customizing your
            drop landing page, you’ll need to upload your metadata separately.
            You can follow the instructions in our
          </Text>
          <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-center md:ml-[0] ml-[550px] mt-[60px] w-[29%] md:w-full">
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
          <div className="flex flex-col items-center justify-start mt-[119px] w-full">
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

export default HelpCenterPagePage;
