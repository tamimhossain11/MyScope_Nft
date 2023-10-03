import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AboutpagePage = () => {
  const [group1000010222value, setGroup1000010222value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-end mx-auto py-[29px] w-full">
        <div className="flex flex-col items-center justify-start mt-2.5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1530px] mx-auto md:px-5 w-full">
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
                  src="images/img_group1000009458_12.svg"
                  alt="group1000009458"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-start mt-[116px] w-[16%] md:w-full">
              <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                <Text
                  className="mt-[3px] md:text-4xl sm:text-[34px] text-[38px] text-right text-white-A700"
                  size="txtSFProRegular38"
                >
                  Pages
                </Text>
                <Radio
                  value="About"
                  className="font-semibold mb-[3px] md:text-4xl sm:text-[34px] text-[38px] text-deep_purple-A200 text-left"
                  inputClassName="bg-white-A700 h-3 mr-[5px] w-3"
                  checked={false}
                  name="about"
                  label="About"
                  id="About"
                ></Radio>
              </div>
              <Line className="bg-gradient2  h-[5px] w-[55%]" />
            </div>
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mt-[113px] w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtSFProSemibold48"
                >
                  About MyScope
                </Text>
                <Text
                  className="leading-[35.00px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
                  size="txtSFProRegular22WhiteA700"
                >
                  Multidisciplinary visual artist James Jean presents Fragments
                  (2022), a new series of hand-drawn digital artworks
                  commissioned by the digital art platform Outland. The new and
                  ambitious series is. Multidisciplinary visual artist James
                  Jean presents Fragments (2022), a new series.
                </Text>
              </div>
              <div className="h-[700px] relative w-full">
                <Img
                  className="h-[700px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle66423_700x1530.png"
                  alt="rectangle66423"
                />
                <div className="absolute bg-deep_purple-A200_cc flex flex-col h-full inset-[0] items-center justify-center m-auto p-[265px] md:px-10 sm:px-5 rounded-[15px] w-full">
                  <div className="bg-white-A700_19 flex flex-col h-[170px] items-center justify-start p-[25px] sm:px-5 rounded-[50%] w-[170px]">
                    <div className="bg-white-A700 flex flex-col h-[120px] items-center justify-start p-5 rounded-[50%] w-[120px]">
                      <Img
                        className="h-20 w-20"
                        src="images/img_materialsymbol_black_900_01.svg"
                        alt="materialsymbol_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[58px] items-center justify-start mt-[118px] w-[82%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                size="txtSFProSemibold48"
              >
                Numbers Speak
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                    size="txtSFProBold50"
                  >
                    2023
                  </Text>
                  <Text
                    className="text-[22px] text-gray-400_05 sm:text-lg md:text-xl"
                    size="txtSFProMedium22Gray40005"
                  >
                    total volume (USD)
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-center justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                    size="txtSFProBold50"
                  >
                    $179M
                  </Text>
                  <Text
                    className="text-[22px] text-center text-gray-400_05 sm:text-lg md:text-xl"
                    size="txtSFProMedium22Gray40005"
                  >
                    floor price (USD)
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-center justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                    size="txtSFProBold50"
                  >
                    450K
                  </Text>
                  <Text
                    className="text-[22px] text-center text-gray-400_05 sm:text-lg md:text-xl"
                    size="txtSFProMedium22Gray40005"
                  >
                    best offer (USD)
                  </Text>
                </div>
                <div className="flex flex-col justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                    size="txtSFProBold50"
                  >
                    9.4M
                  </Text>
                  <Text
                    className="ml-6 md:ml-[0] mt-1 text-[22px] text-gray-400_05 sm:text-lg md:text-xl"
                    size="txtSFProMedium22Gray40005"
                  >
                    llsted
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700_19 flex flex-col items-center justify-start mt-[115px] p-[120px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1531px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[750px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] rounded-tl-[500px] rounded-tr-[500px]"
                  src="images/img_rectangle66542.png"
                  alt="rectangle66542"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="leading-[60.00px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-[91%] sm:w-full"
                    size="txtSFProSemibold48"
                  >
                    Our Perks When You Join The Team.
                  </Text>
                  <Text
                    className="leading-[35.00px] mt-[30px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    Multidisciplinary visual artist James Jean presents
                    Fragments (2022), a new series of hand-drawn digital
                    artworks commissioned by the.
                  </Text>
                  <Text
                    className="leading-[35.00px] mt-5 text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtSFProRegular22WhiteA700"
                  >
                    Multidisciplinary visual artist James Jean presents
                    Fragments (2022), a new series of hand-drawn digital
                    artworks commissioned by the digital art platform Outland.
                    The new.
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-10 w-full">
                    <List
                      className="flex flex-col gap-[30px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between mr-[9px] my-0 w-[99%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-end justify-start w-[35%] sm:w-full">
                          <Img
                            className="h-10 w-10"
                            src="images/img_checkmark_deep_purple_a200.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSFProSemibold26"
                          >
                            Paid Family Leave
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                          <Img
                            className="h-10 w-10"
                            src="images/img_checkmark_deep_purple_a200.svg"
                            alt="checkmark_One"
                          />
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSFProSemibold26"
                          >
                            Health Insurance
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 w-full">
                        <div className="flex sm:flex-1 flex-row gap-2.5 items-center justify-start w-[29%] sm:w-full">
                          <Img
                            className="h-10 w-10"
                            src="images/img_checkmark_deep_purple_a200.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSFProSemibold26"
                          >
                            Flexible Hours
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-2.5 items-end justify-start w-[34%] sm:w-full">
                          <Img
                            className="h-10 w-10"
                            src="images/img_checkmark_deep_purple_a200.svg"
                            alt="checkmark_One"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSFProSemibold26"
                          >
                            Challenging Work
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between mr-[93px] my-0 w-[88%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-[38%] sm:w-full">
                          <Img
                            className="h-10 w-10"
                            src="images/img_checkmark_deep_purple_a200.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSFProSemibold26"
                          >
                            Unlimited Coffee
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-end justify-start w-1/4 sm:w-full">
                          <Img
                            className="h-10 w-10"
                            src="images/img_checkmark_deep_purple_a200.svg"
                            alt="checkmark_One"
                          />
                          <Text
                            className="mb-0.5 mt-[5px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                            size="txtSFProSemibold26"
                          >
                            Great Pay
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1531px] mt-[118px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[51px] items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                  size="txtSFProSemibold48"
                >
                  Meet Our Amazing Team
                </Text>
                <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                  <div className="bg-deep_purple-A200 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-3/4 md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[150px]"
                        src="images/img_rectangle66528.png"
                        alt="rectangle66528"
                      />
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Davis Press
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtSFProRegular18WhiteA700"
                        >
                          Ui/Ux Designer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[92%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_mditwitter_white_a700.svg"
                          alt="mditwitter"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_basilinstagramsolid.svg"
                          alt="basilinstagrams"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-3/4 md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[150px]"
                        src="images/img_rectangle66528_150x150.png"
                        alt="rectangle66528"
                      />
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Davis Press
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtSFProRegular18WhiteA700"
                        >
                          Ui/Ux Designer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[92%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_mditwitter_white_a700.svg"
                          alt="mditwitter"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_basilinstagramsolid.svg"
                          alt="basilinstagrams"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-3/4 md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[150px]"
                        src="images/img_rectangle66528.png"
                        alt="rectangle66528"
                      />
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Davis Press
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtSFProRegular18WhiteA700"
                        >
                          Ui/Ux Designer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[92%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_mditwitter_white_a700.svg"
                          alt="mditwitter"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_basilinstagramsolid.svg"
                          alt="basilinstagrams"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-3/4 md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[150px]"
                        src="images/img_rectangle66528.png"
                        alt="rectangle66528"
                      />
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Davis Press
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtSFProRegular18WhiteA700"
                        >
                          Ui/Ux Designer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[92%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_mditwitter_white_a700.svg"
                          alt="mditwitter"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_basilinstagramsolid.svg"
                          alt="basilinstagrams"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-3/4 md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[150px]"
                        src="images/img_rectangle66528.png"
                        alt="rectangle66528"
                      />
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Davis Press
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtSFProRegular18WhiteA700"
                        >
                          Ui/Ux Designer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[92%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_mditwitter_white_a700.svg"
                          alt="mditwitter"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_basilinstagramsolid.svg"
                          alt="basilinstagrams"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-3/4 md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[150px]"
                        src="images/img_rectangle66528.png"
                        alt="rectangle66528"
                      />
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Davis Press
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtSFProRegular18WhiteA700"
                        >
                          Ui/Ux Designer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[92%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_mditwitter_white_a700.svg"
                          alt="mditwitter"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_basilinstagramsolid.svg"
                          alt="basilinstagrams"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-3/4 md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[150px]"
                        src="images/img_rectangle66528_150x150.png"
                        alt="rectangle66528"
                      />
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Davis Press
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtSFProRegular18WhiteA700"
                        >
                          Ui/Ux Designer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[92%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_mditwitter_white_a700.svg"
                          alt="mditwitter"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_basilinstagramsolid.svg"
                          alt="basilinstagrams"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-3/4 md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[150px]"
                        src="images/img_rectangle66528.png"
                        alt="rectangle66528"
                      />
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Davis Press
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtSFProRegular18WhiteA700"
                        >
                          Ui/Ux Designer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[92%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_mditwitter_white_a700.svg"
                          alt="mditwitter"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_basilinstagramsolid.svg"
                          alt="basilinstagrams"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-3/4 md:w-full">
                      <Img
                        className="h-[150px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[150px]"
                        src="images/img_rectangle66528.png"
                        alt="rectangle66528"
                      />
                      <div className="flex flex-col gap-4 items-center justify-start">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                          size="txtSFProSemibold28"
                        >
                          Davis Press
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtSFProRegular18WhiteA700"
                        >
                          Ui/Ux Designer
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[30px] items-center justify-between w-[92%] md:w-full">
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_mditwitter_white_a700.svg"
                          alt="mditwitter"
                        />
                        <Img
                          className="h-[26px] w-[26px]"
                          src="images/img_basilinstagramsolid.svg"
                          alt="basilinstagrams"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-center p-[53px] md:px-10 sm:px-5 rounded-[15px] w-full">
                    <Text
                      className="my-[121px] sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                      size="txtSFProHeavy28"
                    >
                      Join With Us!
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[74px]"
              src="images/img_group1000009441.svg"
              alt="group1000009441"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[51px] items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                  size="txtSFProSemibold48"
                >
                  You Might Have Read About Us In The News
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
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
                      International Women’s Day 2023: Power of Women x Man
                      City’s ‘I am EMPOWERED’ Collection Dropping Exclusively on
                      MyScope
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
                      International Women’s Day 2023: Power of Women x Man
                      City’s ‘I am EMPOWERED’ Collection Dropping Exclusively on
                      MyScope
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
                      International Women’s Day 2023: Power of Women x Man
                      City’s ‘I am EMPOWERED’ Collection Dropping Exclusively on
                      MyScope
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
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
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

export default AboutpagePage;
