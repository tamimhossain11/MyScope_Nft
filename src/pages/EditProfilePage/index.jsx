import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  Text,
  TextArea,
} from "components";

import { CloseSVG } from "../../assets/images";

const EditProfilePagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-end mx-auto p-[31px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1535px] mt-2 mx-auto md:px-5 w-full">
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
                src="images/img_group1000009458_6.svg"
                alt="group1000009458"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-start md:ml-[0] ml-[605px] mt-[116px] w-1/5 md:w-full">
            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
              <Text
                className="mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                size="txtSFProRegular38"
              >
                Page
              </Text>
              <Radio
                value="EditProfile"
                className="font-semibold mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                checked={false}
                name="editprofile"
                label="Edit Profile"
                id="EditProfile"
              ></Radio>
            </div>
            <Line className="bg-gradient2  h-[5px] md:ml-[0] ml-[60px] w-[67%]" />
          </div>
          <Text
            className="mt-[103px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
            size="txtSFProSemibold32WhiteA700"
          >
            Update Your Cover Image
          </Text>
          <div className="h-[450px] md:h-[474px] mt-6 relative w-full">
            <Img
              className="h-[450px] m-auto object-cover rounded-[15px] w-full"
              src="images/img_rectangle66502.png"
              alt="rectangle66502"
            />
            <Button
              className="absolute bottom-[7%] cursor-pointer font-bold min-w-[320px] right-[2%] sm:text-2xl md:text-[26px] text-[28px] text-center"
              shape="round"
              color="deep_purple_A200"
              size="lg"
              variant="fill"
            >
              Change Cover Image
            </Button>
          </div>
          <div className="flex md:flex-col flex-row gap-10 items-center justify-start mt-[60px] w-[58%] md:w-full">
            <Img
              className="h-[350px] md:h-auto object-cover rounded-[15px] w-[350px]"
              src="images/img_rectangle66498_3.png"
              alt="rectangle66518"
            />
            <div className="flex flex-col items-start justify-start w-[57%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtSFProSemibold32WhiteA700"
              >
                Update Your Profile Image
              </Text>
              <Text
                className="leading-[36.00px] mt-3.5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                size="txtRubikRomanRegular22"
              >
                We Recommend An Image Of At Least 300x300. Gifs Work Too. Max
                5mb.
              </Text>
              <Button
                className="cursor-pointer font-bold font-sfpro min-w-[320px] mt-[30px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                shape="round"
                color="deep_purple_A200"
                size="lg"
                variant="fill"
              >
                Change Profile Image
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start mt-[57px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
              size="txtSFProSemibold28"
            >
              <span className="text-white-A700 font-sfpro text-left font-semibold">
                Username
              </span>
              <span className="text-deep_purple-A200 font-sfpro text-left font-semibold">
                *
              </span>
            </Text>
            <Input
              name="group1000009489"
              placeholder="Type Your Name....."
              className="!placeholder:text-white-A700 !text-white-A700 md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
              wrapClassName="rounded-[10px] w-full"
              type="text"
              size="md"
            ></Input>
          </div>
          <div className="flex flex-col gap-[17px] items-start justify-start mt-[27px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
              size="txtSFProSemibold28"
            >
              <span className="text-white-A700 font-sfpro text-left font-semibold">
                Email Address
              </span>
              <span className="text-deep_purple-A200 font-sfpro text-left font-semibold">
                *
              </span>
            </Text>
            <Input
              name="email"
              placeholder="3earth@gmail.com"
              className="!placeholder:text-white-A700 !text-white-A700 md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
              wrapClassName="rounded-[10px] w-full"
              type="email"
              size="md"
            ></Input>
          </div>
          <div className="flex flex-col gap-[17px] items-start justify-start mt-[27px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
              size="txtSFProSemibold28"
            >
              <span className="text-white-A700 font-sfpro text-left font-semibold">
                Email Address
              </span>
              <span className="text-deep_purple-A200 font-sfpro text-left font-semibold">
                *
              </span>
            </Text>
            <Input
              name="group1000009489_One"
              placeholder="http://i3-earth.com/"
              className="!placeholder:text-white-A700 !text-white-A700 md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
              wrapClassName="rounded-[10px] w-full"
              size="md"
            ></Input>
          </div>
          <div className="flex flex-col gap-3.5 items-start justify-start mt-[29px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
              size="txtSFProSemibold28"
            >
              Description
            </Text>
            <TextArea
              className="bg-white-A700_19 border-0 pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[29px] rounded-[15px] text-[22px] text-left sm:text-lg placeholder:text-white-A700 text-white-A700 md:text-xl w-full"
              name="group1000009489_Two"
              placeholder="Provide A Detailed Description Of Your Item."
              name="group1000009489_Two"
              placeholder="Provide A Detailed Description Of Your Item."
            ></TextArea>
          </div>
          <Text
            className="mt-[57px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
            size="txtSFProSemibold28"
          >
            <span className="text-white-A700 font-sfpro text-left font-semibold">
              Social Links
            </span>
            <span className="text-deep_purple-A200 font-sfpro text-left font-semibold">
              *
            </span>
          </Text>
          <div className="bg-white-A700_19 flex flex-row gap-[21px] items-center justify-start mt-4 md:pr-10 sm:pr-5 pr-[1380px] rounded-[10px] w-full">
            <div className="bg-deep_purple-A200 flex flex-col h-[70px] items-center justify-end p-[17px] rounded-[10px] w-[70px]">
              <Img
                className="h-[35px] w-[35px]"
                src="images/img_riinstagramfill.svg"
                alt="riinstagramfill"
              />
            </div>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
              size="txtSFProRegular22WhiteA700"
            >
              http://
            </Text>
          </div>
          <div className="bg-white-A700_19 flex flex-row gap-5 items-center justify-start mt-[30px] rounded-[10px] w-full">
            <div className="bg-deep_purple-A200 flex flex-col h-[70px] items-center justify-end p-[17px] rounded-[10px] w-[70px]">
              <Img
                className="h-[35px] w-[35px]"
                src="images/img_icbaselinetiktok_white_a700.svg"
                alt="icbaselinetikto"
              />
            </div>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
              size="txtSFProRegular22WhiteA700"
            >
              http://
            </Text>
          </div>
          <Input
            name="group1000009635"
            placeholder="http://"
            className="!placeholder:text-white-A700 !text-white-A700 md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
            wrapClassName="flex mt-[30px] rounded-[10px] w-full"
            prefix={
              <Img
                className="h-[35px] mr-[35px] my-auto"
                src="images/img_mditwitter_white_a700.svg"
                alt="mdi:twitter"
              />
            }
            size="sm"
          ></Input>
          <Input
            name="group2680"
            placeholder="http://"
            className="!placeholder:text-white-A700 !text-white-A700 md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
            wrapClassName="flex mt-[30px] rounded-[10px] w-full"
            prefix={
              <Img
                className="h-[35px] mr-[35px] my-auto"
                src="images/img_ictwotonefacebook.svg"
                alt="ic:twotone-facebook"
              />
            }
            size="sm"
          ></Input>
          <div className="bg-white-A700_19 flex flex-row gap-[21px] items-center justify-start mt-[30px] md:pr-10 sm:pr-5 pr-[1380px] rounded-[10px] w-full">
            <div className="bg-deep_purple-A200 flex flex-col h-[70px] items-center justify-end p-[17px] rounded-[10px] w-[70px]">
              <div className="flex flex-col h-[35px] items-center justify-start w-[35px]">
                <Img
                  className="h-[35px] w-[35px]"
                  src="images/img_mdiyoutube.svg"
                  alt="mdiyoutube"
                />
              </div>
            </div>
            <Text
              className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
              size="txtSFProRegular22WhiteA700"
            >
              http://
            </Text>
          </div>
          <Input
            name="group2678"
            placeholder="http://"
            className="!placeholder:text-white-A700 !text-white-A700 md:text-xl p-0 sm:text-lg text-[22px] text-left w-full"
            wrapClassName="flex mt-[30px] rounded-[10px] w-full"
            prefix={
              <Img
                className="h-[35px] mr-[35px] my-auto"
                src="images/img_rilinkedinfill.svg"
                alt="ri:linkedin-fill"
              />
            }
            size="sm"
          ></Input>
          <div className="flex flex-col items-center justify-start mt-[60px] w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtSFProSemibold28"
                >
                  Wallet Address
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[47px] items-center justify-start p-2.5"
                  style={{
                    backgroundImage: "url('images/img_group1000009632.svg')",
                  }}
                >
                  <Text
                    className="mb-[11px] text-black-900 text-center text-xs"
                    size="txtSFProSemibold12"
                  >
                    Copy Link
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700_19 flex sm:flex-col flex-row md:gap-10 items-center justify-between pl-5 rounded-[10px] w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtSFProRegular22WhiteA700"
                >
                  0x7a9fe22691c811ea339401bbb2leb
                </Text>
                <div className="bg-deep_purple-A200 flex flex-col h-[70px] items-center justify-end outline outline-[0.5px] outline-deep_purple-A200 p-[17px] rounded-[10px] w-[70px]">
                  <Img
                    className="h-[35px] w-[35px]"
                    src="images/img_copyalt1.svg"
                    alt="copyaltOne"
                  />
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
                        alt="icbaselinetikto_One"
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

export default EditProfilePagePage;
